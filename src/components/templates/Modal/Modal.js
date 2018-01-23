// Modules
import React, { Component } from 'react';
import Radium from 'radium';

import {MdClose} from 'react-icons/lib/md';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

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
    const { close, selected, vehicles, drivers, updateRental, deleteRental } = this.props;
// debugger
    return (
      <div style={styles.container} >
        <div style={styles.modal} >
          <div style={{...styles.header, ...styles.header[selected.status]}}>
            <div>
              <h2 style={styles.h2}>
                {vehicles.find(v => v.id === selected.vehicle).brand}
              </h2>
              <span style={styles.subtitle}>
                {selected.status}
              </span>
            </div>
            <MdClose size={30} color='white' onClick={close}/>
          </div>
          <div style={styles.content}>
            <TextField
              style={{gridColumnStart: 2, width: '100%'}}
              id="start"
              floatingLabelText="Start Date"
              onChange={this.props.handleSearch}
              value={selected.start_date}
            />
            <TextField
              style={{gridColumnStart: 4, width: '100%'}}
              id="end"
              floatingLabelText="End Date"
              onChange={this.props.handleSearch}
              value={selected.end_date || ''}
            />
            <TextField
              style={{gridColumnStart: 2, width: '100%'}}
              id="rate"
              floatingLabelText="Rate"
              onChange={this.props.handleSearch}
              value={selected.rate}
            />
            <SelectField
              style={{gridColumnStart: 4, width: '100%'}}
              floatingLabelText="Status"
              id="status"
              value={selected.status}
              onChange={this.handleChange}
            >
              <MenuItem value={'reserved'} primaryText="Reserved" />
              <MenuItem value={'active'} primaryText="Active" />
              <MenuItem value={'returned'} primaryText="Returned" />
              <MenuItem value={'archived'} primaryText="Archived" />
            </SelectField>
            {/* <div style={styles.divider}></div> */}
            <TextField
              style={{gridColumnStart: 2, gridColumnEnd: 5, width: '100%'}}
              id="vehicle"
              floatingLabelText="Vehicle"
              onChange={this.props.handleSearch}
              value={vehicles.find(v => v.id === selected.vehicle).brand}
            />
            {/* <div style={styles.divider}></div> */}
            <TextField
              style={{gridColumnStart: 2, width: '100%'}}
              id="first_name"
              floatingLabelText="First Name"
              onChange={this.props.handleSearch}
              value={drivers.find(d => d.id === selected.driver).first_name}
            />
            <TextField
              style={{gridColumnStart: 4, width: '100%'}}
              id="last_name"
              floatingLabelText="Last Name"
              onChange={this.props.handleSearch}
              value={drivers.find(d => d.id === selected.driver).last_name}
            />
            <TextField
              style={{gridColumnStart: 2, gridColumnEnd: 5, width: '100%'}}
              id="email"
              required="true"
              floatingLabelText="Email"
              onChange={this.props.handleSearch}
              value={drivers.find(d => d.id === selected.driver).email}
            />
            <br />
            <br />
            <div style={styles.buttonRow}>
              <FlatButton label="Delete" onClick={deleteRental}/>
              <FlatButton label="Save" primary={true} onClick={updateRental}/>
            </div>
          </div>
        </div>
      </div>
    )
  }

};

export default Radium(Modal);
