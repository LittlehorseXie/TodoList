import './assets/antd.min.css'
import './assets/index.css'
import './utils/index.js'

let ReactDOM = require('react-dom')
let React = require('react')
const rootEl = document.getElementById('app')
const { default: Index } = require(`./pages/index`)

ReactDOM.render(React.createElement(Index), rootEl)