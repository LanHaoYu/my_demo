var aa = process.env.VUE_APP_ENV
var config = require('./env.'+aa)
// console.log(config.title)
module.exports = config
