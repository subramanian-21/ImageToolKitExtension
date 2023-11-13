const help = require("./imageTools/help");
const converter = require("./imageTools/imageConverter");
const compresser = require("./imageTools/imageCompresser");
const grayscale = require("./imageTools/grayScale");
const serverUrl = require('./config')

const controller = async (req, res) => {
  let response = {};

  if (req.body.params?.form?.values?.converter) {
    try {
      const format = req.body.params.form?.values?.format.value;
      const timestamp = new Date().getTime();
      const randomNumber = Math.floor(Math.random() * 1000) + 1;
      const uniqueName = `${timestamp}_${randomNumber}.${format}`;

      const convert = await converter(req, uniqueName);
      const url = `${serverUrl}/${uniqueName}`;
      const resp = {
        text: "# Result",
        slides: [
          {
            type: "text",
            title: "imageToolKit",
            buttons: [
              {
                label: "go to image",
                action: {
                  type: "open.url",
                  data: { web: url },
                },
              },
            ],
            data: "Compressed Image...",
          },
          {
            type: "text",
            title: "",
            data: "if it doesn't work...wait for few seconds to render image",
          },
        ],
      };

      res.status(200).json({
        output: resp,
      });
    } catch (error) {
      const resp = {
        text: "# Error",
        slides: [
          {
            type: "text",
            title: "ImageToolKit",
            data: "Sorry Error Occured!\ntry again...",
          },
        ],
      };
      res.status(200).json({
        output: resp,
      });
    }
  }
  if (req.body.params?.form?.values?.compresser) {
    try {
        const imageName = req.body.params.form?.values?.compresser.files.name;
        const format = imageName.split(".")[imageName.split(".").length -1]
        const timestamp = new Date().getTime();
        const randomNumber = Math.floor(Math.random() * 1000) + 1;
        const uniqueName = `${timestamp}_${randomNumber}.${format}`;
  
        const compress = await compresser(req, uniqueName,format);
        const url = `${serverUrl}/${uniqueName}`;
        const resp = {
          text: "# Result",
          slides: [
            {
              type: "text",
              title: "imageToolKit",
              buttons: [
                {
                  label: "go to image",
                  action: {
                    type: "open.url",
                    data: { web: url },
                  },
                },
              ],
              data: "Converted Image...",
            },
            {
              type: "text",
              title: "",
              data: "if it doesn't work...wait for few seconds to render image",
            },
          ],
        };
  
        res.status(200).json({
          output: resp,
        });
      } catch (error) {
        const resp = {
          text: "# Error",
          slides: [
            {
              type: "text",
              title: "ImageToolKit",
              data: "Sorry Error Occured!\ntry again...",
            },
          ],
        };
        res.status(200).json({
          output: resp,
        });
      }
  }
  if (req.body.params?.form?.values?.grayscale) {
  }

  if (req.body.params?.form?.name === "options") {
    switch (req.body.params?.form?.values?.options?.value) {
      case "converter": {
        response = {
          type: "form",
          title: "ImageToolKit",
          name: "converter",
          hint: "convert Image from JPG, JPEG, PNG ,... to any of the formats ",
          button_label: "Render",
          inputs: [
            {
              name: "converter",
              label: "Select image to be converted",
              placeholder: "Please upload a image (.jpg, .jpeg, .png, ....)",
              mandatory: true,
              type: "file",
            },
            {
              name: "format",
              label: "Formats",
              placeholder: "Choose from the list of options",
              multiple: false,
              mandatory: true,
              type: "select",
              options: [
                {
                  value: "jpg",
                  label: "JPG",
                },
                {
                  value: "jpeg",
                  label: "JPEG",
                },
                {
                  value: "png",
                  label: "PNG",
                },
                {
                  value: "svg",
                  label: "SVG",
                },
                {
                  value: "gif",
                  label: "GIF",
                },
              ],
            },
          ],
          action: {
            type: "invoke.function",
            name: "imagetoolkitform",
          },
        };
        res.status(200).json({
          output: response,
        });
        break;
      }
      case "compresser": {
        response = {
          type: "form",
          title: "ImageToolKit",
          name: "compresser",
          hint: "Compress Size of Image without reducing the Quality",
          button_label: "Render",
          inputs: [
            {
              name: "compresser",
              label: "Select image to be compressed",
              placeholder: "Please upload a image (.jpg, .jpeg, .png, ....)",
              mandatory: true,
              type: "file",
            },
            {
              name: "size",
              label: "Quality %",
              placeholder: "0 - 100%",
              min: "0",
              max: "100",
              mandatory: true,
              type: "number",
            },
          ],
          action: {
            type: "invoke.function",
            name: "imagetoolkitform",
          },
        };
        res.status(200).json({
          output: response,
        });
        break;
      }
      case "gray_scale": {
        response = {
          type: "form",
          title: "ImageToolKit",
          name: "grayscale",
          hint: "Convert Color Images into Grayscale images",
          button_label: "Render",
          inputs: [
            {
              name: "grayscale",
              label: "Select image to be changed",
              placeholder: "Please upload a image (.jpg, .jpeg, .png, ....)",
              mandatory: true,
              type: "file",
            },
          ],
          action: {
            type: "invoke.function",
            name: "imagetoolkitform",
          },
        };
        res.status(200).json({
          output: response,
        });
        break;
      }
    }
  }

  if (req.body.handler.name === "ImageOperations") {
    response = {
      type: "form",
      title: "ImageToolkit",
      name: "options",
      button_label: "Next",
      inputs: [
        {
          name: "options",
          label: "Select Image operation",
          placeholder: "Choose from the list of options",
          multiple: false,
          mandatory: false,
          type: "select",
          options: [
            {
              value: "converter",
              label: "Image Converter",
            },
            {
              value: "compresser",
              label: "Image Compresser",
            },
            {
              value: "gray_scale",
              label: "Gray Scale",
            },
          ],
        },
      ],
      action: {
        type: "invoke.function",
        name: "imagetoolkitform",
      },
    };
    res.status(200).json({
      output: response,
    });
  }
  if (req.body.handler.name === "Help") {
    response = await help();
    res.status(200).json({
      output: response,
    });
  }
};
module.exports = controller;
