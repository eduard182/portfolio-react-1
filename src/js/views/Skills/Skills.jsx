import React from 'react';
import radium from 'radium';
import { Container, AppView } from '../../components';

class Skills extends AppView {
  render() {
    return super.render(
      <Container>
        <div>SKILLS</div>
      </Container>
    );
  }
}

export default radium(Skills);
