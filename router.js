const router = require("express").Router();
const controller = require("./controller");
const path = require("path");

const fs = require("fs");
router.post("/api", controller);
router.get("/download/:fileName", (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(__dirname, "public", fileName);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.sendFile(__dirname + "/staticAssets/index.html");
    }
    res.set({
      'Content-Type': 'image/png',
      'Content-Disposition': `attachment; filename="${fileName}"`
    });
    
  });
  // fs.stat(filePath, (err, stats) => {
  //   if (err) {
  //     console.error(err);
  //   } else {
  //     if (stats.isFile()) {
  //       setTimeout(() => {
  //         res.download(filePath, fileName, (err) => {
  //           if (err) {
  //             res.status(500).send("Error downloading file");
  //           }
  //         });
  //       }, 0);
  //     } else {
  //       console.log("Error...")
  //     }
  //   }
  // });
});

module.exports = router;
