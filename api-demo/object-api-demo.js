const express = require('express')
const app = express()

app.listen(1234)

// youtube link: https://www.youtube.com/@000
// youtube link: https://www.youtube.com/watch?v=000&t=0s

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

app.get('/:name', function (req, res) {
    const {name} = req.params
    if (name == "@000") {
        res.json(y1)
    } else if (name ==  "@111") {
        res.json(y2)
    } else if (name == "@222") {
        res.json(y3)
    } else {
        res.json({
            message : "error"
        })
    }
})