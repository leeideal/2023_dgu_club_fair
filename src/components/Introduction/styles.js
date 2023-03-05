import { width } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import './style.css';

export const CategoryWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 20px 10px;
`;

export const CategoryBtn = styled.button`
  margin: 0 10px 10px 0;
  padding: 5px 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  color: ${(props) => (props.active ? '#603900' : '#D0AF91')};
  &:active {
    background-color: transparent;
    color: #603900;
  }
  font-weight: 600;
  padding-left: 0px;
  &:nth-child(-n + 8) {
    border-right: 1.3px solid #d0af91;
  }
`;

// 카드 컴포넌트
export const DetailContainer = styled.div`
  margin: 0px 400px;
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
  justify-content: center;

  @media (max-width: 1200px) {
    text-align: center;
    margin: 20px auto;
    margin: 0px 30px;
  }
`;

export const DeatailWrap = styled.div`
  margin: 0px 30px;
`;
// 카드 컴포넌트
export const BoothCardContainer = styled.div`
  margin: 0px 400px;
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
  justify-content: center;

  @media (max-width: 1200px) {
    text-align: center;
    margin: 20px auto;
    margin: 0px 0px;
  }
`;

const Container = styled.button`
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid #f8f0e4;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;

  justify-content: space-between;
  width: calc(25% - 30px);
  margin-right: 20px;
  margin-bottom: 15px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  &:last-child {
    margin-right: 0px;
  }

  @media (max-width: 1200px) {
    width: 40%;
    margin-right: 10px;
    margin-bottom: 20px;
    flex-direction: column;
  }
`;

const Title = styled.h2`
  font-size: 14px;
  margin-top: 0;
  margin-bottom: 10px;
  color: #513102;
`;

const Text = styled.p`
  font-size: 10px;
  line-height: 1.5;
  margin-top: 0;
  margin-bottom: 20px;
  color: #ccbbaa;
`;

const Image = styled.img`
  text-align: right;
  border-radius: 50%;
  width: 50%;
  @media (max-width: 1200px) {
    width: 40%;
  }
`;

const ImageWrap = styled.div`
  text-align: right;
`;
const Card = ({ title, text, boothId, image, onClick }) => {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/booth/${title}`);
  }

  return (
    <Container onClick={handleClick} className="fadeIn">
      <Title>{title}</Title>
      <Text>{text}</Text>
      <ImageWrap>
        <Image src={image}></Image>
      </ImageWrap>
    </Container>
  );
};
export const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #ffffffb7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoadingText = styled.div`
  font: 1rem 'Noto Sans KR';
  text-align: center;
`;

export default Card;
