const sharp = require('sharp')
const converter = async (req, name) => {
    try{
    const imageUrl = req.body.params.form?.values?.converter.files.url;

    const response = await fetch(imageUrl);

    const buffer = await response.arrayBuffer();

    const resizedImage = sharp(buffer);
    await resizedImage.withMetadata().toFile(`./public/${name}`);

    console.log("Image resizing and saving complete");
  } catch (error) {
      console.log(error)
  }
};
module.exports = converter;

