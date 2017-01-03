import React, { PropTypes } from 'react';
import radium from 'radium';

const styles = {
  container: {
    opacity: 0,
  },
  containerActive: {
    transition: '0.5s ease-out',
    opacity: 1,
  },
};

const ViewTransitionGroup = ({ children, active }) => (
  <div style={[styles.container, active && styles.containerActive]}>
    {children}
  </div>
);

ViewTransitionGroup.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool.isRequired,
};

export default radium(ViewTransitionGroup);
