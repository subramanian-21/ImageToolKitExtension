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
      console.error(err);
      return res.status(500).send("Error reading file");
    }

    res.set({
      'Content-Type': 'image/png',
      'Content-Disposition': `attachment; filename="${fileName}"`
    });
    res.send(data);
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
