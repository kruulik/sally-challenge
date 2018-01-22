// Modules
import React, { Component } from 'react';
import Radium from 'radium';

// Components

// Component styles
import styles from './styles';


class Table extends Component {
  constructor (props) {
    super(props);
    this.state = ({

    });
  }

  render () {


    return (
      <div style={styles.container}>
        <div style={styles.content}>
          Im a table
        </div>
      </div>
    )
  }

};

export default Radium(Table);
