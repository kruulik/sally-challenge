// Modules
import React, { Component } from 'react';
import Radium from 'radium';

// Components
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
      drivers: [],
      rentals: [],
      vehicles: []
    });
  }

  async fetchData() {
    let d, r, v
    try {
      d = await drivers();
      r = await rentals();
      v = await vehicles();
    } catch (e) {
      console.log('whoops');
    }
    this.setState = ({
      drivers: d,
      rentals: r,
      vehicles: v,
    });
  }

  componentDidMount () {
    this.fetchData();
  }


  render () {
    const { modalOpen, drivers, rentals, vehicles } = this.state;

    return (
      <div style={styles.container}>
        <div style={styles.content}>
          { modalOpen ? <Modal /> : null }
          <Search />
          <Table />
        </div>
      </div>
    )
  }

};

export default Radium(AppContainer);
