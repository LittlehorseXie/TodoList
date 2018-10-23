console.log(process.env)

// require('app/utils/global.js')
require('babel-register')

nw.Window.open('app/assets/index.html', {}, () => {

})
