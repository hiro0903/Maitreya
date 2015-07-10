import React from 'react';

var theAnswer = 'Maitreya';
export default class AnswerBase extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
          answer : '',
          left   : theAnswer
        }
    }

    componentWillReceiveProps (nextProps) {

    }

    clear() {
        this.setState({
          answer : '',
          left   : theAnswer
        });
    }

    keyin(code, succ, fail) {
        var ans = this.state.answer,
            left= this.state.left,
            firstLetter = left.substr(0, 1).toUpperCase(),
            len = left.length,
            txt;
        
        if (code === 13) return fail.call();
        
        txt = String.fromCharCode(code).toUpperCase();

        if (firstLetter === txt) {
           this.setState({
              answer : ans + firstLetter,
              left   : left.substr(1)
           });

           if (len === 1) return succ.call();
        } else {
          return fail.call();
        }
    }

    render() {

      var pending = this.state.left.split('').map(()=>'_').join('');
      
      return (
        <div className="answer-base">
          <span className="correct">{this.state.answer}</span>
          <span className="pending">{pending}</span>

        </div>
      );
    }


}

