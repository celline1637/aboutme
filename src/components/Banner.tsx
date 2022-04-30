import React from 'react';
import styled from 'styled-components';
import ScrollFullPage from './ScrollFullPage';

const Banner = () => {
  return (
    <ScrollFullPage scrollTop={0}>
      <Wrapper>
        <Line>Hi!</Line>
        <Line>I am Sunkyung,</Line>
        <Line>front-end developer.</Line>
      </Wrapper>
    </ScrollFullPage>
  );
};
const Wrapper = styled.div`
  ${({ theme }) => theme.flexColumnSet()}
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bgc};
  font-family: 'Vollkorn', serif;
  font-size: 5.36232vw;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.main};

  @media (max-width: 1000px) {
    font-size: 9.04762vw;
  }
`;

const Line = styled.p`
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }

  position: relative;
  animation: fadeInUp 1s;
`;

export default Banner;
