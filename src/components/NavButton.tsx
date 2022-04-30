import styled, { css } from 'styled-components';

interface propTypes {
  top?: boolean;
  left?: boolean;
  bottom?: boolean;
  right?: boolean;
  mixed?: boolean;
  color?: string;
  children?: React.ReactNode;
}

const NavButton = ({
  top,
  left,
  bottom,
  right,
  mixed,
  color = 'main',
  children,
}: propTypes) => {
  return (
    <NavBtn
      color={color}
      top={top}
      bottom={bottom}
      right={right}
      left={left}
      mixed={mixed}
      type="button"
    >
      {children}
    </NavBtn>
  );
};

const NavBtn = styled.button<{
  top?: boolean;
  left?: boolean;
  bottom?: boolean;
  right?: boolean;
  mixed?: boolean;
}>`
  ${({ theme }) => theme.flexColumnSet()};
  padding: 2rem 2.4rem;
  z-index: 99;
  color: ${({ theme }) => theme.colors.main};
  font-size: 4vw;
  font-weight: 500;
  position: fixed;

  ${({ mixed }) =>
    mixed &&
    css`
      mix-blend-mode: difference;
    `};
  ${({ top }) =>
    top &&
    css`
      top: 0;
    `};
  ${({ bottom }) =>
    bottom &&
    css`
      bottom: 0;
    `};
  ${({ left }) =>
    left &&
    css`
      left: 0;
    `};
  ${({ right }) =>
    right &&
    css`
      right: 0;
    `};

  @media (min-width: 1000px) {
    font-size: 2rem;
  }

  & > span {
    transform: rotate(90deg);
    animation: motion 1s linear 0s infinite alternate;
  }

  @keyframes motion {
    0% {
      margin-bottom: 0px;
    }
    100% {
      margin-bottom: 10px;
    }
  }
`;

export default NavButton;
