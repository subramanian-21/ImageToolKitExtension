const converter = require("./imageTools/imageConverter");
const compresser = require("./imageTools/imageCompresser");
const serverUrl = require("./config");
const grayscale = require("./imageTools/grayScale");
const pdfConverter = require("./imageTools/pdfConverter");
const animeEmoji = require("./imageTools/animeEmoji");
const memeCreator = require("./imageTools/memeCreator");
const rotateImage = require("./imageTools/rotateImage");
const memeGenerator = require("./imageTools/memeGenerator");
const {
  slashFunOperations,
  helpResponse,
  optionsResponse,
  converterResponse,
  customWH,
  compresserResponse,
  grayScaleResponse,
  pdfResponse,
  ImageResponse,
  slashEmoji,
  rotateResponse,
  resizeResponse,
  twoInputs,
  slashImageOperations,
  joinResponse,
  pdfResultResponse,
  actionConverterResponse,
  actionResizerResponse,
  actionCompresserResponse,
  funResponse,
  animeResponse,
  errorResponse,
  memeCreatorResponse,
} = require("./responses");
const imageResize = require("./imageTools/imageResize");
const joinImage = require("./imageTools/joinImages");

const controller = async (req, res) => {
  if (req.body.params?.form?.values?.pdfconverter) {
    try {
      const images = req.body?.params?.form?.values?.pdfconverter?.files;
      const unsupportedFormats = images.filter((k) => {
        const format = k.name.split(".").pop().toLowerCase();
        return !(format === "jpg" || format === "jpeg" || format === "png");
      });

      if (unsupportedFormats.length > 0) {
        return res.status(200).json({
          output: errorResponse("Images to PDF", "pdfconverter"),
        });
      }
      const timestamp = new Date().getTime();
      const randomNumber = Math.floor(Math.random() * 1000) + 1;
      const format = "pdf";
      const uniqueName = `${timestamp}_${randomNumber}.${format}`;
      const url = `${serverUrl}/${uniqueName}`;
      const download = `${serverUrl}/download/${uniqueName}`;
      const pdf = pdfConverter(req, uniqueName);
      const resp = pdfResultResponse(
        "Images To PDF converter",
        url,
        download,
        "Images to PDF",
        "pdfconverter"
      );
      res.status(200).json({
        output: resp,
      });
    } catch (error) {
      console.log(error);
    }
  }
  if (req.body.params?.form?.values?.join) {
    try {
      const images = req.body?.params?.form?.values?.join?.files;
      const unsupportedFormats = images.filter((k) => {
        const format = k.name.split(".").pop().toLowerCase();
        return !(
          format === "jpg" ||
          format === "jpeg" ||
          format === "png" ||
          format === "gif" ||
          format === "tiff" ||
          format === "webp"
        );
      });

      if (unsupportedFormats.length > 0) {
        return res.status(200).json({
          output: errorResponse("Join Images", "join"),
        });
      }
      if (images.length === 1) {
        return res.status(200).json({
          output: twoInputs("Join Images", "join"),
        });
      }
      const timestamp = new Date().getTime();
      const randomNumber = Math.floor(Math.random() * 1000) + 1;
      const format = "jpeg";
      const uniqueName = `${timestamp}_${randomNumber}.${format}`;

      const join = joinImage(req, uniqueName);
      const url = `${serverUrl}/${uniqueName}`;
      const download = `${serverUrl}/download/${uniqueName}`;
      const resp = ImageResponse(
        "Join Images",
        url,
        download,
        "Join Images",
        "join"
      );

      res.status(200).json({
        output: resp,
      });
    } catch (error) {
      console.log(error);
    }
  }

  if (
    req.body.params?.form?.values?.converter ||
    req.body.params?.form?.values.Action_Converter
  ) {
    try {
      let formatt, imageName;
      if (req.body.params?.form?.values?.converter) {
        formatt = req.body.params.form?.values?.format.value;
        imageName = req.body.params.form?.values?.converter.files.name;
      } else {
        formatt = req.body.params?.form?.values.Action_Converter.value;
        imageName = req.body.params?.messages?.list[0].file.name;
      }

      const timestamp = new Date().getTime();
      const randomNumber = Math.floor(Math.random() * 1000) + 1;
      const uniqueName = `${timestamp}_${randomNumber}.${formatt}`;

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
        const download = `${serverUrl}/download/${uniqueName}`;
        const resp = ImageResponse(
          "Image Format Converter",
          url,
          download,
          "Image Converter",
          "converter"
        );

        res.status(200).json({
          output: resp,
        });
      } else {
        return res.status(200).json({
          output: errorResponse("Image Converter", "converter"),
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  if (
    req.body.params?.form?.values?.resize ||
    req.body.params?.form?.name === "Action_Resizer"
  ) {
    try {
      let imageName;
      if (req.body.params?.form?.values?.resize) {
        imageName = req.body.params.form?.values?.resize.files.name;
      } else {
        imageName = req.body.params?.messages?.list[0].file.name;
      }

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
        if (
          req.body.params.form?.values?.resizes.value === "0" &&
          (!req.body.params.form?.values?.width ||
            !req.body.params.form?.values?.height)
        ) {
          return res.status(200).json({
            output: customWH("Resize Image", "resize"),
          });
        }
        const resize = imageResize(req, uniqueName);
        const url = `${serverUrl}/${uniqueName}`;
        const download = `${serverUrl}/download/${uniqueName}`;
        const resp = ImageResponse(
          "Resize Image",
          url,
          download,
          "Resize Image",
          "resize"
        );

        res.status(200).json({
          output: resp,
        });
      } else {
        return res.status(200).json({
          output: errorResponse("Resize Image", "resize"),
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  if (
    req.body.params?.form?.values?.compresser ||
    req.body.params?.form?.name === "Action_Compresser"
  ) {
    try {
      let imageName;
      if (req.body.params?.form?.values?.compresser) {
        imageName = req.body.params.form?.values?.compresser.files.name;
      } else {
        imageName = req.body.params?.messages?.list[0].file.name;
      }
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
        const download = `${serverUrl}/download/${uniqueName}`;
        const resp = ImageResponse(
          "Image Compresser",
          url,
          download,
          "Image Compresser",
          "compresser"
        );

        res.status(200).json({
          output: resp,
        });
      } else {
        return res.status(200).json({
          output: errorResponse("Image Compresser", "compresser"),
        });
      }
    } catch (error) {
      console.log(error);
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
        const download = `${serverUrl}/download/${uniqueName}`;
        const resp = ImageResponse(
          "Rotate Image",
          url,
          download,
          "Rotate Image",
          "rotate"
        );

        res.status(200).json({
          output: resp,
        });
      } else {
        return res.status(200).json({
          output: errorResponse("Rotate Image", "rotate"),
        });
      }
    } catch (error) {
      console.log(error);
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
      } else {
        return res.status(200).json({
          output: errorResponse("Meme Creator", "memeCreator"),
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  if (
    req.body.params?.form?.values?.grayscale ||
    (req.body.name === "Grayscale" && req.body.type === "messageaction")
  ) {
    try {
      let imageName;
      if (req.body.params?.form?.values?.grayscale) {
        imageName = req.body.params.form?.values?.grayscale.files.name;
      } else {
        imageName = req.body.params?.attachments[0].name;
      }
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
        const grayscaleConverter = grayscale(req, uniqueName, format);
        const url = `${serverUrl}/${uniqueName}`;
        const download = `${serverUrl}/download/${uniqueName}`;
        const resp = ImageResponse(
          "Grayscale Converter",
          url,
          download,
          "Grayscale",
          "grayscale"
        );

        res.status(200).json({
          output: resp,
        });
      } else {
        return res.status(200).json({
          output: errorResponse("Grayscale", "grayscale"),
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
  if (req.body.name === "ImageConverter" && req.body.type === "messageaction") {
    res.status(200).json({
      output: actionConverterResponse,
    });
  }
  if (
    req.body.name === "ImageCompresser" &&
    req.body.type === "messageaction"
  ) {
    res.status(200).json({
      output: actionCompresserResponse,
    });
  }
  if (req.body.name === "ImageResizer" && req.body.type === "messageaction") {
    res.status(200).json({
      output: actionResizerResponse,
    });
  }

  if (
    req.body.params?.form?.values?.dynamic_select ||
    (req.body.name === "emojimagick" && req.body.params.selections.length > 0)
  ) {
    let emotion;

    if (req.body.params?.form?.values?.dynamic_select) {
      emotion = req.body.params.form?.values?.dynamic_select?.value;
    } else {
      emotion = req.body.params.selections[0].title;
    }
    const response = await animeEmoji(emotion);
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
      case "join": {
        const response = joinResponse;
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
      case "memeGenerator": {
        const response = await memeGenerator();

        res.status(200).json({
          output: response,
        });
        break;
      }
    }
  }
  if (
    req.body?.handler?.type === "suggestion_handler" &&
    req.body?.name === "imagetoolkit" &&
    !req.body.params?.selections[0]?.title
  ) {
    return res.status(200).json({
      output: [
        {
          title: "ImageOperations",

          description: "List of various image operations",
          imageurl:
            "https://miro.medium.com/v2/resize:fit:1400/1*de3ZD-Vk-v6p0mouXZfn_Q.jpeg",
        },
        {
          title: "Fun",

          description: "list of fun operations",
          imageurl:
            "https://t3.ftcdn.net/jpg/01/98/84/54/360_F_198845405_2BM10dX8fDBPQYn9h7azYx8TKFUZOyJG.jpg",
        },
      ],
    });
  }

  if (
    req.body?.handler?.type === "suggestion_handler" &&
    req.body.params.selections &&
    req.body.name !== "emojimagick"
  ) {
    switch (req.body.params?.selections[0]?.title) {
      case "ImageOperations": {
        return res.status(200).json({
          output: slashImageOperations,
        });
      }
      case "Fun": {
        return res.status(200).json({
          output: slashFunOperations,
        });
      }
    }
  }
  if (req.body?.name === "compresser") {
    const response = compresserResponse;
    return res.status(200).json({
      output: response,
    });
  }
  if (req.body?.name === "pdfconverter") {
    const response = pdfResponse;
    return res.status(200).json({
      output: response,
    });
  }
  if (
    req.body?.name === "emojimagick" &&
    req.body.params.selections.length === 0
  ) {
    return res.status(200).json({
      output: slashEmoji,
    });
  }
  if (
    req.body?.handler?.type === "execution_handler" &&
    !req.body?.params?.messages
  ) {
    switch (req.body.params?.selections[1]?.title) {
      case "ImageCompresser": {
        const response = compresserResponse;
        res.status(200).json({
          output: response,
        });
        break;
      }
      case "ImageConverter": {
        const response = converterResponse;
        res.status(200).json({
          output: response,
        });
        break;
      }
      case "PdfCreator": {
        const response = pdfResponse;
        res.status(200).json({
          output: response,
        });
        break;
      }
      case "JoinImages": {
        const response = joinResponse;
        res.status(200).json({
          output: response,
        });
        break;
      }
      case "ImageResizer": {
        const response = resizeResponse;
        res.status(200).json({
          output: response,
        });
        break;
      }
      case "OrientImage": {
        const response = rotateResponse;
        res.status(200).json({
          output: response,
        });
        break;
      }
      case "GrayScale": {
        const response = grayScaleResponse;
        res.status(200).json({
          output: response,
        });
        break;
      }
      case "AnimeEmojiGenerator": {
        const response = animeResponse;
        res.status(200).json({
          output: response,
        });
        break;
      }
      case "MemeCreator": {
        const response = memeCreatorResponse;
        res.status(200).json({
          output: response,
        });
        break;
      }
      case "MakeMeLaugh": {
        const response = await memeGenerator();
        res.status(200).json({
          output: response,
        });
        break;
      }

    }
  }

  if (req.body.params?.arguments?.key) {
    switch (req.body.params?.arguments?.key) {
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
      case "resize": {
        const response = resizeResponse;
        res.status(200).json({
          output: response,
        });
        break;
      }
      case "join": {
        const response = joinResponse;
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
      output: response,
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
