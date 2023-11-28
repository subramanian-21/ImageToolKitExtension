const router = require("express").Router();
const controller = require("./controller");
const path = require("path");
const fs = require("fs");
router.post("/api", controller);
router.get("/download/:fileName", (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(__dirname, "public", fileName);
  try {
    if (fs.existsSync(filePath)) {
      setTimeout(()=>{
        fs.stat(filePath, (err, stats) => {
          if (err) {
            console.error(err);
          } else {
            if (stats.isFile()) {
              res.download(filePath, fileName, (err) => {
                if (err) {console.log(err)         }
              });
            } else {
              console.log("Error...");
            }
          }
        });


      },2000) 
    }else{
      res.sendFile(__dirname + "/staticAssets/index.html");
    }
  } catch (error) {
    console.log(err)
  }
   
});

module.exports = router;
