import React from 'react';
import ClockText from './clock-text.jsx';

export default class ClockBase extends React.Component {
    constructor(props) {
        super(props);

        this.state = this._getTimeObject(props.time);
    }

    _getTimeObject(time): object {
        let hr, min, sec, mm;

        mm = time % 1000;
        time = (time - mm) / 1000;

        sec = time % 60;
        time = (time - sec) / 60;

        min = time % 60;
        time = (time - min) / 60;
        
        hr = time % 24;

        return {
            hr : hr,
            min: min,
            sec: sec,
            mm : mm
        };
    }

    _pad(number, n): string {
        return (new Array( n + 1 ).join('0')  + number ).slice((n || 2) * -1);
    }

    componentWillReceiveProps (nextProps) {
        this.setState(this._getTimeObject(nextProps.time));
    }

    render() {
        var stop = this.props.stop;
      return (
        <div className="clock-base">

          <div className="time hr"> {this._pad(this.state.hr,  2)}</div>
          <div className="time spacer1">:</div>
          <div className="time min">{this._pad(this.state.min, 2)}</div>
          <div className="time spacer2">:</div>
          <div className="time sec">{this._pad(this.state.sec, 2)}</div>
          <div className="time mm"> {this._pad(this.state.mm,  3)}</div>

          <ClockText success={this.props.success} stop={stop} {...this.state} />

        </div>
      );
    }


}

