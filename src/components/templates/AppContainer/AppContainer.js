// Modules
import React, { Component } from 'react';
import Radium from 'radium';

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
      loading: false,
      drivers: [],
      vehicles: [],
      allRentals: [],
      filteredRentals: []
    });
    this.fetchData = this.fetchData.bind(this);
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



  render () {
    const { modalOpen, drivers, allRentals, vehicles, loading, filteredRentals, searchValue } = this.state;

    return (
      <div style={styles.container}>
        <div style={styles.content}>
          { loading ? <Loading /> : null }
          { modalOpen ? <Modal /> : null }
          <Header title={"Rentals"} count={allRentals.length} />
          <Search handleSearch={this.search} />
          <Table
            rentals={searchValue ? filteredRentals : allRentals}
            drivers={drivers}
            vehicles={vehicles}
          />
        </div>
      </div>
    )
  }

};

export default Radium(AppContainer);
