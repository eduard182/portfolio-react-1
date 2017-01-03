import React from 'react';
import radium from 'radium';
import { Container, AppView } from '../../components';
import { images } from '../../constants';
import { AboutText, AboutImage } from './components';
import { titleData, textData } from './model';

const styles = {
  background: {
    backgroundImage: images.aboutBoard,
    backgroundSize: '100% 100%',
  },
};

class About extends AppView {
  static get defaultProps() {
    return {
      title: titleData,
      text: textData,
    };
  }

  render() {
    return super.render(
      <Container style={styles.background}>
        <AboutImage />
        <AboutText {...this.props} />
      </Container>
    );
  }
}

export default radium(About);
