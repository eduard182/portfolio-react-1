import React, { PropTypes } from 'react';
import radium from 'radium';
import { desktop, phone, tablet, largeScreen } from '../common/layout';

const styles = {
  container: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    [largeScreen]: {
      width: 1000,
    },
    [desktop]: {
      width: 768,
    },
    [tablet]: {
      width: 600,
    },
    [phone]: {
      width: '90%',
    },
  },
};

const Container = ({ children }) => (
  <div style={styles.container}>
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node,
};

export default radium(Container);
