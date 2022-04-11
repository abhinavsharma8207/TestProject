const express = require("express");
const app = express()

app.use(express.json());

app.get('/', function (req, res) {
    res.send('Hello World');
 })

 const server = app.listen(8089, function () {
    const host = server.address().address
    const port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 })



