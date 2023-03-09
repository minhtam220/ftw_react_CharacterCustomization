import React from "react";
import "./App.css";
import Avatar from "./components/Avatar";
import { useState, useEffect } from "react";

function App() {
  const bodyURL = "images/character/";
  const clothesURL = "images/character/clothes/";
  const accessoriesURL = "images/character/accessories/";
  const extension = ".png";

  const bodyLength = 17;
  const eyesLength = 24;
  const hairLength = 73;
  const mouthsLength = 24;
  const eyebrowsLength = 15;
  const clothes1Length = 5;
  const clothes2Length = 5;
  const clothes3Length = 9;
  const earringsLength = 32;
  const glassesLength = 17;
  const hatsLength = 28;
  const neckwearLength = 17;

  const returnPartURL = (part, index) => {
    if (
      part === "body" ||
      part === "eyes" ||
      part === "hair" ||
      part === "mouths" ||
      part === "noses" ||
      part === "eyebrows"
    ) {
      return bodyURL + part + "/" + index + extension;
    } else if (part === "clothes1") {
      return clothesURL + "layer_1" + "/" + index + extension;
    } else if (part === "clothes2") {
      return clothesURL + "layer_2" + "/" + index + extension;
    } else if (part === "clothes3") {
      return clothesURL + "layer_3" + "/" + index + extension;
    } else if (
      part === "earrings" ||
      part === "glasses" ||
      part === "hats" ||
      part === "neckwear"
    ) {
      return accessoriesURL + part + "/" + index + extension;
    }
  };

  let [selectedParts, setSelectedParts] = useState({
    body: 1,
    eyes: 1,
    hair: 1,
    mouths: 1,
    noses: 1,
    eyebrows: 1,
    clothes1: 1,
    clothes2: 4,
    clothes3: 6,
    earrings: 1,
    glasses: 1,
    hats: 1,
    neckwear: 1,
  });

  const handleRandomize = () => {
    setSelectedParts({
      body: Math.floor(Math.random() * bodyLength),
      eyes: Math.floor(Math.random() * eyesLength),
      hair: Math.floor(Math.random() * hairLength),
      mouths: Math.floor(Math.random() * mouthsLength),
      noses: 1,
      eyebrows: Math.floor(Math.random() * eyebrowsLength),
      clothes1: Math.floor(Math.random() * clothes1Length),
      clothes2: Math.floor(Math.random() * clothes2Length),
      clothes3: Math.floor(Math.random() * clothes3Length),
      earrings: Math.floor(Math.random() * earringsLength),
      glasses: Math.floor(Math.random() * glassesLength),
      hats: Math.floor(Math.random() * hatsLength),
      neckwear: Math.floor(Math.random() * neckwearLength),
    });
  };

  return (
    <div className="App">
      <div className="title">CHARACTER</div>
      <div className="subtitle">🛠️CUSTOMIZATION🛠️</div>
      <div className="divider"></div>
      <div className="avatar-group gap-30">
        <div>
          <div className="avatar-wrapper">
            <Avatar
              selectedParts={selectedParts}
              returnPartURL={returnPartURL}
            ></Avatar>
            <div className="text-center">
              <button className="button" onClick={handleRandomize}>
                Randomize!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
