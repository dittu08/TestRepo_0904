const express = require('express')
const app = express()

// API test1
app.get('/', function (req, res) {
    res.send('Hello World')
})

// API test2
app.get('/test/1', function (req, res) {
    res.send('Test 1')
})

// API test3
app.get('/hello', function (req, res) {
    res.json({
        say: 'hello'
    })
})

app.listen(1234)