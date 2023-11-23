const sharp = require('sharp')
const rotateImage = async (req, name) => {

    const imageUrl = req.body.params.form?.values?.rotate.files.url;
    const degree = Number(req.body.params.form?.values?.degree.value);
    const response = await fetch(imageUrl);

    const buffer = await response.arrayBuffer();

    const resizedImage = sharp(buffer);

    await resizedImage.withMetadata().rotate(degree).toFile(`./public/${name}`);

};
module.exports = rotateImage;
