const meme = async (text,bool) => {
  const response = await fetch(
    `https://api.memegen.link/images/custom?filter=${text}&safe=${bool}`
  );
  const data = await response.json();
  const out = data.map((k) => k.url);
   if(out.length === 0){
    return {
        slides: [
          { type: "text", title: "Oops Nothing Found", data:  text},
         
        ],
        text: "# ImageToolKit",
      };
   } 
  return {
    slides: [
      { type: "text", title: "Your Search Result...", data:  text},
      {
        type: "images",
        title: "",
        data: out,
      },
    ],
    text: "# ImageToolKit",
  };
};
module.exports = meme;
