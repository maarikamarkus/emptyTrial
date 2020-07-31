const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const app = express()
const port = 3000

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'maarika',
    password: 'password',
    database: 'test'
})

app.use(cors())
app.use(express.json())

app.get('/todo', (req, res, next) => {
    pool.query('SELECT * from todo', function (err, rows, fields) {
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

// add item to todo list
app.post('/todo', (req, res, next) => {
    pool.query('insert into todo set ?', req.body, function (error, results, fields) {
        if (error) {
            next(error)
        }
        res.send("" + results.insertId)
    });
})

// delete item from todo list
app.delete('/todo/:id', (req, res, next) => {
    pool.query('delete from todo where id = ?', req.params.id, function(error, results, fields) {
        if (error) {
            next(error)
        }
        res.send("wat")
    })
})

// update state of item in todo list
app.put('/todo/:id', (req, res, next) => {
    pool.query('update todo set state = not state where id = ?', req.params.id, function(error, results, fields) {
        if (error) {
            next(error)
        }
        res.send("aim scared")
    })
})

app.get('/todo/tere', (req, res) => {
    res.send("tere tere vanakere, oled jõudnud saladuste laekani")
})

app.listen(port, () => console.log(`ToDo app listening at http://localhost:${port}`))
