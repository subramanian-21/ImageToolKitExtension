const express = require('express')
const app = express()
app.use(express.json())

app.use(express.static("./public"))
app.use(express.static('./staticAssets'))

app.use("/",require('./router'))
app.use((req, res, next) => {
    if (req.path!=='/') {
        res.sendFile(__dirname + '/staticAssets/index.html');
    } else {
        res.write('<h1 style="text-align-center">ImageToolKit</h1>')
    }
  });

app.listen(5000,()=>{
    console.log("Server@5000")
})