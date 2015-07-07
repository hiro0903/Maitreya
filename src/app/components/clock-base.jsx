var React = require('react');

var ClockBase = React.createClass({

  mixins: [],

  getDefaultProps: function () {
      return {
          time_hr : '02',
          time_min: '00',
          time_sec: '00',
          time_mm : '000'
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
      <section className="clock-base">
        <div className="time hr">02</div>
        <div className="time min">05</div>
        <div className="time sec">33</div>
        <div className="time mm">325</div>
      </section>
    );
  }
});

module.exports = ClockBase;
