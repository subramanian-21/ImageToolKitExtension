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
          value: "join",
          label: "Join Images",
        },
        {
          value: "rotate",
          label: "Rotate Image",
        },
        {
          value: "resize",
          label: "Resize Image",
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
const resizeResponse = {
  type: "form",
  title: "ImageToolKit",
  name: "resize",
  hint: "resize any (JPG, JPEG, PNG, WEBP, GIF...) of the image formats\n*Upload image of < 10mb",
  button_label: "Render",
  inputs: [
    {
      name: "resize",
      label: "Select image to be resized",
      placeholder:
        "Please upload a image (.jpg, .jpeg, .png, .webp, .gif ....)",
      mandatory: true,
      type: "file",
    },
    {
      name: "resizes",
      label: "sizes",
      placeholder: "Standard sizes",
      multiple: false,
      mandatory: true,
      type: "select",
      options: [
        {
          value: "0",
          label: "Custom Width & Height(Enter in the below fields)",
        },
        {
          value: "1920x1080",
          label: "1920x1080 - Full HD (1080p)",
        },
        {
          value: "1280x720",
          label: "1280x720 - HD (720p)",
        },
        {
          value: "800x800",
          label: "800x800 - Square (1:1)",
        },
        {
          value: "150x150",
          label: "150x150 - Thumbnail",
        },
        {
          value: "1200x400",
          label: "1200x400 - Banner/Header",
        },
        {
          value: "600x400",
          label: "600x400 - Email Newsletter",
        },
      ],
    },
    {
      name: "width",
      label: "Enter Custom Width",
      placeholder: "Custom Width upto 4096",
      min: "0",
      max: "4096",
      mandatory: false,
      type: "number",
    },
    {
      name: "height",
      label: "Enter Custom Height",
      placeholder: "Custom Height upto 2160",
      min: "0",
      max: "2160",
      mandatory: false,
      type: "number",
    },
    {
      name: "lock",
      label: "Lock aspect ratio",
      value: false,
      type: "toggle",
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
  hint: "convert Image from JPG, JPEG, PNG, WEBP, GIF... to any of the formats\n*upload image of < 10mb",
  button_label: "Render",
  inputs: [
    {
      name: "converter",
      label: "Select image to be converted",
      placeholder:
        "Please upload a image (.jpg, .jpeg, .png, .webp, .gif ....)",
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
          value: "webp",
          label: "WEBP",
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

const rotateResponse = {
  type: "form",
  title: "ImageToolKit",
  name: "rotate",
  hint: "Orient images to 90, 180, 270 degrees\n*Upload images of < 1mb",
  button_label: "Render",
  inputs: [
    {
      name: "rotate",
      label: "Select image to be Oriented",
      placeholder:
        "Please upload a image (.jpg, .jpeg, .png, .webp, .gif ....)",
      mandatory: true,
      type: "file",
    },
    {
      name: "degree",
      label: "Rotation Degree",
      placeholder: "Choose from the list of options",
      multiple: false,
      mandatory: true,
      type: "select",
      options: [
        {
          value: "90",
          label: "90° (right)",
        },
        {
          value: "180",
          label: "180° (upside down)",
        },
        {
          value: "270",
          label: "270° (left)",
        },
        {
          value: "flip",
          label: "Flip (vertical mirror)",
        },{
          value: "flop",
          label: "Flop (horizontal mirror)",
        }
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
  hint: "Compress Size of Image without reducing the Quality\n*Upload images of < 10mb",
  button_label: "Render",
  inputs: [
    {
      name: "compresser",
      label: "Select image to be compressed",
      placeholder: "Please upload a image (.jpg, .jpeg, .png, .webp, .gif....)",
      mandatory: true,
      type: "file",
    },
    {
      name: "size",
      label: "Select Quality of Image",
      placeholder: "Choose Quality",
      multiple: false,
      mandatory: true,
      type: "select",
      options: [
        {
          value: "high",
          label: "High",
        },
        {
          value: "medium",
          label: "Medium",
        },
        {
          value: "low",
          label: "Low",
        },
      ],
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
  hint: "*Please upload a image (.jpg, .jpeg, .png Only)\n*Upload images of < 500kb\n*Compress it before converting into pdf",
  button_label: "Render",
  inputs: [
    {
      name: "pdfconverter",
      label: "Select images",
      placeholder: "Please upload a image (.jpg, .jpeg, .png)",
      multiple: true,
      max_selections: 10,
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
  hint: "Convert Color Images into Grayscale images\n*Upload images of < 1mb",
  button_label: "Render",
  inputs: [
    {
      name: "grayscale",
      label: "Select image to be changed",
      placeholder: "Please upload a image (.jpg, .jpeg, .png, .webp, .gif...)",
      mandatory: true,
      type: "file",
    },
  ],
  action: {
    type: "invoke.function",
    name: "imagetoolkitform",
  },
};
const joinResponse = {
  type: "form",
  title: "ImageToolKit",
  name: "join",
  hint: "*Upload two images of < 2mb size\n*Join it vertically or horizontally",
  button_label: "Render",
  inputs: [
    {
      name: "join",
      label: "Select two images",
      placeholder: "Please upload a image(.jpg, .jpeg, .png, .gif, .tiff, .webp)",
      multiple: true,
      max_selections: 2,
      mandatory: true,
      type: "file",
    },
    {
      name: "orient",
      label: "Select Join Option",
      placeholder: "Choose orientation",
      multiple: false,
      mandatory: true,
      type: "select",
      options: [
        {
          value: "horizontal",
          label: "Horizontal Join",
        },
        {
          value: "vertical",
          label: "Vertical Join",
        },
      ],
    },
    {
      name: "autocompress",
      label: "Auto Compress",
      value: false,
      type: "toggle",
    },

  ],

  action: {
    type: "invoke.function",
    name: "imagetoolkitform",
  },
};

const ImageResponse = (name, url,download, text, uName) => {
  return {
    text: `# ${name}`,
    card: {
      theme: "modern-inline",
    },
    slides: [
      {
        type: "text",
        title: "",
        buttons: [
          {
            label: "Go to image",
            type: "+",
            action: {
              type: "open.url",
              data: { web: url },
            },
          },
          {
            label: "Download image",
            type: "+",
            action: {
              type: "open.url",
              data: { web: download },
            },
          },
        ],
        data: "Converted image...",
      },
      {
        type: "text",
        title: "",
        data: "if it doesn't work...\nwait for few seconds\n*The Larger image size => more waiting time*\n\n*Convert Next :*",
        buttons: [
          {
            label: text,
            hint: "",
            action: {
              type: "invoke.function",
              data: {
                name: "imagetoolkitform",
              },
            },
            key: uName,
          },
        ],
      },
    ],
  };
};
const pdfResultResponse = (name, url,download, text, uName) => {
  return {
    text: `# ${name}`,
    card: {
      theme: "modern-inline",
    },
    slides: [
      {
        type: "text",
        title: "",
        buttons: [
          {
            label: "Open PDF",
            type: "+",
            action: {
              type: "open.url",
              data: { web: url },
            },
          },
          {
            label: "Open PDF",
            type: "+",
            action: {
              type: "open.url",
              data: { web: download },
            },
          },
        ],
        data: "Converted PDF...",
      },
      {
        type: "text",
        title: "",
        data: "if it doesn't work...\nwait for few seconds PDF is rendering\nThe Larger image size => more waiting time\n*It is recomended to compress images before converting into PDF*\n\n*Convert Next :*",
        buttons: [
          {
            label: text,
            hint: "",
            action: {
              type: "invoke.function",
              data: {
                name: "imagetoolkitform",
              },
            },
            key: uName,
          },
        ],
      },
    ],
  };
};
const errorResponse = (text, uName) => {
  return {
    text: "# ImageToolKit",
    card: {
      theme: "modern-inline",
    },
    slides: [
      {
        type: "text",
        title: "Error",
        data: "Oops!.. unsupported image format\n\n*Convert Next :*",
        buttons: [
          {
            label: text,
            hint: "",
            action: {
              type: "invoke.function",
              data: {
                name: "imagetoolkitform",
              },
            },
            key: uName,
          },
        ],
      },
    ],
  };
};

const unsupportedResponse = {
  slides: [
    {
      type: "text",
      title: "Error!",
      data: "Oops!.. unsupported image format",
    },
  ],
  text: "# ImageToolKit",
};
const twoInputs = (text, uName) => {
  return {
    text: "# ImageToolKit",
    card: {
      theme: "modern-inline",
    },
    slides: [
      {
        type: "text",
        title: "Error",
        data: "Input Two images to join\n\n*Convert Next :*",
        buttons: [
          {
            label: text,
            hint: "",
            action: {
              type: "invoke.function",
              data: {
                name: "imagetoolkitform",
              },
            },
            key: uName,
          },
        ],
      },
    ],
  };
};

module.exports = {
  helpResponse,
  optionsResponse,
  converterResponse,
  compresserResponse,
  grayScaleResponse,
  ImageResponse,
  joinResponse,
  errorResponse,
  pdfResponse,
  twoInputs,
  resizeResponse,
  pdfResultResponse,
  rotateResponse,
  funResponse,
  animeResponse,
  memeResponse,
  memeCreatorResponse,
  unsupportedResponse,
};
