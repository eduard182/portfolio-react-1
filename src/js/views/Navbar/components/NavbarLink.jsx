import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import radium from 'radium';

const styles = {
  button: {
    color: 'white',
    position: 'absolute',
    fontFamily: 'BigNoodle',
    left: '50%',
    top: '50%',
    fontSize: 80,
    textDecoration: 'none',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'transparent',
    border: 0,
    margin: 0,
    opacity: 1,
    ':hover': {
      textDecoration: 'underline',
    },
    ':focus': {
      outline: 0,
    },
  },
  buttonDisabled: {
    transition: '0.3s ease-out',
    opacity: 0,
  },
};

class NavbarLink extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    browserHistory.push(this.props.path);
    this.props.onClick();
  }

  render() {
    const { clicked, children } = this.props;
    const disabled = { disabled: clicked };

    return (
      <button
        style={[styles.button, clicked && styles.buttonDisabled]}
        onClick={this.handleClick}
        {...disabled}
      >
        {children}
      </button>
    );
  }
}

NavbarLink.propTypes = {
  path: PropTypes.string.isRequired,
  clicked: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
};

export default radium(NavbarLink);
