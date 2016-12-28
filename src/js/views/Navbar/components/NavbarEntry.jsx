import React, { PropTypes } from 'react';
import radium from 'radium';
import NavbarLink from './NavbarLink';
import { tablet } from '../../../common/layout';

const styles = {
  entry: {
    transition: '0.3s ease-out',
    width: '20vw',
    height: '100vh',
    position: 'absolute',
    zIndex: 1,
    [tablet]: {
      height: '20vh',
      width: '100vw',
    },
  },
  entryActive: {
    width: '100vw',
    height: '100vh',
    zIndex: 100,
    [tablet]: {
      width: '100vw',
      height: '100vh',
    },
  },
};

function linkPosition(index, active) {
  if (active) {
    return { left: 0, top: 0 };
  }
  return {
    left: `${index * 20}vw`,
    top: 0,
    [tablet]: {
      top: `${index * 20}vh`,
      left: 0,
    },
  };
}

function linkBackgroundColor(color) {
  return {
    backgroundColor: color,
  };
}

class NavbarEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = { active: props.active };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    if (this.props.active) {
      setTimeout(() => {
        this.setState({ active: false });
      }, 10);
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ active: nextProps.active });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.active !== this.state.active;
  }

  handleClick() {
    this.props.onClick();
  }

  render() {
    const { name, path, index, color } = this.props;
    const { active } = this.state;

    return (
      <li
        style={[
          styles.entry,
          active && styles.entryActive,
          linkPosition(index, active),
          linkBackgroundColor(color),
        ]}
      >
        <NavbarLink path={path} clicked={active} onClick={this.handleClick}>
          {name}
        </NavbarLink>
      </li>
    );
  }
}

NavbarEntry.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool,
};

export default radium(NavbarEntry);
