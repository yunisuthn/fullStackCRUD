const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors())
const router = require('./Route/route')



const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.listen(8080, function () {
  console.log('server demarer')
})
app.use('/', router)
