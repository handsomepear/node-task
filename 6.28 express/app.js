const express = require('express')
const bodyParser = require('body-parser')
const userController = require('./controller/user')
const app = express()
const Router = express.Router()

Router.get('/', (req, res) => {
  res.send('hello world')
})
.post('/register', userController.register)

app.use(bodyParser.urlencoded({ extended: false}))
app.use(Router)
app.listen(3000, () => {
  console.log('服务启动成功')
})
