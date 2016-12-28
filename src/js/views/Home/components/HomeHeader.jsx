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
    [desktop]: {
      fontSize: 40,
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
  },
  animatedText: {
    position: 'absolute',
    overflow: 'hidden',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  span: {
    position: 'absolute',
    whiteSpace: 'nowrap',
    wordBreak: 'keep-all',
  },
  lineBreak: {
    display: 'none',
    [phone]: {
      display: 'block',
    },
  },
};

class HomeHeader extends React.Component {
  componentDidMount() {
    this.animateHomeHeader();
  }

  animateHomeHeader() {
    const $header = $(findDOMNode(this.animatedHeader));
    $header.css('transform', 'translate(0)');

    const $span = $(findDOMNode(this.span));
    $span.css('transform', 'translate(0)');

    $({ width: 0 }).animate({ width: 100 }, {
      duration: 'slow',
      step: (now) => {
        $header.css('width', `${now}%`);
      },
      done: () => {
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
          done: () => {
            setTimeout(() => { this.animateHomeHeader(); }, 2000);
          },
        });
      },
    });
  }

  renderText() {
    const { text } = this.props;
    const words = text.split(' ');

    if (!words.length) {
      return words;
    }

    return (
      <div>
        {words[0]} <br style={styles.lineBreak} />{words[1]}
      </div>
    );
  }

  render() {
    const { path, isBig, color } = this.props;
    return (
      <Link style={styles.baseLink} to={path}>
        <div style={[styles.wrapper, isBig && styles.wrapperBig]}>
          {this.renderText()}
          <div style={styles.animatedText} ref={(node) => { this.animatedHeader = node; }}>
            <span style={[styles.span, { color }]} ref={(node) => { this.span = node; }}>
              {this.renderText()}
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
