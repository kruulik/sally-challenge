// Modules
import React, { Component } from 'react';
import Radium from 'radium';

// Components
import {Row} from './Row';

// Component styles
import styles from './styles';


class Table extends Component {

  renderRows = (drivers, rentals, vehicles) => {
    if (rentals.length === 0){
      return (
        <div style={styles.emptyRows}>
          No Results
        </div>
      )
    }

    const sorted = rentals.sort((a,b) => {
      return Date.parse(b.start_date) - Date.parse(a.start_date)
    })

    const rows = sorted.map((rental, i) => {
      return (
        <Row
          key={i}
          status={rental.status}
          vehicle={vehicles[rental.vehicle - 1]}
          driver={drivers[rental.driver - 1]}
          email={drivers[rental.driver - 1].email}
          start={rental.start_date}
          end={rental.end_date}
          rate={rental.rate}
          rowClick={this.props.rowClick}
          item={rental}
        />
      )
    });


    return rows;
  }

  render () {

    const { drivers, rentals, vehicles } = this.props;

    return (
      <div style={styles.container}>
        <div style={styles.tableHeader}>
          <div style={{gridColumnStart: 1}}>status</div>
          <div style={{gridColumnStart: 2}}>vehicle</div>
          <div style={{gridColumnStart: 3}}>driver</div>
          <div style={{gridColumnStart: 4}}>email</div>
          <div style={{gridColumnStart: 5}}>start</div>
          <div style={{gridColumnStart: 6}}>return</div>
          <div style={{gridColumnStart: 7}}>rate</div>
        </div>
        { this.renderRows(drivers, rentals, vehicles) }
      </div>
    )
  }

};

export default Radium(Table);
