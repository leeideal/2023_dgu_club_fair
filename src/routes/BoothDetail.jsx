import React, { useState } from "react";

const BoothDetail = ({ onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("전체");

  // 카드데이터
  const [cardsData, setCardsData] = useState([
    {
      id: 1,
      title: '멋쟁이사자처럼',
      introduction: '#코딩 #창업',
      images: [
        {
      id: 1,
          originFileName: '멋사.jpg',
          serverFileName: '6fb151081add763ec08da678a9578eff',
          storedFilePath: 'https://han.gl/pYMEv',
        },
      ],
      category:"IT"
    },
  ]);
  return(<>
  hi
  </>)
};

export default BoothDetail;
