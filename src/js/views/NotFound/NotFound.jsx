import React from 'react';
import { browserHistory } from 'react-router';

class NotFound extends React.Component {
  componentDidMount() {
    browserHistory.push('/');
  }

  render() {
    return null;
  }
}

export default NotFound;
