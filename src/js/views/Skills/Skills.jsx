import React from 'react';
import radium from 'radium';

const styles = {
  background: {
    width: '100%',
    height: '100%',
    backgroundColor: '#e94e79',
  },
};

class Skills extends React.Component {
  render() {
    return (
      <div style={styles.background}>SKILLS</div>
    );
  }
}

export default radium(Skills);
