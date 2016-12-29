import React, { PropTypes } from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';
import radium from 'radium';
import { Navbar } from './Navbar';
import { pageBackgroundColor } from '../constants';

const styles = {
  app: {
    width: '100vw',
    height: '100vh',
    transition: '0.3s ease-out',
  },
};

function App({ children, location }) {
  const pathName = location.pathname;

  const backgroundColor = {
    backgroundColor: pageBackgroundColor[pathName],
  };

  return (
    <div style={[styles.app, backgroundColor]}>
      <Navbar path={pathName} />
      <ReactTransitionGroup component="section">
        {children && React.cloneElement(children, { key: pathName })}
      </ReactTransitionGroup>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

export default radium(App);
