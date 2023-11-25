const sharp = require("sharp");
const rotateImage = async (req, name) => {
  try {
    const imageUrl = req.body.params.form?.values?.rotate.files.url;
    const degree = req.body.params.form?.values?.degree.value;
    const response = await fetch(imageUrl);

    const buffer = await response.arrayBuffer();

    const resizedImage = sharp(buffer);

    if (degree === "180" || degree === "90" || degree === "270") {
      await resizedImage
        .withMetadata()
        .rotate(Number(degree))
        .toFile(`./public/${name}`);
    } else if (degree === "flip") {
      await resizedImage.withMetadata().flip().toFile(`./public/${name}`);
    } else {
      await resizedImage.withMetadata().flop().toFile(`./public/${name}`);
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = rotateImage;
