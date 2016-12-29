import React, { PropTypes } from 'react';
import radium from 'radium';
import { images } from '../../../constants';

const styles = {
  button: {
    backgroundSize: '100% 100%',
    width: 140,
    height: 50,
  },
  1: {
    backgroundImage: `url(${images.homeButton1})`,
    ':hover': {
      backgroundImage: `url(${images.homeButton1Hover})`,
    },
  },
  2: {
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
  }

  render() {
    const { index, textFront, textBack } = this.props;
    return (
      <button style={[styles.button, styles[index]]}>
        {this.state.hover ? textBack : textFront}
      </button>
    );
  }
}

HomeButton.propTypes = {
  index: PropTypes.number.isRequired,
  textFront: PropTypes.string.isRequired,
  textBack: PropTypes.string.isRequired,
};

export default radium(HomeButton);
