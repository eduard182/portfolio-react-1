import React from 'react';
import radium from 'radium';

const styles = {
  background: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffca35',
  },
};

class Projects extends React.Component {
  render() {
    return (
      <div style={styles.background}>PROJECTS</div>
    );
  }
}

export default radium(Projects);
