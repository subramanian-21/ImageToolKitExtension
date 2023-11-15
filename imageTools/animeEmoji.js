const animeEmoji = async (emotion) => {
  const resp = await fetch(
    `https://anime-reactions.uzairashraf.dev/api/reactions?category=${emotion}`
  );
  const data = await resp.json();
  const randomIndex = Math.floor(Math.random() * data.length);
  return {
    slides: [
      {
        type: "images",
        title: emotion,
        data: [data[randomIndex]],
      },
    ],
    text: "# ImageToolKit",
  };
};
module.exports = animeEmoji;
