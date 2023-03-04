import React, { useState } from "react";
import { CategoryBtn, CategoryWrap } from "./styles";
import BoothCard from "./BoothCard";
import { BoothCardContainer } from "./styles";

const CategoryFilter = ({ onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("전체");

  // 카테고리 
  const categories = [
    "전체",
    "IT",
    "문화·예술·공연",
    "봉사·사회활동",
    "학술·교양",
    "창업·취업",
    "어학",
    "체육",
    "친목",
  ];

  // 카드데이터
  const [cardsData, setCardsData] = useState([
    {
      id: 1,
      title: '멋쟁이사자처럼',
      introduction: '#코딩 #창업',
      type:1,
      likeCnt: 100,
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
    {
      id: 2,
      title: 'AJAX',
      introduction: '#힙합 #공연',
      type:1,
      likeCnt: 100,
      images: [
        {
      id: 1,
          originFileName: '멋사.jpg',
          serverFileName: '6fb151081add763ec08da678a9578eff',
          storedFilePath: 'https://han.gl/pYMEv',
        },
      ],
      category:"문화·예술·공연"
    },
  ]);

  // 카드보이게
  const visibleCards = selectedCategory === '전체'
    ? cardsData
    : cardsData.filter(card => card.category === selectedCategory);
  
    
  
const handleClick = (category) => {
    if (selectedCategory === category) {
    } else {
      setSelectedCategory(category);
      onCategoryChange(category);
    }
  };

  return (
    <>
    <CategoryWrap>
      {categories.map((category, index) => (
        <CategoryBtn
          key={category}
          onClick={() => handleClick(category)}
          active={selectedCategory === category}
        >
          {category}
        </CategoryBtn>
      ))}
    </CategoryWrap>
    <BoothCardContainer>
    {visibleCards.map((boo)=>{
      return(
        <BoothCard
          key = {boo.id}
          boothId = {boo.id}
          title = {boo.title}
          boothImage = {boo.images[0]}
          intro = {boo.introduction}
          likeCnt = {boo.likeCnt}
        />
      )
    })}
  </BoothCardContainer>
    </>
  );
};

export default CategoryFilter;
