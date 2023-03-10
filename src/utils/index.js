export const returnPartURL = (part, index) => {
  const bodyURL = `images/character/`;
  const clothesURL = "images/character/clothes/";
  const accessoriesURL = "images/character/accessories/";
  const extension = ".png";

  if (
    part === "body" ||
    part === "eyes" ||
    part === "hair" ||
    part === "mouths" ||
    part === "noses" ||
    part === "eyebrows"
  ) {
    // eslint-disable-next-line
    return bodyURL + part + "/" + index.toString() + extension;
  } else if (part === "clothes1") {
    // eslint-disable-next-line
    return clothesURL + "layer_1" + "/" + index.toString() + extension;
  } else if (part === "clothes2") {
    // eslint-disable-next-line
    return clothesURL + "layer_2" + "/" + index.toString() + extension;
  } else if (part === "clothes3") {
    // eslint-disable-next-line
    return clothesURL + "layer_3" + "/" + index.toString() + extension;
  } else if (
    part === "earrings" ||
    part === "glasses" ||
    part === "hats" ||
    part === "neckwear"
  ) {
    // eslint-disable-next-line
    return accessoriesURL + part + "/" + index.toString() + extension;
  }
};
