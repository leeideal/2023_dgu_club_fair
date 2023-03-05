import React from 'react';
import styled from 'styled-components';
import boothMap0 from '../../assets/images/boothMap0.png';
import boothMap1 from '../../assets/images/boothMap1.png';
import boothMap2 from '../../assets/images/boothMap2.png';
import boothMap3 from '../../assets/images/boothMap3.png';
import boothMap4 from '../../assets/images/boothMap4.png';
import boothMap5 from '../../assets/images/boothMap5.png';
import boothMap6 from '../../assets/images/boothMap6.png';
import boothMap7 from '../../assets/images/boothMap7.png';

const ImageSection = styled.img`
  width: 100%;
`;

const MapCurrent = ({ idParams }) => {
  let mapSrc = idParams;
  if (mapSrc === 0) {
    mapSrc = boothMap0;
  } else if (mapSrc > 0 && mapSrc <= 14) {
    mapSrc = boothMap1;
  } else if (mapSrc > 14 && mapSrc <= 28) {
    mapSrc = boothMap2;
  } else if (mapSrc > 28 && mapSrc <= 42) {
    mapSrc = boothMap3;
  } else if (mapSrc > 42 && mapSrc <= 50) {
    mapSrc = boothMap4;
  } else if (
    (mapSrc > 50 && mapSrc <= 52) ||
    (mapSrc > 70 && mapSrc <= 72) ||
    (mapSrc > 62 && mapSrc <= 64)
  ) {
    mapSrc = boothMap5;
  } else if ((mapSrc > 52 && mapSrc <= 58) || (mapSrc > 64 && mapSrc <= 68)) {
    mapSrc = boothMap6;
  } else if ((mapSrc > 58 && mapSrc <= 62) || (mapSrc > 68 && mapSrc <= 70)) {
    mapSrc = boothMap7;
  }
  return (
    <>
      <ImageSection src={mapSrc} />
    </>
  );
};

export default MapCurrent;
