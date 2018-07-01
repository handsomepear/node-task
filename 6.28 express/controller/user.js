const { User } = require('../models/user')
const { md5 } = require('utility')
const config = require('../config')

//  注册 添加到用户表
function register(req, res) {
  let username = req.body.username
  let password = md5(`${req.body.password}${config.secret}`) 
  let email = req.body.email
  // 判断用户是否已存在
  // 如果已存在 返回1001
  // 如果不存在 返回1000
  let user = new User(username, password, email) 
  User.getByUsername(username)
    .then(u => {
      if(u) {
        return res.json({
          code: 1001,
          msg: 'username already exists'
        })
      }
      return user.save()
    })
    .then(rows => {
      // 注册失败
      if(rows.affectedRows === 0) {
        return res.json({
          code: 1002,
          msg: 'user register failed'
        })
      }
      user.id = rows.insertId // 保存用户id
      console.log(rows)
      res.json({
        code: 1000,
        user: {id: user.id},
        msg: 'user register success'
      })
    })
    .catch(err => {
      res.json({
        code: 1003,
        msg: err.message
      })
    })
}

module.exports = {
  register
}