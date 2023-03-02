import styled from "styled-components";
import React, { useEffect } from "react";
import threeMain from "../components/main";

const Container = styled.canvas`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
`;

function Main() {
  useEffect(() => {
    threeMain();
  });
  return <Container id="three-canvas"></Container>;
}
export default Main;
