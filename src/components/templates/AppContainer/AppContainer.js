// Modules
import React, { Component } from 'react';
import Radium from 'radium';

// Components
import {Table} from '../Table';
import {Modal} from '../Modal';
import {Search} from '../Search';

// Component styles
import styles from './styles';


class AppContainer extends Component {
  constructor (props) {
    super(props);
    this.state = ({
      modalOpen: false
    });
  }

  render () {
    const { modalOpen } = this.state;

    return (
      <div style={styles.container}>
        <div style={styles.content}>
          { modalOpen ? <Modal /> : null}
          <Search />
          <Table />
        </div>
      </div>
    )
  }

};

export default Radium(AppContainer);
