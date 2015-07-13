import React from 'react';
var  ClockBase = require( './clock-base.jsx');
var AnswerBase = require('./answer-base.jsx');

//main entry
class Main extends React.Component { 

  constructor(props){
      super(props);
      this.state = {
          time : props.config.timer,
          currentTime : Date.now(),
          stop : false,
          success : false,
          view : 1  //clock view
      }
  }

  getChildContext() {
    return {
        config : this.props.config
    };
  }

  componentWillMount() {

  }

  componentDidMount() {
  }

  handleKey(e) {
      if (this.state.stop === true) return;

      if (e.keyCode === 13 && this.state.view === 1) {
          this.setState({ view : 2});
      } else if (this.state.view === 2) {
          this.refs.answer.keyin(e.keyCode, this.onsuccess.bind(this), this.onfail.bind(this));
      } else if (e.shiftKey  ) {
          this.stop();
      }
  }

  onsuccess() {
      this.stop();
      window.setTimeout( this.setState({ view : 1, success: true }), 3000 );
  }

  onfail() {
      //var time = this.state.time - 300000;
      this.refs.answer.clear();
      this.setState({ view: 1 });
      //this.setState({ view: 1, time: time});
  }

  componentWillUpdate (nextProps, nextState) {
      if (nextProps.time === this.state.time && !this.state.stop)  this.setState({stop: true});
  }

  start() {
      this.timer = window.setInterval(this._refreshTimer.bind(this), 100);
      document.addEventListener('keypress', this.handleKey.bind(this));
  }

  stop() {
      this.timer = window.clearInterval(this.timer);
      this.setState({stop : true});
  }

  _refreshTimer() {
      let prevTime = this.state.currentTime,
          currTime = Date.now(),
          diff = currTime - prevTime,
          time = (this.state.time > diff) ? this.state.time - diff : 0;
      this.setState({
          currentTime : currTime,
          time : time
      });
  }

  render() {
    var mainClass = this.state.stop ? 'main stop' : 'main',
        displayerClass = this.state.view === 1 ? 'displayer clock' : 'displayer answer';

    return (
      <div className={mainClass}>
        <div className={displayerClass}>
          <ClockBase  ref="clock"  time={this.state.time} {...this.state} />
          <AnswerBase ref="answer" {...this.state} />
        </div>
      </div>
    );
  }
}

Main.propTypes = {
    config : React.PropTypes.object
};
Main.defaultProps = {
    config : {}
};
Main.mixins = [];
Main.childContextTypes = {
    time      : React.PropTypes.number,
    config    : React.PropTypes.object
};

module.exports = Main;
