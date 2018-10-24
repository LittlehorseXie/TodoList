let ReactDOM = require('react-dom')
let React = require('react')
const rootEl = document.getElementById('APP')
const { default: Index } = require(`./pages/index`)

ReactDOM.render(React.createElement(Index), rootEl)