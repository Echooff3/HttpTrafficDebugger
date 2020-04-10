const express = require('express')
const bodyParser = require('body-parser')
const xmlparser = require('express-xml-bodyparser')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.raw())
app.use(bodyParser.text())
app.use(bodyParser.urlencoded())
app.use(xmlparser())

app.all('*', (req, res) => {
    console.log(req.body)
    res.send('Ok Bye!')
})

app.listen(port, () => console.log(`Send Garbage to http://localhost:${port}`))