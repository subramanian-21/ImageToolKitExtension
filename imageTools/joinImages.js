const sharp = require("sharp");
const joinImage = async (req, name) => {
  const imageUrl1 = req.body.params?.form?.values?.join?.files[0]?.url;
  const imageUrl2 = req.body.params?.form?.values?.join?.files[1]?.url;

  const response1 = await fetch(imageUrl1);
  const response2 = await fetch(imageUrl2);

  const buffer1 = await response1.arrayBuffer();
  const buffer2 = await response2.arrayBuffer();

  const image1 = sharp(buffer1);
  const image2 = sharp(buffer2); 
  const [metadata1, metadata2] = await Promise.all([image1.metadata(), image2.metadata()]);

  switch (req.body.params?.form?.values.orient.value) {
    case "horizontal": {
        await image2.resize({
            height: metadata1.height,
            width:metadata1.width
          });
          const image2Buffer = await image2.toBuffer()
          const joinedImageHorizontal = await image1
          console.log("Joined horizontally:", joinedImageHorizontal);
          break;
    }
    case "vertical": {
        image2.resize({
            height: metadata1.height,
            width:metadata1.width
          });
          const image2Buffer = await image2.toBuffer()
          const joinedImageVertical = await image1.composite([{ input:image2Buffer, gravity: 'south' }]).toFile(`./public/${name}`);
          console.log("Joined vertically:", joinedImageVertical);
          break;
    }
  }

  console.log("Image saving complete");
};
module.exports = joinImage;
