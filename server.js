const express = require('express')
const app = express()
app.use(express.json())

app.use(express.static("./public"))

app.use("/",require('./router'))

app.listen(5000,()=>{
    console.log("Server@5000")
})