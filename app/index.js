let ReactDOM = require('react-dom')
let React = require('react')
const rootEl = document.getElementById('app')
const { default: Index } = require(`./pages/index`)
import './assets/antd.min.css'
import './assets/index.css'

ReactDOM.render(React.createElement(Index), rootEl)