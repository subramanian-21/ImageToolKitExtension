const sharp = require("sharp");
const compresser = async (req, uniqueName, format) => {
    const imageUrl = req.body.params.form?.values?.compresser.files.url;
    const size = req.body.params.form?.values?.size;


    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image. Status: ${response.status}`);
    }

    const buffer = await response.arrayBuffer();

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
    await resizedImage.withMetadata().toFile(`./public/${uniqueName}`);

    console.log("Image saving complete");
 
};
module.exports = compresser;
