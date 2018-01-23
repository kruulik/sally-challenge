// Modules
import React, { Component } from 'react';
import Radium from 'radium';
import merge from 'lodash/merge';


// Components
import {Loading} from '../Loading';
import {Header} from '../Header';
import {Table} from '../Table';
import {Modal} from '../Modal';
import {Search} from '../Search';

// Component styles
import styles from './styles';

// API
import  drivers from '../../../api/drivers.api.js';
import  rentals from '../../../api/rentals.api.js';
import  vehicles from '../../../api/vehicles.api.js';


class AppContainer extends Component {
  constructor (props) {
    super(props);
    this.state = ({
      modalOpen: false,
      selected: null,
      loading: false,
      drivers: [],
      vehicles: [],
      allRentals: [],
      filteredRentals: []
    });
    this.fetchData = this.fetchData.bind(this);
    this.handleRowClick = this.handleRowClick.bind(this);
    this.updateRental = this.updateRental.bind(this);
  }

  async fetchData () {
    let d, r, v;
    this.setState({
      loading: true,
    })
    try {
      d = await drivers();
      r = await rentals();
      v = await vehicles();
    } catch (e) {
      console.log('whoops');
    }
    return {d, r, v};
  }

  async componentDidMount () {
    const data = await this.fetchData();
    this.setState({
      drivers: data.d,
      allRentals: data.r,
      vehicles: data.v,
      loading: false,
    });
  }

  search = e => {
    const { allRentals, vehicles, drivers, filteredRentals } = this.state;
    const filtered = allRentals.filter(rental => {
      if (
        vehicles[rental.vehicle - 1].brand.includes(e.target.value) || drivers[rental.driver - 1].first_name.includes(e.target.value) || drivers[rental.driver - 1].last_name.includes(e.target.value) || drivers[rental.driver - 1].email.includes(e.target.value)
      ) {
          return rental;
        }
    })

    this.setState({
      filteredRentals: filtered,
      searchValue: e.target.value,
    });
  }

  handleRowClick (e) {
    this.setState({
      modalOpen: true,
      selected: e,
    })
  }

  closeModal = (e) => {
    this.setState({
      modalOpen: false,
      selected: null,
    });
  }

  updateRental = (form) => {
    // redux would come in handy here...
    const { drivers, vehicles, allRentals } = this.state;
    const driver = drivers.find(d => d.id === form.item.driver);
    const vehicle = vehicles.find(v => v.id === form.item.vehicle);
    let rental = allRentals.find(r => r.id === form.item.id);
    rental = merge(rental, {
      start_date: form.start_date || form.item.start_date,
      end_date: form.end_date || form.item.end_date,
      rate: form.rate || form.item.rate,
      email: form.email || form.item.email,
      driver: driver.id,
      vehicle: vehicle.id
    });
    this.setState({
      allRentals,
      modalOpen: false,
      selected: null,
    })

    this.closeModal
  }

  deleteRental = (form) => {

    let { allRentals } = this.state;
    allRentals = Object.values(allRentals).filter(del => {
      return del.id !== form.item.id
    });
    this.setState({
      allRentals,
      modalOpen: false,
      selected: null,
    })
  }

  render () {
    const { modalOpen, drivers, allRentals, vehicles, loading, filteredRentals, searchValue, selected } = this.state;

    return (
      <div style={styles.container}>
        <div style={styles.content}>
          { loading ? <Loading /> : null }
          { modalOpen ? <Modal
            selected={selected}
            drivers={drivers}
            vehicles={vehicles}
            close={this.closeModal}
            updateRental={this.updateRental}
            deleteRental={this.deleteRental}/>
          : null
          }
          <Header title={"Rentals"} count={allRentals.length} />
          <Search handleSearch={this.search} />
          <Table
            rentals={searchValue ? filteredRentals : allRentals}
            drivers={drivers}
            vehicles={vehicles}
            rowClick={this.handleRowClick}
          />
        </div>
      </div>
    )
  }

};

export default Radium(AppContainer);
