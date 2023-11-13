const help = require("./imageTools/help");
const controller = async (req, res) => {
  let response = {};
  
console.log(req.body.params?.form?.values)
  

  if(req.body.params?.form?.values?.compresser){
    
  }
  if(req.body.params?.form?.values?.converter){

  }
  if(req.body.params?.form?.values?.grayscale){

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
  }
  if (req.body.handler.name === "Help") {
    response = await help();
  }

  res.status(200).json({
    output: response,
  });
};
module.exports = controller;
