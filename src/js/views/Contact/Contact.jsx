import React from 'react';
import radium from 'radium';

const styles = {
  background: {
    width: '100%',
    height: '100%',
    backgroundColor: '#8e55a6',
  },
};

class Contact extends React.Component {
  render() {
    return (
      <div style={styles.background}>CONTACT</div>
    );
  }
}

export default radium(Contact);
