const express = require("express");
const app = express()
var indexRouter = require('./router');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/hello', indexRouter);

 const server = app.listen(8089, function () {
    const host = server.address().address
    const port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 })



