import React, { useState } from "react";
import { CategoryBtn, CategoryWrap } from "./styles";
import BoothCard from "./BoothCard";
import { BoothCardContainer } from "./styles";

const CategoryFilter = ({ onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("전체");

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
  ]);

  const visibleCards = selectedCategory === '전체'
    ? cardsData
    : cardsData.filter(card => card.category === selectedCategory);
  
    
  
const handleClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
      onCategoryChange(null);
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
          intro = {boo.introduction}
          likeCnt = {boo.likeCnt}
          boothImage = {boo.images[0]}
          type={boo.type}
        />
      )
    })}
  </BoothCardContainer>
    </>
  );
};

export default CategoryFilter;
