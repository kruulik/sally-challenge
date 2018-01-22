// Modules
import React, { Component } from 'react';
import Radium from 'radium';

// Components

// Component styles
import styles from './styles';


class Search extends Component {
  constructor (props) {
    super(props);
    this.state = ({

    });
  }

  render () {


    return (
      <div style={styles.container}>
        <div style={styles.content}>
          Im a SearchBar
        </div>
      </div>
    )
  }

};

export default Radium(Search);
