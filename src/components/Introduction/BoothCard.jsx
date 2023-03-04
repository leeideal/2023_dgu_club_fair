import { margin } from "@mui/system";
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

    <div style={{ display: "flex", flexWrap: "wrap" }}>
                <Card
      title={title}
      text={intro}
      image={boothImage}
      buttonText="Click me!"
      onClick={handleButtonClick}
    />

    <Card
      title={title}
      text={intro}
      buttonText="Click me!"
      onClick={handleButtonClick}
    />
            <Card
      title={title}
      text={intro}
      buttonText="Click me!"
      onClick={handleButtonClick}
    />
            <Card
      title={title}
      text={intro}
      buttonText="Click me!"
      onClick={handleButtonClick}
    />
            <Card
      title={title}
      text={intro}
      buttonText="Click me!"
      onClick={handleButtonClick}
    />
            <Card
      title={title}
      text={intro}
      buttonText="Click me!"
      onClick={handleButtonClick}
    />
                <Card
      title={title}
      text={intro}
      buttonText="Click me!"
      onClick={handleButtonClick}
    />
                <Card
      title={title}
      text={intro}
      buttonText="Click me!"
      onClick={handleButtonClick}
    />
    </div>

    
  );
};

export default BoothCard;
