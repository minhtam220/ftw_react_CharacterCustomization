import React from "react";

function Avatar({ selectedParts, returnPartURL }) {
  return (
    <div className="avatar">
      <img
        src={returnPartURL("body", selectedParts.body)}
        alt={""}
        width={260}
        style={{
          zIndex: "0",
          position: "absolute",
          left: "0px",
          top: "0px",
        }}
      />
      <img
        src={returnPartURL("eyes", selectedParts.eyes)}
        alt={""}
        width={260}
        style={{
          zIndex: "1",
          position: "absolute",
          left: "0px",
          top: "0px",
        }}
      />
      <img
        src={returnPartURL("hair", selectedParts.hair)}
        alt={""}
        width={260}
        style={{
          zIndex: "6",
          position: "absolute",
          left: "0px",
          top: "0px",
        }}
      />
      <img
        src={returnPartURL("clothes1", selectedParts.clothes1)}
        alt={""}
        width={260}
        style={{
          zIndex: "2",
          position: "absolute",
          left: "0px",
          top: "0px",
        }}
      />
      <img
        src={returnPartURL("clothes2", selectedParts.clothes2)}
        alt={""}
        width={260}
        style={{
          zIndex: "3",
          position: "absolute",
          left: "0px",
          top: "0px",
        }}
      />
      <img
        src={returnPartURL("clothes3", selectedParts.clothes3)}
        alt={""}
        width={260}
        style={{
          zIndex: "4",
          position: "absolute",
          left: "0px",
          top: "0px",
        }}
      />
      <img
        src={returnPartURL("mouths", selectedParts.mouths)}
        alt={""}
        width={260}
        style={{
          zIndex: "4",
          position: "absolute",
          left: "0px",
          top: "0px",
        }}
      />
      <img
        src={returnPartURL("noses", selectedParts.noses)}
        alt={""}
        width={260}
        style={{
          zIndex: "4",
          position: "absolute",
          left: "0px",
          top: "0px",
        }}
      />
      <img
        src={returnPartURL("eyebrows", selectedParts.eyebrows)}
        alt={""}
        width={260}
        style={{
          zIndex: "4",
          position: "absolute",
          left: "0px",
          top: "0px",
        }}
      />
      <img
        src={returnPartURL("earrings", selectedParts.earrings)}
        alt={""}
        width={260}
        style={{
          zIndex: "5",
          position: "absolute",
          left: "0px",
          top: "0px",
        }}
      />
      <img
        src={returnPartURL("glasses", selectedParts.glasses)}
        alt={""}
        width={260}
        style={{
          zIndex: "5",
          position: "absolute",
          left: "0px",
          top: "0px",
        }}
      />
      <img
        src={returnPartURL("hats", selectedParts.hats)}
        alt={""}
        width={260}
        style={{
          zIndex: "5",
          position: "absolute",
          left: "0px",
          top: "0px",
        }}
      />
      <img
        src={returnPartURL("neckwear", selectedParts.neckwear)}
        alt={""}
        width={260}
        style={{
          zIndex: "5",
          position: "absolute",
          left: "0px",
          top: "0px",
        }}
      />
    </div>
  );
}

export default Avatar;
