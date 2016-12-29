import React from 'react';
import radium from 'radium';
import { Container, AppView } from '../../components';

class Contact extends AppView {
  render() {
    return super.render(
      <Container>
        <div>CONTACT</div>
      </Container>
    );
  }
}

export default radium(Contact);
