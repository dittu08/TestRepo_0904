const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(1234)

const students = [
    { id : 1, name: 'a' },
    { id : 2, name: 'b' },
    { id : 3, name: 'c' },
    { id : 4, name: 'd' }
]

// 전체 조회
app.get('/students', (req, res) => {
    res.json(students) // json array
})

// 개별 조회
app.get('/students/:id', (req, res) => {
    let id = req.params.id
    // let student = students[id]
    var findStudent =
        students.find(s => s.id == id)
    if (findStudent) {
        res.json(findStudent)
    } else {
        res.status(200).json({
            message : "no student"
        })
    }
    res.json(findStudent) // json array
})