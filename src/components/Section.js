import React from "react";
import Square from "./Square";

export default function Section({
  header,
  part,
  length,
  handleClick,
  returnPartURL,
}) {
  const parts = [];
  let newPart;

  for (let i = 1; i < length + 1; i++) {
    newPart = { id: i, part: part };
    parts.push(newPart);
  }

  return (
    <div className="list-section">
      <h2>{header}</h2>
      <div className="list">
        {parts.map((part) => (
          <Square
            part={part.part}
            index={part.id}
            handleClick={handleClick}
            returnPartURL={returnPartURL}
          ></Square>
        ))}
      </div>
    </div>
  );
}
