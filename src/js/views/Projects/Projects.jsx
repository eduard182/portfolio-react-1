import React from 'react';
import radium from 'radium';
import { Container, AppView } from '../../components';

class Projects extends AppView {
  render() {
    return super.render(
      <Container>
        <div>PROJECTS</div>
      </Container>
    );
  }
}

export default radium(Projects);
