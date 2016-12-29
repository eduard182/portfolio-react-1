import React, { PropTypes } from 'react';
import radium from 'radium';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import $ from 'jquery';
import { desktop, phone } from '../../../common/layout';

const styles = {
  baseLink: {
    textDecoration: 'none',
    position: 'relative',
    left: '50%',
    transform: 'translate(-50%)',
    display: 'inline-block',
    float: 'left',
    clear: 'left',
  },
  wrapper: {
    fontFamily: 'BigNoodle',
    textRendering: 'optimizeLegibility',
    textDecoration: 'none',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    display: 'block',
    fontSize: 60,
    color: 'white',
    whiteSpace: 'nowrap',
    wordBreak: 'keep-all',
    [desktop]: {
      fontSize: 40,
    },
    [phone]: {
      fontSize: 39,
    },
    ':hover': {
      transform: 'scale(1.2)',
    },
    marginBottom: 15,
  },
  wrapperBig: {
    fontSize: 120,
    [desktop]: {
      fontSize: 90,
    },
    [phone]: {
      fontSize: 50,
    },
  },
  animatedText: {
    position: 'absolute',
    overflow: 'hidden',
    top: 0,
    left: 0,
    width: 0,
    height: '100%',
  },
  span: {
    position: 'absolute',
  },
};

class HomeHeader extends React.Component {
  componentDidMount() {
    this.animateHomeHeader();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  animateHomeHeader() {
    const $header = $(findDOMNode(this.animatedHeader));
    const $span = $(findDOMNode(this.span));

    let shrink = () => {};
    // Animation of fonts turning colored.
    const expand = () => {
      // reset values for animating.
      $header.css('transform', 'translate(0)');
      $span.css('transform', 'translate(0)');

      $({ width: 0 }).animate({ width: 100 }, {
        duration: 'slow',
        step: (now) => {
          $header.css('width', `${now}%`);
        },
        done: shrink,
      });
    };

    // Animation of fonts turning white again.
    shrink = () => {
      const width = $header.width();
      $({ width: 0 }).animate({ width }, {
        duration: 'slow',
        step: (now) => {
          $header.css({
            transform: `translateX(${now}px)`,
            width: `${width - now}px`,
          });
          $span.css('transform', `translateX(${now * -1}px)`);
        },
      });
    };

    this.interval = setInterval(expand, 3000);
  }

  render() {
    const { path, isBig, text, color } = this.props;
    return (
      <Link style={styles.baseLink} to={path}>
        <div style={[styles.wrapper, isBig && styles.wrapperBig]}>
          {text}
          <div style={styles.animatedText} ref={(node) => { this.animatedHeader = node; }}>
            <span style={[styles.span, { color }]} ref={(node) => { this.span = node; }}>
              {text}
            </span>
          </div>
        </div>
      </Link>
    );
  }
}

HomeHeader.propTypes = {
  text: PropTypes.string,
  path: PropTypes.string,
  isBig: PropTypes.bool,
  color: PropTypes.string,
};

export default radium(HomeHeader);
