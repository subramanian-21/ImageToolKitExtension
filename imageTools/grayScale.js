const axios = require("axios");
const path = require("path");
const fs = require("fs");
const jimp = require("jimp");

const grayscale= async(req,uniqueName,format)=>{
    try{
        const imageUrl = req.body.params.form?.values?.compresser.files.url;
        const imageLoc = path.join(__dirname, `image.${format}`);   
        await axios.get(imageUrl, { responseType: "stream" }).then((response) => {
          const imStream = fs.createWriteStream(imageLoc);
          response.data.pipe(imStream);
          imStream.on("finish", async () => {
            const image = await jimp.read(imageLoc);
            await image
              .quality(50)
              .grayscale()
              .writeAsync(`./public/${uniqueName}`)
              .then(() => {
                console.log("Image saved successfully.");
              });
          });
        });
      } catch (error) {
          console.log(error)
      }
}
module.exports = grayscale