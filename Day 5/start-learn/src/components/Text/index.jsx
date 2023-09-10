import React, { Component } from 'react';

export default class Text extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Click Me!
        </button>
        <p>counter p: {this.state.counter}</p>
      </>
    );
  }
}
