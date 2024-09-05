const express = require('express')
const app = express()

app.listen(1234)

app.get('/test/:n', function (req, res) {
    res.json({
        num : parseInt(req.params.n)
    })
})

// app.get('/:name', function (req, res) {
//     const p = req.params
//     res.json({
//         name : p.name
//     })
// })

// youtube link: https://www.youtube.com/@000
// youtube link: https://www.youtube.com/watch?v=000&t=0s

app.get('/watch', function (req, res) {
    const q = req.query
    // console.log(q)
    // console.log(q.v)
    // console.log(q.t)
    const {v, t} = req.query
    res.json({
        video : v,
        timeline : t
    })
})