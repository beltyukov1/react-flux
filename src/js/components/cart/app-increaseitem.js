var React = require('react');
var AppActions = require('../../actions/app-actions');

var IncreseItem = React.createClass({
  handler: function(){
    AppActions.increseItem(this.props.index);
  },
  render: function(){
    return <button onClick={this.handler}>+</button>;
  }
});

module.exports = IncreseItem;
