import React, { PropTypes } from 'react';
import radium from 'radium';
import { LinkButton } from '../../../components';
import { images } from '../../../constants';
import { desktop, phone, tablet } from '../../../common/layout';

const styles = {
  button: {
    position: 'relative',
    backgroundSize: '100% 100%',
    width: 210,
    height: 72,
    fontFamily: 'BigNoodle',
    color: 'white',
    fontSize: 26,
    marginRight: 15,
    [desktop]: {
      width: 200,
      height: 70,
      fontSize: 24,
    },
    [tablet]: {
      width: 180,
      height: 50,
      fontSize: 22,
    },
    [phone]: {
      left: '50%',
      marginRight: 100,
      marginTop: 15,
      transform: 'translate(-50%)',
    },
  },
  center: {
    position: 'absolute',
    whiteSpace: 'nowrap',
    wordBreak: 'keep-all',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  1: {
    backgroundImage: `url(${images.homeButton1})`,
    ':hover': {
      backgroundImage: `url(${images.homeButton1Hover})`,
    },
  },
  2: {
    transform: 'translateY(25px)',
    backgroundImage: `url(${images.homeButton2})`,
    ':hover': {
      backgroundImage: `url(${images.homeButton2Hover})`,
    },
  },
  3: {
    backgroundImage: `url(${images.homeButton3})`,
    ':hover': {
      backgroundImage: `url(${images.homeButton3Hover})`,
    },
  },
};

class HomeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter() {
    this.setState({ hover: true });
  }

  handleMouseLeave() {
    this.setState({ hover: false });
  }

  render() {
    const { index, textFront, textBack, path } = this.props;
    return (
      <LinkButton
        to={path}
        style={[styles[index], styles.button]}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <span style={styles.center}>
          {this.state.hover ? textBack : textFront}
        </span>
      </LinkButton>
    );
  }
}

HomeButton.propTypes = {
  index: PropTypes.number.isRequired,
  textFront: PropTypes.string.isRequired,
  textBack: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default radium(HomeButton);
