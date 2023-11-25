const sharp = require("sharp");
const fetch = require("node-fetch");

const joinImage = async (req, name) => {
  const imageUrl1 = req.body.params?.form?.values?.join?.files[0]?.url;
  const imageUrl2 = req.body.params?.form?.values?.join?.files[1]?.url;
  try {
    const response1 = await fetch(imageUrl1);
    const response2 = await fetch(imageUrl2);

    const buffer1 = await response1.buffer();
    const buffer2 = await response2.buffer();

    const image1 = sharp(buffer1);
    const image2 = sharp(buffer2);

    const [metadata1, metadata2] = await Promise.all([
      image1.metadata(),
      image2.metadata(),
    ]);

    switch (req.body.params?.form?.values?.orient.value) {
      case "horizontal": {
        image2.resize({
          height: metadata1.height,
        });
        const resizedImage2 = await image2.toBuffer();
        image1
          .extend({
            top: 0,
            bottom: 0,
            right: metadata2.width,
          })
          .composite([{ input: resizedImage2, gravity: "east" }])
          .toFile(`./public/${name}`);
        break;
      }
      case "vertical": {
        image2.resize({
          width: metadata1.width,
        });
        const resizedImage2 = await image2.toBuffer();
        await image1
          .extend({
            left: 0,
            right: 0,
            bottom: metadata2.height,
          })
          .composite([{ input: resizedImage2, gravity: "south" }])
          .toFile(`./public/${name}`);
        break;
      }
      default: {
        console.error("Invalid orientation");
        break;
      }
    }
  } catch (error) {
    console.error("Error joining images:", error);
  }
};

module.exports = joinImage;
