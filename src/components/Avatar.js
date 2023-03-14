import React from "react";

function Avatar({ zIndices, selectedParts, returnPartURL }) {
  return (
    <div className="avatar">
      {Object.keys(selectedParts).map((item) => (
        <img
          key={item}
          src={returnPartURL(item, selectedParts[item])}
          alt={""}
          width={260}
          style={{
            zIndex: zIndices[item],
            position: "absolute",
            left: "0px",
            top: "0px",
          }}
        />
      ))}
    </div>
  );
}

export default Avatar;
