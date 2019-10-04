const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

const routes = require('./routes')

const POR_LISTENING = 3333
const DB_USER = 'omnistack'
const DB_PASSWD = 'omnistack'

const app = express()

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWD}@omnistack-d2btd.mongodb.net/semana09?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json())
app.use(cors)
app.use('/files', express.static(path.resolve(__dirname, '..', 'upload')))
app.use(routes)

app.listen(POR_LISTENING)