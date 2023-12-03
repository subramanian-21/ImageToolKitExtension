const sharp = require("sharp");
const grayScale = async (req, name) => {
  try {
    console.log(req.body.params?.attachments);
    let imageUrl;
    if (req.body.params.form?.values?.grayscale) {
      imageUrl = req.body.params.form?.values?.grayscale.files.url;
    } else {
      imageUrl = req.body.params?.attachments[0].file.url;
    }

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
