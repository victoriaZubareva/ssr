import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.hydrate(
  ({ data }) => <App data={data} />,
  document.getElementById('root')
);
