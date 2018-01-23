// Modules
import React, { Component } from 'react';
import Radium from 'radium';

import {MdClose} from 'react-icons/lib/md'


// Components

// Component styles
import styles from './styles';


class Modal extends Component {
  constructor (props) {
    super(props);
    this.state = ({

    });
  }

  componentDidMount(){

  }

  render () {
    const { close, selected, vehicles, drivers, updateRental } = this.props;
debugger
    return (
      <div style={styles.container} >
        <div style={styles.content} >
          <div style={{...styles.header, ...styles.header[selected.status]}}>
            <h2 style={{margin: 0, fontWeight: '400', lineHeight: 1, fontSize: 25}}>{vehicles.find(v => v.id === selected.vehicle).brand}</h2>
            <span style={{fontWeight: '400', fontSize: 16}}>{selected.status}</span>

            <MdClose size={30} color='white'/>

          </div>
        </div>
      </div>
    )
  }

};

export default Radium(Modal);
