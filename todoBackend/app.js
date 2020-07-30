const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const app = express()
const port = 3000

let todo = []

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'maarika',
  password: 'password',
  database: 'test'
})

connection.connect()

app.use(cors())
app.use(express.json())

app.get('/todo', (req, res, next) => {
    connection.query('SELECT * from todo', function (err, rows, fields) {
        if (err) {
            next(err)
        } 
      
        let todo = [];
        for (let row of rows) {
            let state = row.state === 1
            todo.push({id: row.id, title: row.title, state: state})
        }
        res.send(todo)
    })
})

app.post('/todo', (req, res) => {
    console.log(req.body)
    todo.push(req.body)
    res.send("tööötaskiii")
})

app.delete('/todo', (req, res) => {
    let title = req.body.title
    let itemIndex = todo.findIndex(x => x.title === title)
    todo.splice(itemIndex, 1)
    res.send("wat")
})

app.put('/todo', (req, res) => {
    let item = todo.find(x => x.title === req.body.title)
    item.state = req.body.state;
    res.send("aim scared")
})

app.listen(port, () => console.log(`ToDo app listening at http://localhost:${port}`))
