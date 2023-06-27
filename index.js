const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')
const route = require('./routers')
const app = express()

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use(express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use(express.static(path.join(__dirname, 'node_modules/bootstrap-icons/font')))
app.use(route)

app.listen(3000, () => {
  console.log('Server is up on http://localhost:3000')
})
