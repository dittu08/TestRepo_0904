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
    res.json({
        message : 'test'
    })
})
app.get('/y/:id', function (req, res) {
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

app.post('/y', (req, res) => {
    console.log(req.body)

    // 등록: Map(db)에 저장(set)
    db.set(id++, req.body)

    res.json({
        message : `${db.get(id-1).title}, blah blah`
    })
})