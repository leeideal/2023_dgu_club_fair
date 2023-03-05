import { margin } from "@mui/system";
import React from "react";
import Card from "./styles";

const BoothCard = ({
    key,
    boothId,
    title,
    intro,
    image

}) => {
  const handleButtonClick = () => {
  };

  return (

    <>
    <Card
      boothId = {boothId}
      title={title}
      text={intro}
      image={image}
      onClick={handleButtonClick}
    />
    </>


    
  );
};

export default BoothCard;
