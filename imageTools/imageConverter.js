const sharp = require('sharp')
const converter = async (req, name) => {
    const imageUrl = req.body.params.form?.values?.converter.files.url;

    const response = await fetch(imageUrl);

    const buffer = await response.arrayBuffer();

    const resizedImage = sharp(buffer);
    await resizedImage.withMetadata().toFile(`./public/${name}`);

    console.log("Image saving complete");
 
};
module.exports = converter;

