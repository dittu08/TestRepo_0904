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
    db.forEach((value, key) => {
        ys[key] = value
    })
    res.json(ys)
})
app.get('/ys/:id', function (req, res) {
    let {id} = req.params
    id = parseInt(id)
    const y = db.get(id)
    if (y == undefined) {
        res.json({
            message: "error"
        })
    } else {
        res.json(y)
    }
})

// 미들웨어: json 설정
app.use(express.json())

app.post('/ys', (req, res) => {
    console.log(req.body)

    // 등록: Map(db)에 저장(set)
    db.set(id++, req.body)

    res.json({
        message : `${db.get(id-1).title}, registration completed`
    })
})

// 삭제
app.delete('/ys/:id', (req, res) => {
    let {id} = req.params
    id = parseInt(id)
    var y = db.get(id)
    if (y == undefined) {
        res.json({
            message : `there is no id ${id}`
        })
    } else {
        const title = y.title
        db.delete(id)

        res.json({
            message : `${title}, deletion completed`
        })
    }
})

app.delete('/ys', (req, res) => {
    var msg = ""
    if (db.size >= 1) {
        db.clear()
        msg = "full deletion completed"
    } else {
        msg = "noting"
    }
    res.json({
        message : msg
    })
})

app.put('/ys/:id', (req, res) => {
    let {id} = req.params
    id = parseInt(id)
    var y = db.get(id)
    var prevTitle = y.title
    if (y == undefined) {
        res.json({
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