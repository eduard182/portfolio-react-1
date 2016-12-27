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
  line: {
    transition: '0.3s',
    position: 'absolute',
    opacity: 1,
    width: 40,
    height: 3,
    borderRadius: 2,
    top: 0,
    backgroundColor: 'white',
  },
  lineChild2: { top: 10 },
  lineChild3: { top: 20 },
  lineDiagonal1: {
    transform: 'rotate(135deg)',
    marginTop: 10,
  },
  lineDiagonal2: {
    transform: 'rotate(-135deg)',
    marginTop: -10,
  },
  spinerHorizontal: { opacity: 0 },
};

class HamburgerMenu extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.open !== this.props.open;
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
            styles.line,
            open && styles.lineDiagonal1,
          ]}
        />
        <div
          style={[
            styles.line,
            styles.lineChild2,
            open && styles.spinerHorizontal,
          ]}
        />
        <div
          style={[
            styles.line,
            styles.lineChild3,
            open && styles.lineDiagonal2,
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
