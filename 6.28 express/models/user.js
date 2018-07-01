var db = require('./db')

class User {
  constructor(username, password, email) {
    this.username = username
    this.password = password
    this.email = email
  }
  // 保存到数据库
  save() {
    return new Promise((resolve, reject) => {
      db.mysqlQuery('INSERT INTO `user`(`username`, `password`, `email`) VALUES(?,?,?);', [this.username, this.password,this.email])
      .then(rows => {
        resolve(rows)
      })
      .catch(err => {
        reject(err)
      })
    })
  }
  // 根据用户名查找
  static getByUsername(username) {
    return new Promise((resolve, reject) => {
      db.mysqlQuery('SELECT * FROM `user` WHERE `username`=?', [username]) 
        .then(rows => {
          resolve(rows[0])
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

module.exports = {
  User: User
}
