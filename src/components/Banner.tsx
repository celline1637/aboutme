import React from 'react';
import styled from 'styled-components';
import ScrollFullPage from './ScrollFullPage';
import TypingWord from './TypingWord';

const Banner = () => {
  return (
    <ScrollFullPage scrollTop={0}>
      <Wrapper>
        <TextWrapper>
          <Line>Hi!</Line>
          <Line>I am Sunkyung,</Line>
          <Line>
            {/* <TypingWord textList={['front', 'flutter']} /> */}
            front-end developer.
          </Line>
        </TextWrapper>
      </Wrapper>
    </ScrollFullPage>
  );
};
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bgc};
  font-family: 'Vollkorn', serif;
  font-size: 5.8vw;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.main};
`;

const TextWrapper = styled.div`
  width: 100%;
  height: 100%;
  ${({ theme }) => theme.flexColumnSet()}
  padding : 10vw;

  @media (min-width: 750px) {
    font-size: 7vw;
    align-items: flex-start;
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
