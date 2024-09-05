const express = require('express')
const app = express()

app.get('/:id', function (req, res) {
    let {id} = req.params
    id = parseInt(id)
    
    if (db.get(id) == undefined) {
        res.json({
            message : "no value"
        })
    } else {
        value = db.get(id)
        // value.id = id
        value["id"] = id
        res.json(value)
    }
})

app.get('/:id', function (req, res) {
    let {id} = req.params
    id = parseInt(id)
    res.json(db.get(id))
})

app.listen(1234)

let db = new Map()

let a = {
    name : "a",
    num : 1
}
let b = {
    name : "b",
    num : 2
}
let c = {
    name : "c",
    num : 3
}
let d = {
    name : "d",
    num : 4
}

db.set(1, a)
db.set(2, b)
db.set(3, c)
db.set(4, d)

console.log(db)
console.log(db.get(1))
console.log(db.get(2))
console.log(db.get(3))
console.log(db.get(4))