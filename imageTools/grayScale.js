const sharp = require("sharp");
const grayScale = async (req, name) => {
  try {
    const imageUrl = req.body.params.form?.values?.grayscale.files.url;

    const response = await fetch(imageUrl);

    const buffer = await response.arrayBuffer();

    const resizedImage = sharp(buffer);
    resizedImage.grayscale();

    await resizedImage.withMetadata().toFile(`./public/${name}`);
  } catch (error) {
    console.log(error);
  }
};
module.exports = grayScale;
