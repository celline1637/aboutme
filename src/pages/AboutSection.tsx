import React from 'react';
import styled from 'styled-components';
import ScrollFullPage from '../components/ScrollFullPage';

export const AboutSection = () => {
  return (
    <ScrollFullPage page={4} bgc="main" title="about">
      <Line>준비 중입니다!</Line>
    </ScrollFullPage>
  );
};

const Line = styled.p`
  ${({ theme }) => theme.posCenter()};
  font-size: 6.6vw;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.bgc};

  @media (min-width: 750px) {
    font-size: 7vw;
    align-items: flex-start;
  }
`;
