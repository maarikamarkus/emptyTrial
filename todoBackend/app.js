const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

let todo = []

app.use(cors())
app.use(express.json())

app.get('/todo', (req, res) => res.send(todo))
/*app.post('/todo', {
    title: 'backendItem',
    state: false
}).then(function(response){
    console.log(response);
})*/
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