/** @jsx React.DOM */

var CardQuoteContent = React.createClass({
    displayName: 'CardQuoteContent',
    render: function () {
        return (
            <tspan x="{80 - this.props.line * 20}" y="50">{this.props.text}</tspan>
        );
    }
});


/*
data = [
    { match_id: 1,
      card1: { title: '論語', contents: ['學而時習之','不亦悅乎'] },  
      card2: {},
      description, subtitle, state
    },

]
*/

var Card = React.createClass({
  render: function() {
    var quoteContents = this.props.contents.map(function(val, i) {
        return (
            <CardQuoteContent line={i} text={val} />
        );
    });

    return (
        <div class="card">
          <svg class="face front" x="0" y="0" width="100" height="160" viewBox="0 0 100 160">
            <rect class="border" x="0" y="0" width="100" height="160" rx="5" ry="5"></rect>
            <rect class="bar" x="0" y="20" width="160" height="25" />
            <text class="title" x="5" y="38">{this.props.title}</text>
            <text class="quote" x="80" y="50" writing-mode="tb-rl">
                {quoteContents}
            </text>
          </svg>
          <svg class="face back" x="0" y="0" width="100" height="160" viewBox="0 0 100 160">
            <rect class="border" x="5" y="5" width="90" height="150" rx="5" ry="5" />
          </svg>
        </div>
    );
  }
});