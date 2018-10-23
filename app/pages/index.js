// import { h as preactRender, Component } from 'preact'
import React, { Component } from 'react'
// import './index.css'

class HelloWorld extends Component {
  render() {
    let {a, b, ...z} = {a: 1, b: 2, c: 3, d:4}
    console.log(z)
    return (
      <div className="row">
        <p>111</p>
      </div>
    );
  }
}

export default HelloWorld