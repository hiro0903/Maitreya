import React from 'react';


var texts = [
  '誰都別想阻止這顆炸彈!!',
  '滴答--滴答--滴答--',
  '不對不對, 輸入錯密碼就要接受懲罰',
  '時間越來越少了!!',
  '你真的以為你解得開嗎?',
  '誰都別想逃出去',
  '炸吧! 炸吧! 哈哈哈哈'
];

var hint = {
  PRESS_KEY   : '-- 按下ENTER鍵輸入密碼 --',
  TIME_ADD    : '時間增加 ',
  TIME_REDUCE : '時間減少 '
}

export default class ClockBase extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            threat   : texts[0],
            hint     : hint.PRESS_KEY,
            showHint : false
        }

    }

    showHint(increase, quantity) {
        var txt = (increase ? hint.TIME_ADD : hint.TIME_REDUCE) + quantity + ' 秒';

        this.setState({
            hint     : txt,
            showHint : true
        });

    }

    componentWillReceiveProps(nextProps) {
        
    }
    componentWillUpdate(nextProps, nextState) {
        if (nextProps.sec % 5 === 0 && this.props.sec % 5 )  this.setState({
          showHint : !this.state.showHint,
          threat   : texts[(~~(Math.random() * texts.length))]
        });  
    }

    componentDidUpdate(prevProps, prevState) {
        if (!this.state.showHint && this.state.hint !== hint.PRESS_KEY) this.setState({hint: hint.PRESS_KEY});  
    }

    render() {
      var classTheat = (this.state.showHint  || this.props.stop) ? 'threat hide' : 'threat',
          classHint  = (!this.state.showHint || this.props.stop) ? 'hint hide'   : 'hint',
          txt = this.state.threat;

      if (this.props.success) {
          classTheat = 'threat';
          txt = '怎麼可能!? 竟然被你們破解了!!!';
      }

      return (
        <div className="clock-text">
          <div className={classTheat}>{txt}</div>
          <div className={classHint} >{this.state.hint}  </div>
        </div>
      );
    }


}

