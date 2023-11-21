const sharp = require('sharp')
const rotateImage = async (req, name) => {
    try{
    const imageUrl = req.body.params.form?.values?.rotate.files.url;
    const degree = req.body.params.form?.values?.degree.value;
    const response = await fetch(imageUrl);

    const buffer = await response.arrayBuffer();

    const resizedImage = sharp(buffer);
    

    await resizedImage.withMetadata().rotate(degree).toFile(`./public/${name}`);

    console.log("Image resizing and saving complete");
  } catch (error) {
      console.log(error)
  }
};
module.exports = rotateImage;
