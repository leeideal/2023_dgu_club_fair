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
  };

  return (

    <>
    <Card
      title={title}
      text={intro}
      image={boothImage}
      onClick={handleButtonClick}
    />
    </>


    
  );
};

export default BoothCard;
