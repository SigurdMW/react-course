var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

// where in the DOM to show the app
var mainAppElement = document.getElementById('app');


ReactDOM.render(
  routes,
  mainAppElement
);