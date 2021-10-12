const express = require('express')
const app = express()
const port = 3005

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.post('/', (req, res) => {
    res.send('Hello POST PUC Minas')
})
app.put('/', (req, res) => {
    res.send('Hello PUT PUC Minas')
})
app.delete('/', (req, res) => {
    res.send('Hello DELETE PUC Minas')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})