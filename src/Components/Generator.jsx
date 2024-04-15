import React, { useState } from "react";
import memeData from "./memeData";

function Generator() {
  // const [imgUrl, setimgUrl] = useState("./img2/memeImg.png");

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "./img2/memeImg.png",
  });

  function getImage() {
    const randomData = memeData;
    const index = Math.floor(Math.random() * memeData.length);

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: randomData[index].url,
    }));
  }

  function handleChange(event){
    const {name, value} = event.target;
    setMeme((prevMeme)=>({
      ...prevMeme, [name] : value
    }))
  }

  // https://jsonplaceholder.typicode.com

  return (
    <div className="meme-container">
      <div className="input-taker">
        <div className="input-top">
          <input
            name="topText"
            onChange={handleChange}
            id="top-text"
            type="text"
            placeholder="Top text"
          />
        </div>
        <div className="input-bottom">
          <input
            name="bottomText"
            onChange={handleChange}
            id="bottom-text"
            type="text"
            placeholder="Bottom text"
          />
        </div>
      </div>

      <button onClick={getImage} className="submit-button">
        Get a new meme image 🖼
      </button>

      <div className="display">
        <img src={meme.randomImage} alt="" />
        <h2 id="header" name="topText" className="top-text top">
          {meme.topText}
        </h2>
        <h2 id="header" name="bottomText" className="bottom-text bottom">
          {meme.bottomText}
        </h2>
      </div>
    </div>
  );
}

export default Generator;
