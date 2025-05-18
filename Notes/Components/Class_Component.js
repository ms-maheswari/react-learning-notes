import React, { Component } from 'react';

class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h2>Class Component</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increaseCount}>Increase</button>
      </div>
    );
  }
}

export default ClassComponent;
