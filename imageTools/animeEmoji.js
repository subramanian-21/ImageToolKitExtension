const animeEmoji = async (emotion) => {
  try {
    const resp = await fetch(
      `https://anime-reactions.uzairashraf.dev/api/reactions?category=${emotion}`
    );
    const data = await resp.json();
    const randomIndex = Math.floor(Math.random() * data.length);
    return {
      card: { theme: "modern-inline" },
      slides: [
        {
          type: "images",
          title: "",
          data: [data[randomIndex]],
        },
      ],
      text: "ImageToolKit",
    };
    
  } catch (error) {
    console.log(error)
  }
  
};
module.exports = animeEmoji;
