const router = require("express").Router();
const controller = require("./controller");
const path = require("path");

const fs = require("fs");
router.post("/api", controller);
router.get("/download/:fileName", (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(__dirname, "public", fileName);

  let sentHtml = false;

  // Send the HTML file immediately
  const htmlPath = path.join(__dirname, "staticAssets", "index.html");
  fs.readFile(htmlPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error reading HTML file");
    } else {
      if (!sentHtml) {
        sentHtml = true;
        res.status(200).send(data);
      }
    }
  });

  // Check file readiness and trigger download after sending the HTML
  fs.stat(filePath, (err, stats) => {
    if (err) {
      console.error(err);
      return;
    }

    if (!sentHtml && stats.isFile()) {
      sentHtml = true;
      res.download(filePath, fileName, (err) => {
        if (err) {
          console.error(err);
          res.status(500).send("Error downloading file");
        }
      });
    }
  });
//   fs.stat(filePath, (err, stats) => {
//     if (err) {
//       console.error(err);
//     } else {
//       if (stats.isFile()) {
//         res.download(filePath, fileName, (err) => {
//           if (err) {
//             res.status(500).send("Error downloading file");
//           }
//         });
//       } else {
//         console.log("File is not ready or not a regular file");
//       }
//     }
//   });
    
});

module.exports = router;
