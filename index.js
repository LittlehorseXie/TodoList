console.log(process.env)

// require('app/utils/global.js')
require('babel-register')

console.log('test')

nw.Window.open('app/assets/index.html', {}, () => {

})
