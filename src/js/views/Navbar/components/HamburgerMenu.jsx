import React, { PropTypes } from 'react';
import radium from 'radium';

const styles = {
  hamburger: {
    position: 'absolute',
    backgroundColor: 'transparent',
    margin: 0,
    border: 0,
    width: 60,
    height: 40,
    left: 25,
    top: 25,
    zIndex: 100,
    '@media(max-width: 768px)': {
      left: 'calc(100vw - 70px)',
    },
    ':focus': {
      backgroundColor: 'transparent',
      outline: 0,
    },
  },
  spinner: {
    transition: '0.3s',
    position: 'absolute',
    opacity: 1,
    width: 50,
    height: 4,
    top: 0,
    backgroundColor: 'white',
  },
  spinnerChild2: {
    top: 15,
  },
  spinnerChild3: {
    top: 30,
  },
  spinnerDiagonal1: {
    transform: 'rotate(135deg)',
    marginTop: 15,
  },
  spinnerDiagonal2: {
    transform: 'rotate(-135deg)',
    marginTop: -15,
  },
  spinerHorizontal: {
    opacity: 0,
  },
};

class HamburgerMenu extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick();
  }

  render() {
    const { open } = this.props;
    return (
      <button style={styles.hamburger} onClick={this.handleClick}>
        <div
          style={[
            styles.spinner,
            open && styles.spinnerDiagonal1,
          ]}
        />
        <div
          style={[
            styles.spinner,
            styles.spinnerChild2,
            open && styles.spinerHorizontal,
          ]}
        />
        <div
          style={[
            styles.spinner,
            styles.spinnerChild3,
            open && styles.spinnerDiagonal2,
          ]}
        />
      </button>
    );
  }
}

HamburgerMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default radium(HamburgerMenu);
