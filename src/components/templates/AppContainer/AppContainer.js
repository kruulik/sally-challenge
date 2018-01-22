// Modules
import React, { Component } from 'react';
import Radium from 'radium';

// Components
import {Table} from '../Table'

// Component styles
import styles from './styles';


class AppContainer extends Component {
  constructor (props) {
    super(props);
    this.state = ({

    });
  }

  render () {


    return (
      <div style={styles.container}>
        <div style={styles.content}>
          <Table />
        </div>
      </div>
    )
  }

};

export default Radium(AppContainer);
