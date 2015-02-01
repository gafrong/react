var React = require('react');

var Seat = React.createClass({
  render: function() {
    return <div>xx</div>
  }
})

var MySlider = React.createClass({

  render: function() {
    return (
      <div>
        <input type ="range" 
          onChange={this.updateVal} 
          value={this.state.val}
          max={this.state.max} />
        <input type ="text" 
          onChange={this.updateVal}
          value={this.state.val} />
      </div>
    )
  },

  getInitialState: function() {
    return { 
      val: this.props.val || 0,
      max: 5
     };
  },

  updateVal: function() {
    this.setState({ val: event.target.value });
  }
});

var AppComp = React.createClass({
  render: function() {
    return (
      <div className='box'>
        <MySlider />
        <MySlider val="12"/>
      </div>
      )
  }
})

// React.render(<MySlider />, document.getElementById('app'));
React.render(<AppComp />, document.getElementById('app'));