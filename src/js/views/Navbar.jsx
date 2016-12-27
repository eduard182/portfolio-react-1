import React from 'react';
import { Link } from 'react-router';
import radium from 'radium';
import { routePaths } from '../constants';

const styles = {
  entry: {
    marginLeft: 10,
  },
};

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <Link style={styles.entry} to={routePaths.HOME}>HOME</Link>
        <Link style={styles.entry} to={routePaths.SKILLS}>SKILLS</Link>
        <Link style={styles.entry} to={routePaths.PROJECTS}>PROJECTS</Link>
        <Link style={styles.entry} to={routePaths.ABOUT}>ABOUT</Link>
        <Link style={styles.entry} to={routePaths.CONTACT}>CONTACT</Link>
      </div>
    );
  }
}

export default radium(Navbar);
