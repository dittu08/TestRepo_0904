const express = require('express')
const app = express()

// GET + "/"
app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(1234)

let AAA = {
    title : "AAA",
    price : 16000,
    description : "blah blah"
}

app.get('/test/1', function (req, res) {
    res.json(AAA)
})