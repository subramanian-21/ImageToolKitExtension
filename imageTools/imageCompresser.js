const axios = require("axios");
const path = require("path");
const fs = require("fs");
const jimp = require("jimp");

const compresser= async (req,uniqueName,format)=>{
    try{
        const imageUrl = req.body.params.form?.values?.compresser.files.url;

        const imageLoc = path.join(__dirname, `image.${format}`);
        const size = req.body.params.form?.values?.size/2
        
        await axios.get(imageUrl, { responseType: "stream" }).then((response) => {
          const imStream = fs.createWriteStream(imageLoc);
          response.data.pipe(imStream);
          imStream.on("finish", async () => {
            const image = await jimp.read(imageLoc);
            await image
              .quality(size)
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
module.exports = compresser