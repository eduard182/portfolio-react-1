import React, { PropTypes } from 'react';
import radium from 'radium';
import { Container, AppView } from '../../components';
import { HomeHeader, HomeButton } from './components';
import { headersData, buttonsData } from './model';

const styles = {
  div: {
    display: 'inline-block',
    position: 'relative',
    left: '50%',
    transform: 'translate(-50%)',
    marginBottom: 15,
  },
};

class Home extends AppView {
  static get defaultProps() {
    return {
      headers: headersData,
      buttons: buttonsData,
    };
  }

  render() {
    const { headers, buttons } = this.props;
    return super.render(
      <Container>
        <div style={styles.div}>
          {headers.map((header, index) => (
            <HomeHeader {...header} key={index} />
          ))}
        </div>
        <div style={styles.div}>
          {buttons.map(button => (
            <HomeButton {...button} key={button.index} />
          ))}
        </div>
      </Container>
    );
  }
}

Home.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      isBig: PropTypes.bool,
    }),
  ),
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number.isRequired,
      textFront: PropTypes.string.isRequired,
      textBack: PropTypes.string.isRequired,
    }),
  ),
};

export default radium(Home);
