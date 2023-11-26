const helpResponse = {
  text: "# Tutorial",
  slides: [
    {
      type: "text",
      title: "# ImageToolKit",
      data: "ImageToolKit helps users to perform image operations such as such as conversion, compression, resizing and much more with additional components like emoji and meme generators.",
    },
    {
      type: "text",
      title: "# Getting Started",
      data: "1. *Installation*:\n       - Install the extension from the Cliq Extension Marketplace\n\n2. *Accessing the Extension*:\n       - Search for ImageToolKit Bot in \nthe Searchbar \n       - Select it and a bot will appear in your conversations",
    },
    {
      type: "text",
      title: "# Usage",
      data: "*Modules*:\n     A)Image Operations\n     B)Fun\n\n*1.Choose a Module*\n       - Click on the required module button displayed on the bottom of the bot.",
    },
    {
      type: "list",
      title: "2.Choose an Operation",
      data: [
        "Select an operation from the dropdown list.",
        "Operations include Image Compressor, Image Converter, Meme Creator etc.",
        "Click on 'Next'.",
      ],
    },
    {
      type: "list",
      title: "3.Input Fields",
      data: [
        "Upload image from files as required.",
        "Provide necessary specifications as requested.",
        "Click on 'Render' and submit the form.",
      ],
    },
    {
      type: "list",
      title: "4.View Result",
      data: [
        "After submission, a new message appears with the response.",
        "Click on 'Download' to download the rendered object.",
        "Click on 'Go to' button for accessing the URL which contains the response.",
        "Based on the image size uploaded, rendering may take some time.",
      ],
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
          value: "compresser",
          label: "Image Compresser",
        },

        {
          value: "pdfconverter",
          label: "Images to PDF",
        },

        {
          value: "join",
          label: "Join Images",
        },
        {
          value: "converter",
          label: "Image Converter",
        },
        {
          value: "resize",
          label: "Resize Image",
        },
        {
          value: "rotate",
          label: "Rotate Image",
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
          value: "memeCreator",
          label: "Meme Creator",
        },
        {
          value: "anime",
          label: "Anime Emoji Generator",
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
        },
        {
          value: "flop",
          label: "Flop (horizontal mirror)",
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
      placeholder:
        "Please upload a image(.jpg, .jpeg, .png, .gif, .tiff, .webp)",
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

const ImageResponse = (name, url, download, text, uName) => {
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
const pdfResultResponse = (name, url, download, text, uName) => {
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
            label: "Download PDF",
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
const customWH = (text, uName) => {
  return {
    text: "# ImageToolKit",
    card: {
      theme: "modern-inline",
    },
    slides: [
      {
        type: "text",
        title: "Error",
        data: "Fill both custom Height and width\n\n*Convert Next :*",
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
  customWH,
  memeResponse,
  memeCreatorResponse,
  unsupportedResponse,
};
