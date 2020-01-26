import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App1 from './app1';
import App2 from './app2';
import App3 from './app3';
import App4 from './app4';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App1 />, document.getElementById('root1'));
ReactDOM.render(<App2 />, document.getElementById('root2'));
ReactDOM.render(<App3 />, document.getElementById('root3'));
ReactDOM.render(<App4 />, document.getElementById('root4'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
