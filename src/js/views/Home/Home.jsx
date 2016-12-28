import React from 'react';
import radium from 'radium';
import Container from '../../components/Container';
import { HomeHeader, HomeButton } from './components';
import { routePaths } from '../../constants';

const styles = {
  background: {
    backgroundColor: '#47b8e0',
  },
};

class Home extends React.Component {
  render() {
    return (
      <section style={styles.background}>
        <Container>
          <HomeHeader path={routePaths.ABOUT} text="NICOLAS REICHERT'S" isBig color="#ff5f2e" />
          <br />
          <HomeHeader path={routePaths.PROJECTS} text="PORTFOLIO" color="#ffca35" />
        </Container>
      </section>
    );
  }
}

export default radium(Home);
