import React, { PropTypes } from 'react';
import radium from 'radium';
import { Link } from 'react-router';

const styles = {
  baseLink: {
    textDecoration: 'none',
  },
  wrapper: {
    fontFamily: 'BigNoodle',
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
    ':hover': {
      transform: 'scale(1.2)',
    },
  },
  wrapperBig: {
    fontSize: 90,
  },
};

class HomeHeader extends React.Component {
  render() {
    const { path, text, isBig } = this.props;
    return (
      <Link style={styles.baseLink} to={path}>
        <div style={[styles.wrapper, isBig && styles.wrapperBig]}>
          {text}
        </div>
      </Link>
    );
  }
}

HomeHeader.propTypes = {
  text: PropTypes.string,
  path: PropTypes.string,
  isBig: PropTypes.bool,
};

export default radium(HomeHeader);
