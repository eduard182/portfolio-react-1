import React, { PropTypes } from 'react';
import radium from 'radium';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import $ from 'jquery';
import { desktop } from '../../../common/layout';

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
    display: 'block',
    fontSize: 60,
    color: 'white',
    [desktop]: {
      fontSize: 40,
    },
    ':hover': {
      transform: 'scale(1.2)',
    },
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

  render() {
    const { path, text, isBig, color } = this.props;
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
