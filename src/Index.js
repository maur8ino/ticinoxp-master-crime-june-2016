import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './components/App';

import data from './data';

window.React = React;

render(
  <App data={data}/>, document.getElementById('content')
);
