import React from 'react';
import ReactDOM from 'react-dom';
import { StyleRoot } from 'radium';
import AppRouter from './AppRouter';

ReactDOM.render(
  <StyleRoot>
    <AppRouter />
  </StyleRoot>,
  document.getElementById('app')
);
