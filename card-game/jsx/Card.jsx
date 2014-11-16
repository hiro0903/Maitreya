/** @jsx React.DOM */
var CardQuoteContent = React.createClass({
    displayName: 'CardQuoteContent',
    render: function () {
        var posX = 80 - this.props.line*20;
        return (
            <tspan x={posX} y="50">{this.props.text}</tspan>
        );
    }
});

var Card = React.createClass({
  displayName: 'Card',
  render: function() {
    var quoteContents = this.props.contents.map(function(val, i) {
        return (
            <CardQuoteContent line={i} text={val} />
        );
    });

    return (
        <div className="card">
          <svg className="face front" x="0" y="0" width="100" height="160" viewBox="0 0 100 160">
            <rect className="border" x="0" y="0" width="100" height="160" rx="5" ry="5"></rect>
            <rect className="bar" x="0" y="20" width="160" height="25" />
            <text className="title" x="5" y="38">{this.props.title}</text>
            <text className="quote" x="80" y="50">
                {quoteContents}
            </text>
          </svg>
          <svg className="face back" x="0" y="0" width="100" height="160" viewBox="0 0 100 160">
            <rect className="border" x="5" y="5" width="90" height="150" rx="5" ry="5" />
          </svg>
        </div>
    );
  }
});