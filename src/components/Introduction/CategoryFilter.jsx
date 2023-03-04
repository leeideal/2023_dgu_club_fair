import React, { useState } from "react";
import { CategoryBtn, CategoryWrap } from "./styles";

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
  );
};

export default CategoryFilter;
