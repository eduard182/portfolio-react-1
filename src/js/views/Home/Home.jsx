import React from 'react';
import radium from 'radium';

const styles = {
  background: {
    width: '100%',
    height: '100%',
    backgroundColor: '#47b8e0',
  },
};

class Home extends React.Component {
  render() {
    return (
      <div style={styles.background}>HOME</div>
    );
  }
}

export default radium(Home);
