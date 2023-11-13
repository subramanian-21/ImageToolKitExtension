const helpResponse = {
    text: "# Help",
    slides: [
      {
        type: "text",
        title: "# imageToolKit",
        data: 'ImageToolkit is a Cliq extension that provides various image operations, including image format conversion, dynamic image compression, and grayscale conversion.\n\n## Getting Started\n\n1. *Installation:*\n   - Install the extension in your Cliq Marketplace.\n\n2. *Accessing the Extension:*\n   - Search for ImageToolkitBot\n\n## Usage\n\n1. *Choose an Operation:*\n   - Click on "ImageOperations" in the extension popup.\n   - Choose the desired image operation, such as image converter, compressor, etc.\n\n2. *Upload and Convert:*\n   - Upload the image you want to process.\n   - Provide any necessary details for the conversion.\n   - Submit the form.\n\n3. *View Rendered Image:*\n   - The response URL is provided. Open it to view the rendered image in a new tab.\n\n4. *Save Rendered Image:*\n   - In the new tab, right-click on the rendered image.\n   - Select "Save Image As..." to save the processed image to your device.',
      },
    ],
  };

  const optionsResponse = {
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
            value: "grayscale",
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

  const converterResponse = {
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

  const compresserResponse = {
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

  const grayScaleResponse = {
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
 
  const converterImageResponse =(url)=>{
    return {
        text: "# Image Format Converter",
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
            data: "if it doesn't work...\nwait for few seconds, Image is rendering",
          },
        ],
      };
  }
  const compresserImageResponse= (url)=>{
    return {
        text: "# Image Compresser",
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
            data: "if it doesn't work...\nwait for few seconds, Image is rendering",
          },
        ],
      };
  }
  const grayscaleImageResponse= (url)=>{
    return {
        text: "# Grayscale Converter",
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
            data: "if it doesn't work...\nwait for few seconds, Image is rendering",
          },
        ],
      };
  }


  const errorResponse = {
    text: "# Error",
    slides: [
      {
        type: "text",
        title: "ImageToolKit",
        data: "Sorry Error Occured!\ntry again...",
      },
    ],
  };
module.exports = {helpResponse,optionsResponse,converterResponse,compresserResponse,grayScaleResponse,converterImageResponse,compresserImageResponse,grayscaleImageResponse,errorResponse} 