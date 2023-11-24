const { PDFDocument } = require("pdf-lib");
const fs = require("fs");
const fetch = require("node-fetch");
const sharp = require('sharp');

const pdfConverter = async (req, uniqueName) => {
  const images = req.body?.params?.form?.values?.pdfconverter?.files.map((k) => {
    return {
      url: k.url,
      format: k.contenttype.split("/")[1],
    };
  });

  const pdfDoc = await PDFDocument.create();

  const embedImage = async (url, format) => {
    const imageBuffer = await fetch(url).then((res) => res.buffer());
    const sharpImage = sharp(imageBuffer).withMetadata();
    const processedImage = await sharpImage.toBuffer();

    if (format === "jpg" || format === "jpeg") {
      return pdfDoc.embedJpg(processedImage);
    } else {
      return pdfDoc.embedPng(processedImage);
    }
  };

  const embedImages = await Promise.all(images.map(({ url, format }) => embedImage(url, format)));

  embedImages.forEach((jpgImage) => {
    const page = pdfDoc.addPage();
    const { width, height } = jpgImage.scale(1);

    page.setSize(width, height);
    page.drawImage(jpgImage, {
      x: 0,
      y: 0,
      width,
      height,
    });
  });

  fs.writeFileSync(`./public/${uniqueName}`, await pdfDoc.save());
};

module.exports = pdfConverter;
