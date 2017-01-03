import React, { PropTypes } from 'react';
import radium from 'radium';
import { phone } from '../../../common/layout';

const styles = {
  component: {
    color: 'white',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  text: {
    width: '30%',
    fontFamily: 'HelveticaNeue',
    textRendering: 'optimizeLegibility',
    textDecoration: 'none',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    float: 'left',
    [phone]: {
      float: 'right',
    },
  },
  header: {
    fontFamily: 'BigNoodle',
    marginBottom: 15,
    fontSize: 50,
  },
};

const AboutText = ({ title, text }) => (
  <div style={styles.component}>
    <h1 style={styles.header}>{title}</h1>
    <p style={styles.text}>
      {text.split('\n').map((item, index) => (
        <span key={index}>
          {item}
          <br />
        </span>
      ))}
    </p>
  </div>
);

AboutText.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default radium(AboutText);
