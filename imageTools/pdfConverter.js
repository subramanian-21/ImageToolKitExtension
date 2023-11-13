const { PDFDocument } = require("pdf-lib");
const fs = require('fs')
const fetch = require('node-fetch');
const pdfConverter = async (req,uniqueName)=>{
    const images = req.body?.params?.form?.values?.pdfconverter?.files.map(
        (k) => {
            return {
                url : k.url,
                format : k.contenttype.split('/')[1]
            }
        }
      );
     
      
      const pdfDoc = await PDFDocument.create();
    
      async function createPdf(k) {
        const page = pdfDoc.addPage();
        const jpgImageBytes = await fetch(k.url).then((res) => res.arrayBuffer());
        let jpgImage = null
        if(k.format === 'jpg' || k.format === 'jpeg'){
            jpgImage = await pdfDoc.embedJpg(jpgImageBytes);
        }else{
            jpgImage = await pdfDoc.embedPng(jpgImageBytes);
        }
        const { width, height } = jpgImage.scale(1);
        page.setSize(width, height);

        page.drawImage(jpgImage, {
          x: 0,
          y: 0,
          width,
          height,
        });
        console.log("done");
      }

      await Promise.all(images.map(async (k) => await createPdf(k)));
      fs.writeFileSync(`./public/${uniqueName}`, await pdfDoc.save());
}
module.exports = pdfConverter