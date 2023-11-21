const sharp = require("sharp");
const imageResize = async (req, name) => {
  try {
    const imageUrl = req.body.params.form?.values?.resize.files.url;
    if (!req.body.params.form?.values?.customsize) {
      const resizes = Number(req.body.params.form?.values?.resizes.value);
      const resizeWidth = resizes.split("x")[0];
      const resizeHeight = resizes.split("x")[1];

      const response = await fetch(imageUrl);

      const buffer = await response.arrayBuffer();

      const resizedImage = sharp(buffer);

      await resizedImage
        .withMetadata()
        .resize({ width: resizeWidth, height: resizeHeight })
        .toFile(`./public/${name}`);
    } else {
        
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = imageResize;
