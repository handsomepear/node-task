const path = require('path')

module.exports = {
  port: 3000, 
  host: '127.0.0.1',
  staticPaths: [path.join(__dirname, 'static')],
  secret:'dongNaoZps' // 密码加密的私钥
}