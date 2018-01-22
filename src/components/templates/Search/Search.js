// Modules
import React, { Component } from 'react';
import Radium from 'radium';

import TextField from 'material-ui/TextField';

// Components

// Component styles
import styles from './styles';


class Search extends Component {
  constructor (props) {
    super(props);
    this.state = ({
      value: 'Search'
    });
  }

  // handleChange = e => {
  //   this.setState({
  //     value: e.target.value,
  //   });
  // };

  render () {
    return (
      <div style={styles.container}>
        <div style={styles.content}>
          <TextField
            id="search"
            type="search"
            placeholder="Search"
            onChange={this.props.handleSearch}
            margin="normal"
          />
        </div>
      </div>
    )
  }

};

export default Radium(Search);
