const sharp = require("sharp");
const imageResize = async (req, name) => {
  let width, height, reWidth, reHeight;
  const imageUrl = req.body.params.form?.values?.resize.files.url;
  if (req.body.params.form?.values?.resizes.value !== "0") {
    const resizes = req.body.params.form?.values?.resizes.value;
    width = Number(resizes.split("x")[0]);
    height = Number(resizes.split("x")[1]);
  } else {
    width = Number(req.body.params.form?.values?.width);
    height = Number(req.body.params.form?.values?.height);
  }
  const response = await fetch(imageUrl);

  const buffer = await response.arrayBuffer();

  const resizedImage = sharp(buffer);
  if (req.body.params.form?.values?.lock) {
    const imageMetadata = await resizedImage.metadata();
    const imageAspectRatio = imageMetadata.width / imageMetadata.height;
    if (imageAspectRatio > width / height) {
      reHeight = Math.floor(width / imageAspectRatio);
    } else {
      reWidth = Math.floor(height * imageAspectRatio);
    }

    await resizedImage
      .withMetadata()
      .resize({ width: reWidth, height: reHeight, fit: "inside" })
      .toFile(`./public/${name}`);
  } else {
    await resizedImage
      .withMetadata()
      .resize({ width: width, height: height, fit: "fill" })
      .toFile(`./public/${name}`);
  }
};
module.exports = imageResize;
