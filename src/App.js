import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Avatar from "./components/Avatar";
import Section from "./components/Section";
import { returnPartURL } from "./utils";

function App() {
  const lengths = {
    body: 17,
    eyes: 24,
    hair: 73,
    mouths: 24,
    noses: 1,
    eyebrows: 15,
    clothes1: 5,
    clothes2: 5,
    clothes3: 9,
    earrings: 32,
    glasses: 17,
    hats: 28,
    neckwear: 17,
  };

  const [selectedParts, setSelectedParts] = useState({
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
    const random = Object.keys(lengths).reduce(
      (acc, cur) => ({
        ...acc,
        [cur]: Math.floor(Math.random() * lengths[cur]),
      }),
      {}
    );

    setSelectedParts(random);
  };

  const handleClick = (part, index) => {
    setSelectedParts({ ...selectedParts, [part]: index });
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
          {Object.keys(lengths).map((item) => (
            <Section
              key={item}
              header={item}
              part={item}
              length={lengths[item]}
              handleClick={handleClick}
              returnPartURL={returnPartURL}
            ></Section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
