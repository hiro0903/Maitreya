var React = require('react');

var ClockBase = require('./clock-base.jsx');

//main entry
var Main = React.createClass({

  mixins: [],

  getDefaultProps: function () {
      return {
          timeLeft : 1000 * 60 * 60 * 2, //2hr
      };
  },

  getInitialState: function () {


      return {
          timeLeft        : 1000 * 60 * 60 * 2, //2hr
      };
  },

  childContextTypes: {
      time      : React.PropTypes.number,
  },

  getChildContext: function() {
    return {
    };
  },

  componentWillMount: function() {

  },

  componentDidMount: function () {

  },

  componentWillUpdate: function (nextProps, nextState) {
  },

  componentDidUpdate: function (prevProps, prevState) {
  },

  render: function() {
    return (
      <main className="main">
        <div className="displayer">
          <ClockBase />
        </div>
      </main>
    );
  }
});

module.exports = Main;
