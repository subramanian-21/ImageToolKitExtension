const sharp = require("sharp");
const converter = async (req, name) => {
  try {
    let imageUrl;
    if(req.body.params?.form?.values?.converter){
      imageUrl = req.body.params.form?.values?.converter.files.url;
    }else{
      imageUrl = req.body.params?.messages?.list[0].file.url
    }
    

    const response = await fetch(imageUrl);

    const buffer = await response.arrayBuffer();

    const resizedImage = sharp(buffer);
    await resizedImage.withMetadata().toFile(`./public/${name}`);
  } catch (error) {
    console.log(error);
  }
};
module.exports = converter;
