const router = require("express").Router();
const controller = require("./controller");
const path = require("path");

const fs = require("fs");
router.post("/api", controller);

router.get("/download/:fileName", (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(__dirname, "public", fileName);
  const fileStream = fs.createReadStream(filePath);
  fileStream.on('open', () => {
    res.set('Content-Disposition', `attachment; filename="${fileName}"`);
    fileStream.pipe(res);
  });
  fileStream.on('error', (err) => {
    console.error(err);
    
  });
});

module.exports = router;