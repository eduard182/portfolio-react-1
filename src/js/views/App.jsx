import React, { PropTypes } from 'react';
import { Navbar } from './Navbar';

function App({ children, location }) {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Navbar path={location.pathname} />
      {children}
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

export default App;
