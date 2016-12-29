import React, { PropTypes } from 'react';
import radium from 'radium';
import { browserHistory } from 'react-router';

class LinkButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    browserHistory.push(this.props.to);
  }

  render() {
    const { style, children, onMouseEnter, onMouseLeave } = this.props;
    return (
      <button
        style={style}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={this.handleClick}
      >
        {children}
      </button>
    );
  }
}

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  style: PropTypes.shape({}),
  children: PropTypes.node,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

export default radium(LinkButton);
