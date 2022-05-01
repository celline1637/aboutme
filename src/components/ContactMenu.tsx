import styled, { css } from 'styled-components';
import MyPDF from '../assets/frontend_sunkyung.pdf';

interface propTypes {
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
}

const BottomLinks = ({ top, left, bottom, right }: propTypes) => {
  return (
    <>
      <NavBtn left={30} href="mailto:cellin1637@gmail.com">
        Email
      </NavBtn>
      <NavBtn left={50} href={MyPDF} download="주니어 프론트엔드_노선경.pdf">
        Resume
      </NavBtn>
    </>
  );
};

const NavBtn = styled.a<{
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
}>`
  ${({ theme }) => theme.flexColumnSet()};
  margin: 1rem;
  padding: 2rem 2.4rem;
  color: ${({ theme }) => theme.colors.main};
  font-size: 4vw;
  font-weight: 500;
  mix-blend-mode: difference;
  position: fixed;
  bottom: 0;
  border-radius: 50%;

  ${({ left }) =>
    left &&
    css`
      left: ${left}%;
    `};
  z-index: 99;

  @media (min-width: 1000px) {
    font-size: 2rem;
  }

  &:hover {
    border: 0.4rem solid ${({ theme }) => theme.colors.main};
    border-radius: 50%;
    transition: all 0.4s ease;
  }

  &:active {
    border: 0.4rem solid ${({ theme }) => theme.colors.main};
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.bgc};
    background-color: ${({ theme }) => theme.colors.main};
    transition: all 0.4s ease;
  }
`;

export default BottomLinks;
