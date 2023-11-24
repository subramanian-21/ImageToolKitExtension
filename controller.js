const converter = require("./imageTools/imageConverter");
const compresser = require("./imageTools/imageCompresser");
const serverUrl = require("./config");
const grayscale = require("./imageTools/grayScale");
const pdfConverter = require("./imageTools/pdfConverter");
const animeEmoji = require("./imageTools/animeEmoji");
const memeCreator = require("./imageTools/memeCreator");
const rotateImage = require("./imageTools/rotateImage");
const {
  helpResponse,
  optionsResponse,
  converterResponse,
  compresserResponse,
  grayScaleResponse,
  pdfResponse,
  sampleResp,
  ImageResponse,
  rotateResponse,
  resizeResponse,
  pdfResultResponse,
  funResponse,
  animeResponse,
  memeCreatorResponse,
  unsupportedResponse,
} = require("./responses");
const imageResize = require("./imageTools/imageResize");

const controller = async (req, res) => {

  if (req.body.params?.form?.values?.pdfconverter) {
    try {
      const timestamp = new Date().getTime();
      const randomNumber = Math.floor(Math.random() * 1000) + 1;
      const format = "pdf";
      const uniqueName = `${timestamp}_${randomNumber}.${format}`;
      const url = `${serverUrl}/${uniqueName}`;
      const images = req.body?.params?.form?.values?.pdfconverter?.files;
      images.map(k=>{
        const format =
          k.name.split(".")[k.name.split(".").length - 1];
          console.log(format)
        if (format == "jpg" || format == "jpeg" || format == "png") {
        
        }else{
          return res.status(200).json({
            output: unsupportedResponse,
          });
        }
      })
      const pdf = pdfConverter(req, uniqueName);
      const resp = pdfResultResponse("Images To PDF converter", url);
      res.status(200).json({
        output: resp,
      });
    } catch (error) {
      console.log(error)
    }
  }
  if (req.body.params?.form?.values?.converter) {
    try {
      const formatt = req.body.params.form?.values?.format.value;
      const timestamp = new Date().getTime();
      const randomNumber = Math.floor(Math.random() * 1000) + 1;
      const uniqueName = `${timestamp}_${randomNumber}.${formatt}`;

      const imageName = req.body.params.form?.values?.converter.files.name;
      const format = imageName.split(".")[imageName.split(".").length - 1];

      if (
        format == "jpg" ||
        format == "jpeg" ||
        format == "png" ||
        format == "webp" ||
        format == "gif"
      ) {
        const convert = converter(req, uniqueName);
        const url = `${serverUrl}/${uniqueName}`;
        const resp = ImageResponse("Image Format Converter", url);

        res.status(200).json({
          output: resp,
        });
      } else {
        return res.status(200).json({
          output: unsupportedResponse,
        });
      }
    } catch (error) {
      console.log(error)
    }
  }
  if (req.body.params?.form?.values?.resize) {
    try {
      const imageName = req.body.params.form?.values?.resize.files.name;
      const format = imageName.split(".")[imageName.split(".").length - 1];
      const timestamp = new Date().getTime();
      const randomNumber = Math.floor(Math.random() * 1000) + 1;
      const uniqueName = `${timestamp}_${randomNumber}.${format}`;
      if (
        format == "jpg" ||
        format == "jpeg" ||
        format == "png" ||
        format == "webp" ||
        format == "gif"
      ) {
        const resize = imageResize(req, uniqueName);
        const url = `${serverUrl}/${uniqueName}`;
        const resp = ImageResponse("Resize Image", url);

        res.status(200).json({
          output: resp,
        });
      } else {
        return res.status(200).json({
          output: unsupportedResponse,
        });
      }
    } catch (error) {
      console.log(error)
    }
  }

  if (req.body.params?.form?.values?.compresser) {
    try {
      const imageName = req.body.params.form?.values?.compresser.files.name;
      const format = imageName
        .split(".")
        [imageName.split(".").length - 1].toLowerCase();
      const timestamp = new Date().getTime();
      const randomNumber = Math.floor(Math.random() * 1000) + 1;
      const uniqueName = `${timestamp}_${randomNumber}.${format}`;
      if (
        format == "jpg" ||
        format == "jpeg" ||
        format == "png" ||
        format == "webp" ||
        format == "gif"
      ) {
        const compress = compresser(req, uniqueName, format);
        const url = `${serverUrl}/${uniqueName}`;
        const resp = ImageResponse("Image Compresser", url);

        res.status(200).json({
          output: resp,
        });
      } else {
        return res.status(200).json({
          output: unsupportedResponse,
        });
      }
    } catch (error) {
      console.log(error)
    }
  }
  if (req.body.params?.form?.values?.rotate) {
    try {
      const imageName = req.body.params.form?.values?.rotate.files.name;
      const format = imageName.split(".")[imageName.split(".").length - 1];
      const timestamp = new Date().getTime();
      const randomNumber = Math.floor(Math.random() * 1000) + 1;
      const uniqueName = `${timestamp}_${randomNumber}.${format}`;
      if (
        format == "jpg" ||
        format == "jpeg" ||
        format == "png" ||
        format == "webp" ||
        format == "gif"
      ) {
        const rotate = rotateImage(req, uniqueName);
        const url = `${serverUrl}/${uniqueName}`;
        const resp = ImageResponse("Rotate Image", url);

        res.status(200).json({
          output: resp,
        });
      } else {
        return res.status(200).json({
          output: unsupportedResponse,
        });
      }
    } catch (error) {
      console.log(error)
    }
  }

  if (req.body.params?.form?.values?.memeCreator) {
    try {
      const imageName = req.body.params.form?.values?.memeCreator.files.name;
      const format = imageName.split(".")[imageName.split(".").length - 1];

      if (
        format == "jpg" ||
        format == "jpeg" ||
        format == "png" ||
        format == "webp" ||
        format == "gif"
      ) {
        const response = await memeCreator(
          req.body.params?.form?.values?.memeCreator?.files?.url,
          req.body.params?.form?.values?.textTop,
          req.body.params?.form?.values?.textBottom,
          req.body.params?.form?.values?.font?.value
        );
  
        res.status(200).json({
          output: response,
        });
       
      }else{
        return res.status(200).json({
          output: unsupportedResponse,
        });
      }
     
    } catch (error) {
      console.log(error)
    }
  }

  if (req.body.params?.form?.values?.grayscale) {
    try {
      const imageName = req.body.params.form?.values?.grayscale.files.name;
      const format = imageName.split(".")[imageName.split(".").length - 1];
      const timestamp = new Date().getTime();
      const randomNumber = Math.floor(Math.random() * 1000) + 1;
      const uniqueName = `${timestamp}_${randomNumber}.${format}`;
      if (
        format == "jpg" ||
        format == "jpeg" ||
        format == "png" ||
        format == "webp" ||
        format == "gif"
      ) {
      }
      const grayscaleConverter = grayscale(req, uniqueName, format);
      const url = `${serverUrl}/${uniqueName}`;
      const resp = ImageResponse("Grayscale Converter", url);

      res.status(200).json({
        output: resp,
      });
    } catch (error) {
      console.log(error)
    }
  }

  if (req.body.params?.form?.values?.dynamic_select) {
    const response = await animeEmoji(
      req.body.params.form?.values?.dynamic_select?.value
    );
    res.status(200).json({
      output: response,
    });
  }

  if (req.body.params?.form?.name === "options") {
    switch (req.body.params?.form?.values?.options?.value) {
      case "converter": {
        const response = converterResponse;
        res.status(200).json({
          output: response,
        });
        break;
      }
      case "compresser": {
        const response = compresserResponse;
        res.status(200).json({
          output: response,
        });
        break;
      }
      case "rotate": {
        const response = rotateResponse;
        res.status(200).json({
          output: response,
        });
        break;
      }
      case "grayscale": {
        const response = grayScaleResponse;
        res.status(200).json({
          output: response,
        });
        break;
      }
      case "pdfconverter": {
        const response = pdfResponse;
        res.status(200).json({
          output: response,
        });
        break;
      }
      case "anime": {
        const response = animeResponse;
        res.status(200).json({
          output: response,
        });
        break;
      }

      case "memeCreator": {
        const response = memeCreatorResponse;
        res.status(200).json({
          output: response,
        });
        break;
      }

      case "resize": {
        const response = resizeResponse;
        res.status(200).json({
          output: response,
        });
        break;
      }
    }
  }

  if (req.body.handler.name === "ImageOperations") {
    const response = optionsResponse;
    res.status(200).json({
      output: response,
    });
  }
  if (req.body.handler.name === "Help") {
    const response = helpResponse;
    res.status(200).json({
      output: sampleResp,
    });
  }
  if (req.body.handler.name === "Fun") {
    const response = funResponse;
    res.status(200).json({
      output: response,
    });
  }
};
module.exports = controller;
