const axios = require("axios");
const path = require("path");
const fs = require("fs");
const jimp = require("jimp");
const converter = async (req, name) => {
    try{
    const imageUrl = req.body.params.form?.values?.converter.files.url;

    const imageName = req.body.params.form?.values?.converter.files.name;
    const imageFormat = imageName
    .split(".")
    [imageName.split(".").length - 1].toLowerCase();
    const imageLoc = path.join(__dirname, `image.${imageFormat}`);
    
    await axios.get(imageUrl, { responseType: "stream" }).then((response) => {
      const imStream = fs.createWriteStream(imageLoc);
      response.data.pipe(imStream);
      imStream.on("finish", async () => {
        const image = await jimp.read(imageLoc);
        await image
          .quality(50)
          .writeAsync(`./public/${name}`)
      });
    });
  } catch (error) {
      console.log(error)
  }
};
module.exports = converter;



/*
const resizedImage = sharp(buffer);
    if (format === "jpg" || format === "jpeg") {
      resizedImage.jpeg({ quality: size });
    } else if (format === "png") {
      resizedImage.png({ quality:10-(size / 10)});
    } else if (format === "webp") {
      resizedImage.webp({ quality: size });
    } else if (format === "gif") {
      resizedImage.gif({ quality: size });
    } else {
      console.log("format error");
    }
    await resizedImage.toFile(`./public/${uniqueName}`);
*/