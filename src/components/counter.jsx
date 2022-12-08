import React, { Component } from 'react'

class Counter extends Component{
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  increment() {
    // this.setState((x) => ({count : x.count + 1}))
    this.setState({count: this.state.count + 1})
  }
  // incrementFive() {
  //   this.increment()
  //   this.increment()
  //   this.increment()
  //   this.increment()
  //   this.increment()
  // }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    )
  }
}

export default Counter

