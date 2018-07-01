var mysql = require('mysql')
// 连接mysql数据库
const pool = mysql.createPool({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '584520',
  database: 'dongNao'
})

// mysql 查询方法
function mysqlQuery(sql, params = []) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if(err) {
        throw err 
      }
      connection.query(sql, params, (err, rows) => {
        connection.release() // 释放当前连接
        if(err) {
          throw err 
        }
        resolve(rows)
      })
    })
  })
}

module.exports = {
  mysqlQuery
}