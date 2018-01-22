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
      rentals: [],
      vehicles: []
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
      rentals: data.r,
      vehicles: data.v,
      loading: false,
    });
  }

  search = e => {
    this.setState({
      value: e.target.value,
    });
  }

  render () {
    const { modalOpen, drivers, rentals, vehicles, loading } = this.state;

    return (
      <div style={styles.container}>
        <div style={styles.content}>
          { loading ? <Loading /> : null }
          { modalOpen ? <Modal /> : null }
          <Header title={"Rentals"} count={rentals.length} />
          <Search handleSearch={this.search} />
          <Table rentals={rentals} drivers={drivers} vehicles={vehicles} />
        </div>
      </div>
    )
  }

};

export default Radium(AppContainer);
