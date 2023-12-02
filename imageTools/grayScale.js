const sharp = require("sharp");
const fs = require('@cyclic.sh/s3fs')('cyclic-sleepy-gold-veil-ap-northeast-2')
const grayScale = async (req, name) => {
  try {
    let imageUrl;
    if(req.body.params.form?.values?.grayscale){
      imageUrl = req.body.params.form?.values?.grayscale.files.url;
    }else{
      imageUrl = req.body.params?.attachments[0].file.url;
    }
    

    const response = await fetch(imageUrl);

    const buffer = await response.arrayBuffer();

    const resizedImage = sharp(buffer);
    resizedImage.grayscale();

    const re = await resizedImage.withMetadata().toBuffer();

    await fs.writeFileSync('public/'+name,re)
  } catch (error) {
    console.log(error);
  }
};
module.exports = grayScale;
