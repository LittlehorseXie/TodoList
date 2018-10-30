import React, { Component } from 'react'

class HelloWorld extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  @CSS ({
    'div': {
      background: '#DDD'
    }
  })
  render() {
    return (
      <div>我是 LOGIN</div>
    );
  }
}

export default HelloWorld