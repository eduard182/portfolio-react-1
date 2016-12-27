import React from 'react';
import Navbar from './Navbar';

function App({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
