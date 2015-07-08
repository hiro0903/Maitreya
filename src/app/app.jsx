(function () {
  var React = require('react');
  var ReactDom = require("react-dom");

  var config = require('./config');

  //import custom views
  var Main = require('./components/main.jsx');

  //Needed for React Developer Tools
  window.React = React;

  window.Game = ReactDom.render(<Main config={config} />, document.body);
})();