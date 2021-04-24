
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

const router = express.Router()

const corsConfig = {
  origin: 'http://localhost:3000',
  credentials: true
}
app.use(cors(corsConfig))
app.options('*', cors(corsConfig))

router.post('/more/server2', function(req, res) {
  res.json(req.cookies)
})

app.use(router)

const port = 8088
module.exports = app.listen(port)
