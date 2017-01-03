import React from 'react';
import ViewTransitionGroup from './ViewTransitionGroup';

class AppView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };
  }

  setActiveAndCallbackAfter(active, delayActive, callback, delayCallback) {
    setTimeout(callback, delayCallback);

    setTimeout(() => {
      this.setState({ active });
    }, delayActive);
  }

  componentWillEnter(callback) {
    this.setActiveAndCallbackAfter(true, 600, callback, 0);
  }

  componentWillAppear(callback) {
    this.setActiveAndCallbackAfter(true, 600, callback, 0);
  }

  componentWillLeave(callback) {
    this.setActiveAndCallbackAfter(false, 0, callback, 500);
  }

  render(children) {
    return (
      <ViewTransitionGroup active={this.state.active}>
        {children}
      </ViewTransitionGroup>
    );
  }
}

export default AppView;
