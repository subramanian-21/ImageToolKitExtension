const express = require('express')
const app = express()
app.use(express.json())

app.use(express.static("./public"))
app.use(express.static('./staticAssets'))

app.use("/",require('./router'))
app.use((req, res, next) => {
    if (req.path) {
        res.sendFile(__dirname + '/staticAssets/index.html');
      } else {
        next();
      }
  });

app.listen(5000,()=>{
    console.log("Server@5000")
})