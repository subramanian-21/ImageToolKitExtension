const { PDFDocument } = require("pdf-lib");
const fs = require("fs");
const fetch = require("node-fetch");
const sharp = require('sharp')

const pdfConverter = async (req, uniqueName) => {
  const images = req.body?.params?.form?.values?.pdfconverter?.files.map(
    (k) => {
      return {
        
        url: k.url,
        format: k.contenttype.split("/")[1],
      };
    }
  );

  const pdfDoc = await PDFDocument.create();

  async function createPdf(k) {
    const page = pdfDoc.addPage();
    const jpgImageBytes = await fetch(k.url).then((res) => res.arrayBuffer());
    const sharpImage = sharp(jpgImageBytes)
   
    let jpgImage = null;
    if (k.format === "jpg" || k.format === "jpeg") {
      sharpImage.jpeg({quality:50})
      jpgImage = await pdfDoc.embedJpg(sharpImage);
    } else {
      sharpImage.png({quality:5})
      jpgImage = await pdfDoc.embedPng(sharpImage);
    }
    const { width, height } = jpgImage.scale(1);
    page.setSize(width, height);

    page.drawImage(jpgImage, {
      x: 0,
      y: 0,
      width,
      height,
    });
  }

  await Promise.all(images.map(async (k) => await createPdf(k)));
  fs.writeFileSync(`./public/${uniqueName}`, await pdfDoc.save());
};
module.exports = pdfConverter;
