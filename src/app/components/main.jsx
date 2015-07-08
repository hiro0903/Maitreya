import React from 'react';
var ClockBase = require('./clock-base.jsx');

//main entry
class Main extends React.Component { 

  constructor(props){
      super(props);
      this.state = {
          time : props.config.timer,
          currentTime : Date.now()
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
      this.timer = window.setInterval(this._refreshTimer.bind(this), 100);
  }

  _toggleTimer() {

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
    return (
      <main className="main">
        <div className="displayer">
          <ClockBase time={this.state.time} />
        </div>
      </main>
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
