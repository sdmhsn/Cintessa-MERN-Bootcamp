import React, { Component } from 'react';

export default class Text extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  componentDidMount = () => {
    console.log('component did mount');
  };

  componentDidUpdate = () => {
    console.log('component did update');
  };

  render() {
    return (
      <>
        <button onClick={this.incrementCounter}>Click Me!</button>
        <p>counter p: {this.state.counter}</p>
      </>
    );
  }
}
