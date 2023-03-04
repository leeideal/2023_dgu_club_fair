import styled from 'styled-components';

export const CategoryWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0px 10px;
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

export const BoothCardContainer = styled.div``;

const Container = styled.div`
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid #f8f0e4;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 24px;
  margin-top: 0;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-top: 0;
  margin-bottom: 20px;
`;

const Button = styled.button`
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  background-color: #212529;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #343a40;
  }
`;

const Card = ({ title, text, buttonText, onClick }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Text>{text}</Text>
      {buttonText && <Button onClick={onClick}>{buttonText}</Button>}
    </Container>
  );
};

export default Card;
