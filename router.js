const router = require("express").Router();
const controller = require("./controller");
const path = require("path");

const fs = require("fs");
router.post("/api", controller);
router.get("/download/:fileName", (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(__dirname, "public", fileName);
  fs.stat(filePath, (err, stats) => {
    if (err) {
      // Handle error (e.g., file doesn't exist or inaccessible)
      console.error(err);
    } else {
      if (stats.isFile()) {
        res.download(filePath, fileName, (err) => {
          if (err) {
            res.status(500).send("Error downloading file");
          }
        });
        console.log("File exists and is ready for download");
      } else {
        // File is not ready or not a regular file
        console.log("File is not ready or not a regular file");
      }
    }
  });
  //   if (fs.existsSync(filePath)) {
  //     res.download(filePath, fileName, (err) => {
  //       if (err) {
  //         res.status(500).send("Error downloading file");
  //       }
  //     });
  //   } else {
  //     res.status(404).send("File not found");
  //   }
});

module.exports = router;
