require('babel-register')
require('./app/utils/index.js')

nw.Window.open('app/assets/index.html', {}, () => {

})
