const memeGenerator = async () => {
  try {
    const dankMemes = await fetch("https://www.reddit.com/r/dankmemes.json")
      .then((res) => res.json())
      .then((res) => res?.data?.children);
    const memes = await fetch("https://www.reddit.com/r/dankmemes.json")
      .then((res) => res.json())
      .then((res) => res?.data?.children);

    const randomNumber = Math.floor(Math.random() * 25);
    const randomCat = Math.floor(Math.random() * 2);
    let meme;
  
    if (randomCat) {
      meme = dankMemes[randomNumber]?.data?.preview?.images[0]?.source?.url;
    } else {
      meme = memes[randomNumber]?.data?.preview?.images[0]?.source?.url;
    }
    return {
      card: { theme: "modern-inline" },
      slides: [
        {
          type: "images",
          title: "",
          data: [meme],
        },
      ],
      text: "ImageToolKit",
    };
  } catch (error) {
    console.log(error);
  }
};
module.exports = memeGenerator;
