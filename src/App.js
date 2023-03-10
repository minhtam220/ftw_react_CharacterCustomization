import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Avatar from "./components/Avatar";
import Section from "./components/Section";
import { returnPartURL } from "./utils";

function App() {
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

  const handleClick = (part, index) => {
    console.log(part === "body" ? index : selectedParts.body);

    setSelectedParts({
      body: part === "body" ? index : selectedParts.body,
      eyes: part === "eyes" ? index : selectedParts.eyes,
      hair: part === "hair" ? index : selectedParts.hair,
      mouths: part === "mouths" ? index : selectedParts.mouths,
      noses: 1,
      eyebrows: part === "eyebrows" ? index : selectedParts.eyebrows,
      clothes1: part === "clothes1" ? index : selectedParts.clothes1,
      clothes2: part === "clothes2" ? index : selectedParts.clothes2,
      clothes3: part === "clothes3" ? index : selectedParts.clothes3,
      earrings: part === "earrings" ? index : selectedParts.earrings,
      glasses: part === "glasses" ? index : selectedParts.glasses,
      hats: part === "hats" ? index : selectedParts.hats,
      neckwear: part === "neckwear" ? index : selectedParts.neckwear,
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
        <div>
          <Section
            header={"Body"}
            part={"body"}
            length={bodyLength}
            handleClick={handleClick}
            returnPartURL={returnPartURL}
          ></Section>
          <Section
            header={"Eyes"}
            part={"eyes"}
            length={eyesLength}
            handleClick={handleClick}
            returnPartURL={returnPartURL}
          ></Section>
          <Section
            header={"Hair"}
            part={"hair"}
            length={hairLength}
            handleClick={handleClick}
            returnPartURL={returnPartURL}
          ></Section>
          <Section
            header={"Mouth"}
            part={"mouths"}
            length={mouthsLength}
            handleClick={handleClick}
            returnPartURL={returnPartURL}
          ></Section>
          <Section
            header={"Eyebrows"}
            part={"eyebrows"}
            length={eyebrowsLength}
            handleClick={handleClick}
            returnPartURL={returnPartURL}
          ></Section>
          <Section
            header={"Glasses"}
            part={"glasses"}
            length={glassesLength}
            handleClick={handleClick}
            returnPartURL={returnPartURL}
          ></Section>
          <Section
            header={"Clothes 1"}
            part={"clothes1"}
            length={clothes1Length}
            handleClick={handleClick}
            returnPartURL={returnPartURL}
          ></Section>
          <Section
            header={"Clothes 2"}
            part={"clothes2"}
            length={clothes2Length}
            handleClick={handleClick}
            returnPartURL={returnPartURL}
          ></Section>
          <Section
            header={"Clothes 3"}
            part={"clothes3"}
            length={clothes3Length}
            handleClick={handleClick}
            returnPartURL={returnPartURL}
          ></Section>
        </div>
      </div>
    </div>
  );
}

export default App;
