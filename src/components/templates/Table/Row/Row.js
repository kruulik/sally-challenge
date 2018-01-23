// Modules
import React, { Component } from 'react';
import Radium from 'radium';

// Components

// Component styles
import styles from './styles';


class Row extends Component {

  date = (date) => {
    if (date) {
      let dt = new Date(date)
      return `${dt.getDate()}.${dt.getMonth()}.${dt.getFullYear()} ${dt.getHours()}:${dt.getMinutes()}`
    } else {
      return null
    }
  }

  render () {
    const { status, vehicle, driver, email, start, end, rate, rowClick, item } = this.props;
    return (
      <div style={styles.container} onClick={rowClick.bind(this, item)}>
        <div
          style={{...styles.cell, ...styles.cell[status], gridColumnStart: 1}}>
          {status}
        </div>
        <div
          style={{...styles.cell, gridColumnStart: 2}}>
          {vehicle ? vehicle.brand : '–'}
        </div>
        <div
          style={{...styles.cell, gridColumnStart: 3}}>
          {driver ? `${driver.first_name} ${driver.last_name}` : '–'}
        </div>
        <div
          style={{...styles.cell, gridColumnStart: 4}}>
          {email || '–'}
        </div>
        <div
          style={{...styles.cell, gridColumnStart: 5}}>
          {this.date(start) || '–'}
        </div>
        <div
          style={{...styles.cell, gridColumnStart: 6}}>
          {this.date(end) || '–'}
        </div>
        <div
          style={{...styles.cell, gridColumnStart: 7}}>
          {rate || '–'}
        </div>

      </div>
    )
  }

};

export default Radium(Row);
