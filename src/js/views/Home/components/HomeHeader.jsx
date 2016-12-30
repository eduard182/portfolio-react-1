import React, { PropTypes } from 'react';
import radium from 'radium';
import { Link } from 'react-router';
import TWEEN, { Tween } from 'tween.js';
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
  constructor(props) {
    super(props);
    this.animate = this.animate.bind(this);
    this.expand = this.expand.bind(this);
    this.shrink = this.shrink.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.expand, 3000);
    this.animate();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    cancelAnimationFrame(this.animationFrame);
  }

  expand() {
    const { animatedHeader, span } = this;
    // reset values for animating.
    animatedHeader.style.transform = span.style.transform = 'translateX(0)';
    animatedHeader.style.width = 0;

    new Tween({ width: 0 })
      .to({ width: 100 }, 500)
      .onUpdate(function () {
        animatedHeader.style.width = `${this.width}%`;
      })
      .start();

    setTimeout(this.shrink, 500);
  }

  shrink() {
    const { animatedHeader, span } = this;
    const width = animatedHeader.getBoundingClientRect().width;
    new Tween({ width })
      .to({ width: 0 }, 500)
      .onUpdate(function () {
        animatedHeader.style.transform = `translateX(${width - this.width}px)`;
        animatedHeader.style.width = this.width;
        span.style.transform = `translateX(-${width - this.width}px)`;
      })
      .start();
  }

  animate(time) {
    this.animationFrame = requestAnimationFrame(this.animate);
    TWEEN.update(time);
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
