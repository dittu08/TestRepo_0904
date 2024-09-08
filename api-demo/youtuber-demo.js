// express module setting
const express = require('express')
const app = express()

app.listen(1234)

// data setting
let y1 = {
    title : "000",
    sub : "0명",
    vNum : "0개"

}

let y2 = {
    title : "111",
    sub : "1명",
    vNum : "1개"

}

let y3 = {
    title : "222",
    sub : "2명",
    vNum : "2개"

}

let db = new Map()
var id = 1
db.set(id++, y1)
db.set(id++, y2)
db.set(id++, y3)

// REST API 설계
app.get('/ys', (req, res) => {
    var ys = {}
    if (db.size !== 0) {
        db.forEach((value, key) => {
            ys[key] = value
        })
        res.json(ys)
    } else {
        res.status(404).json({
            message : "no y"
        })
    }
})

app.get('/ys/:id', function (req, res) {
    let {id} = req.params
    id = parseInt(id)
    const y = db.get(id)
    if (y == undefined) {
        res.status(404).json({
            message: "error"
        })
    } else {
        res.json(y)
    }
})

// 미들웨어: json 설정
app.use(express.json())

app.post('/ys', (req, res) => {
    const title = req.body.title
    if (title) {
        db.set(id++, req.body)
        res.status(201).json({
            message : `${db.get(id-1).title}, registration completed`
        })
    } else {
        res.status(400).json({
            message : "error"
        })
    }
})

// 삭제
app.delete('/ys/:id', (req, res) => {
    let {id} = req.params
    id = parseInt(id)
    var y = db.get(id)
    if (y) {
        const title = y.title
        db.delete(id)
        res.json({
            message : `${title}, deletion completed`
        })
    } else {
        res.status(404).json({
            message : `there is no id ${id}`
        })
    }
})

app.delete('/ys', (req, res) => {
    if (db.size >= 1) {
        db.clear()
        res.json({
            message : "full deletion completed"
        })
    } else {
        res.status(404).json({
            message : "noting"
        })
    }
})

app.put('/ys/:id', (req, res) => {
    let {id} = req.params
    id = parseInt(id)
    var y = db.get(id)
    var prevTitle = y.title
    if (y == undefined) {
        res.status(404).json({
            message : `there is no id ${id}`
        })
    } else {
        var newTitle = req.body.title
        y.title = newTitle
        db.set(id, y)
        res.json({
            message : `${prevTitle}, ${newTitle}, modification completed`
        })
    }
})