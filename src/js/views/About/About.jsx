import React from 'react';
import radium from 'radium';
import { Container, AppView } from '../../components';

class About extends AppView {
  render() {
    return super.render(
      <Container>
        <div>ABOUT</div>
      </Container>
    );
  }
}

export default radium(About);
