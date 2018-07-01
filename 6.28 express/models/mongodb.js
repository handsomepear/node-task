
const mongoose = require('mongoose')
const db = mongoose.createConnection('mongodb://127.0.0.1:27017/dongNao') // 连接mongodb数据库下的某个数据库
// 创建模型
const userSchema = new mongoose.Schema({
 username: String, 
 password: String,
 email: String
})
// 创建数据表（相当于表）
const userModel = db.model('users', userSchema)

// 存 
const user = new userModel({
  username: 'zps',
  password: '455113',
  email: '287879667@qq.com'
})
// save:去重增加  create:不会检查重复
// user.save().then((doc, len, err) => {
//   if(err) {
//     throw err
//   }
//   console.log('数据插入成功')
//   db.close()
// })


// 查
// userModel.findOne({username: 'zps'},(err, data) => {
//   if(err) {
//     throw err 
//   }
//   console.log(data)
//   db.close()
// })

userModel.findOne({username:'zps'}).then(doc => {
  console.log(doc) // {n : 0, ok: 1} n 代表删除了几项
  db.close()
})


userModel.remove({email: '287879667@qq.com'}, (err, doc) => {
  if(err) {
    throw err 
  }
  console.log(doc)
  db.close()
})


// 改 update 只修改一个数据 updateMany 批量修改

userModel.update({username: 'zps'}, {
  $set: {
    'username': 'ZPS!!!!!'
  }
}).then(doc => {
  console.log(doc) // { n: 1, nModified: 1, ok: 1 }
})

