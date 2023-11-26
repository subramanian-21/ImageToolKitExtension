const express = require("express");
const app = express();
app.use(express.json());

app.use(express.static("./public"));
app.use(express.static("./staticAssets"));

app.use("/", require("./router"));
app.use((req, res) => {
  if (req.path === "/") {
    res.send('<h1 style="text-align:center">ImageToolKit</h1>');
  } else {
     res.sendFile(__dirname + "/staticAssets/index.html");
  }
});



app.listen(5001, () => {
  console.log("Server@5001");
});


/*

if (req.body.params.selections) {
    console.log(req.body.params.selections)
    switch (req.body.params.selections[0].title) {
      case "ImageOperations": {
        const response = optionsResponse;
        return res.status(200).json({
          output: response,
        });
        break
      }
        
      case "Fun": {
        const response = helpResponse;
        return res.status(200).json({
          output: response,
        });
        break
      }
      case "Help": {
        const response = funResponse;
        return res.status(200).json({
          output: response,
        });
        break
      }
    }
  }
*/