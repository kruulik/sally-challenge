// Modules
import React, { Component } from 'react';
import Radium from 'radium';

// Components

// Component styles
import styles from './styles';


class Loading extends Component {
  constructor (props) {
    super(props);
    this.state = ({

    });
  }

  render () {


    return (
      <div style={styles.container}>
        <div style={styles.content}>
          Loading...
        </div>
      </div>
    )
  }

};

export default Radium(Loading);
