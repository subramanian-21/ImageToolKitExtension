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
          value: "pdfconverter",
          label: "Images to PDF",
        },
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
const funResponse = {
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
          value: "anime",
          label: "Anime Emoji Generator",
        },
        {
          value: "memeCreator",
          label: "Meme Creator",
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
const animeResponse = {
  type: "form",
  title: "ImageToolKit",
  name: "anime",
  hint: "Select emotion to get an Anime emoji",
  button_label: "GO!",
  inputs: [
    {
      name: "dynamic_select",
      label: "Choose Emotion 👇",
      placeholder: "Choose from the list of options",
      multiple: false,
      mandatory: false,
      type: "dynamic_select",
      options: [
        {
          value: "angry",
          label: "angry",
        },
        {
          value: "calm-down",
          label: "calm down",
        },
        {
          value: "confused",
          label: "confused",
        },
        {
          value: "dance",
          label: "dance",
        },
        {
          value: "pre-exercise",
          label: "pre exercise",
        },
        {
          value: "happy",
          label: "happy",
        },
        {
          value: "lunch-break-time",
          label: "lunch break time",
        },
        {
          value: "yes",
          label: "yes",
        },
        {
          value: "misc",
          label: "misc",
        },
        {
          value: "no",
          label: "no",
        },
        {
          value: "thinking",
          label: "thinking",
        },
        {
          value: "sad",
          label: "sad",
        },
        {
          value: "smug",
          label: "smug",
        },
        {
          value: "surprised",
          label: "surprised",
        },
        {
          value: "yes",
          label: "yes",
        },
      ],
    },
  ],
  action: {
    type: "invoke.function",
    name: "imagetoolkitform",
  },
};

const memeResponse = {
  type: "form",
  title: "ImageToolKit",
  name: "meme",
  hint: "Memes Generator",
  button_label: "GO!",
  inputs: [
    {
      name: "text",
      label: "Search by Meme....",
      placeholder: "Keep it short",
      min_length: "0",
      max_length: "25",
      mandatory: false,
      type: "text",
    },
    {
      name: "toggle",
      label: "Safe Search",
      value: false,
      type: "toggle",
    },
  ],
  action: {
    type: "invoke.function",
    name: "imagetoolkitform",
  },
};

const memeCreatorResponse = {
  type: "form",
  title: "ImageToolKit",
  name: "memeCreator",
  hint: "Meme Creator",
  button_label: "GO!",
  inputs: [
    {
      name: "memeCreator",
      label: "Upload Background Image",
      placeholder: "File must be of format JPG, PNG, JPEG, GIF, WEBP",
      mandatory: true,
      type: "file",
    },
    {
      name: "textTop",
      label: "Text that should be placed at Top",
      placeholder: "What's up",
      min_length: "0",
      max_length: "30",
      mandatory: false,
      type: "text",
    },
    {
      name: "textBottom",
      label: "Text that should be placed at Bottom",
      placeholder: "Hello World",
      min_length: "0",
      max_length: "30",
      mandatory: false,
      type: "text",
    },
    {
      name: "font",
      label: "Select Text Font",
      placeholder: "Choose from the list of Fonts",
      multiple: false,
      mandatory: false,
      type: "select",
      options: [
        {
          value: "thick",
          label: "Thick",
        },
        {
          value: "comic",
          label: "Comic",
        },
        {
          value: "tiny",
          label: "Tiny",
        },
        {
          value: "thin",
          label: "Thin",
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
const pdfResponse = {
  type: "form",
  title: "ImageToolKit",
  name: "pdfconverter",
  hint: "*Please upload a image (.jpg, .jpeg, .png Only)\n*Upload images of <500kb\n*Compress it before converting into pdf",
  button_label: "Render",
  inputs: [
    {
      name: "pdfconverter",
      label: "Select image to be changed",
      placeholder: "Please upload a image (.jpg, .jpeg, .png)",
      multiple: true,
      max_selections: 8,
      mandatory: true,
      type: "file",
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
      placeholder: "Please upload a image (.jpg, .jpeg, .png, ...)",
      mandatory: true,
      type: "file",
    },
  ],
  action: {
    type: "invoke.function",
    name: "imagetoolkitform",
  },
};

const ImageResponse = (name, url) => {
  return {
    slides: [
      {
        type: "images",
        title: `# ImageToolKit`,
        buttons: [
          {
            label: "Go to image",
            hint: "",
            type: "+",
            action: {
              type: "open.url",
              data: { web: url },
            },
          },
        ],
        data: [url],
      },
      {
        type: "text",
        title: "Note",
        data: "Converting from jpeg to png gives larger image sizes\nCompress it again for required size...",
      },
    ],
    text: `# ${name}`,
  };
  I;
};
const pdfResultResponse = (name, url) => {
  return {
    text: `# ${name}`,
    slides: [
      {
        type: "text",
        title: "ImageToolKit",
        buttons: [
          {
            label: "Open PDF",
            type: "+",
            action: {
              type: "open.url",
              data: { web: url },
            },
          },
        ],
        data: "Converted PDF...",
      },
      {
        type: "text",
        title: "",
        data: "if it doesn't work...\nwait for few seconds, PDF is rendering",
      },
      {
        type: "text",
        title: "note",
        data: "The Larger the image size => more the waiting time\n*It is recomended to compress images before converting into PDF*",
      },
    ],
  };
};
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

const unsupportedResponse = {
  slides: [
    {
      type: "text",
      title: "Error!",
      data: "Oops! Error occured try again...",
    },
  ],
  text: "# ImageToolKit",
};

module.exports = {
  helpResponse,
  optionsResponse,
  converterResponse,
  compresserResponse,
  grayScaleResponse,
  ImageResponse,
  errorResponse,
  pdfResponse,
  pdfResultResponse,
  funResponse,
  animeResponse,
  memeResponse,
  memeCreatorResponse,
  unsupportedResponse,
};

/*


{"slides":[{"type":"images","title":"Title for your Images","buttons":[{"label":"Button 1","hint":"","type":"+","action":{"type":"open.url","data":{"web":"https://cliq.zoho.com"}}}],"data":["https://i.giphy.com/l0MYEqEzwMWFCg8rm.gif"]},{"type":"text","title":"Title for your Text","data":"Zoho Corporation, founded in 1996, known for pioneering software as a service (SAAS) model."}],"text":"Your message on the card goes here!"}I



{
    text: `# ${name}`,
    slides: [
      {
        type: "text",
        title: "ImageToolKit",
        buttons: [
          {
            label: "Open PDF",
            type: "+",
            action: {
              type: "open.url",
              data: { web: url },
            },
          },
        ],
        data: "Converted PDF...",
      },
      {
        type: "text",
        title: "",
        data: "if it doesn't work...\nwait for few seconds, PDF is rendering",
      },
      {
        type: "text",
        title: "note",
        data: "The Larger the image size => more the waiting time\n*It is recomended to compress images before converting into PDF*",
      },
    ],
  };
*/
