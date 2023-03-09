import React from "react";

export default function Square({ part, index, handleClick, returnPartURL }) {
  return (
    <div className="clickable square" onClick={() => handleClick(part, index)}>
      <img
        src={returnPartURL(part, index)}
        alt={""}
        height={60}
        className="img-center"
        style={{
          top: "50%",
        }}
      />
    </div>
  );
}
