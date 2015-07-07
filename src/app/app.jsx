(function () {
  var React = require('react/addons');
  var injectTapEventPlugin = require('react-tap-event-plugin');

  //import custom views
  var Main = require('./components/main.jsx');


  //Needed for React Developer Tools
  window.React = React;

  //Needed for onTouchTap
  //Can go away when react 1.0 release
  //Check this repo:
  //https://github.com/zilverline/react-tap-event-plugin
  injectTapEventPlugin();

  window.Game = React.render(<Main />, document.body);
})();