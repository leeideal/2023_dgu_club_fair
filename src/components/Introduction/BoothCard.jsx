import React from "react";
import Card from "./styles";

const BoothCard = ({
    key,
    boothId,
    title,
    intro,
    likeCnt,
    boothImage

}) => {
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  return (
    <Card
      title={title}
      text={intro}
      buttonText="Click me!"
      onClick={handleButtonClick}
    />
  );
};

export default BoothCard;
