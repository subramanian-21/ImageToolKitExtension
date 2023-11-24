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
     res.sendFile(__dirname + "/statciAssets/index.html");
  }
});

app.listen(5001, () => {
  console.log("Server@5001");
});
