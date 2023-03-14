export const returnPartURL = (part, index) => {
  const bodyURL = "images/character/";
  const clothesURL = "images/character/clothes/";
  const accessoriesURL = "images/character/accessories/";
  const extension = ".png";

  switch (part) {
    case "body":
    case "eyes":
    case "hair":
    case "mouths":
    case "noses":
    case "eyebrows":
    case "noses":
      return bodyURL + part + "/" + index.toString() + extension;
    case "clothes1":
      return clothesURL + "layer_1" + "/" + index.toString() + extension;
    case "clothes2":
      return clothesURL + "layer_2" + "/" + index.toString() + extension;
    case "clothes3":
      return clothesURL + "layer_3" + "/" + index.toString() + extension;
    case "earrings":
    case "glasses":
    case "hats":
    case "neckwear":
      return accessoriesURL + part + "/" + index.toString() + extension;
    default:
      break;
  }
};
