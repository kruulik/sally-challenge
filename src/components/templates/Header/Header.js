// Modules
import React, { Component } from 'react';
import Radium from 'radium';

// Component styles
import styles from './styles';

const Header = ({title, count}) => (
  <div style={styles.container}>
    <div style={styles.content}>
      <h1 style={{margin: 0, fontWeight: '400', lineHeight: 1, fontSize: 25}}>{title}</h1>
      <span style={{fontWeight: '400', fontSize: 16}}>{count} total</span>
    </div>
  </div>
);

export default Radium(Header);
