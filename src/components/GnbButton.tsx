import styled, { css } from 'styled-components/macro';

interface propTypes {
  top?: boolean;
  left?: boolean;
  bottom?: boolean;
  right?: boolean;
  mixed?: boolean;
  color?: string;
  value?: string;
  onClick?: React.MouseEventHandler;
  children?: React.ReactNode;
}

const MenuButton = ({
  top,
  left,
  bottom,
  right,
  mixed,
  value,
  onClick,
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
      value={value}
      type="button"
      onClick={onClick}
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
  margin: 1rem;
  padding: 2rem 2.4rem;
  position: fixed;
  z-index: 99;
  color: ${({ theme }) => theme.colors.main};
  font-size: 4vw;
  font-weight: 500;
  border-radius: 50%;
  transition: all 0.4s ease;

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

  &:hover {
    border: 0.4rem solid ${({ theme }) => theme.colors.main};
    border-radius: 50%;
    transition: all 0.4s ease;
  }

  ${({ value }) =>
    value === 'smile' &&
    css`
      &:hover {
        transform: rotate(90deg);
      }
      &:active {
        &::after {
          content: '<';
          color: ${({ theme }) => theme.colors.bgc};
          position: absolute;
          transform: rotate(-90deg);
          top: 21.5%;
          left: 31.5%;
        }
      }
    `};
  &:active {
    border: 0.4rem solid ${({ theme }) => theme.colors.main};
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.bgc};
    background-color: ${({ theme }) => theme.colors.main};
    transition: all 0.4s ease;
  }
`;

export default MenuButton;
