import React from 'react';
import radium from 'radium';

const styles = {
  background: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ff5f2e',
  },
};

class About extends React.Component {
  render() {
    return (
      <div style={styles.background}>ABOUT</div>
    );
  }
}

export default radium(About);
