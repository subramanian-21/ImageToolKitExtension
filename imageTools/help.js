const help = () => {
  const response = {
    text: "# Help",
    slides: [
      {
        type: "text",
        title: "# imageToolKit",
        data: 'ImageToolkit is a Cliq extension that provides various image operations, including image format conversion, dynamic image compression, and grayscale conversion.\n\n## Getting Started\n\n1. *Installation:*\n   - Install the extension in your Cliq Marketplace.\n\n2. *Accessing the Extension:*\n   - Search for ImageToolkitBot\n\n## Usage\n\n1. *Choose an Operation:*\n   - Click on "ImageOperations" in the extension popup.\n   - Choose the desired image operation, such as image converter, compressor, etc.\n\n2. *Upload and Convert:*\n   - Upload the image you want to process.\n   - Provide any necessary details for the conversion.\n   - Submit the form.\n\n3. *View Rendered Image:*\n   - The response URL is provided. Open it to view the rendered image in a new tab.\n\n4. *Save Rendered Image:*\n   - In the new tab, right-click on the rendered image.\n   - Select "Save Image As..." to save the processed image to your device.',
      },
    ],
  };
  return response;
};
module.exports = help;
