import React from 'react';
import styled, { css } from 'styled-components';

interface propTypes {
  href: string;
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
  children?: React.ReactNode;
  props?: any;
  type?: string;
  fileName?: string;
}

export const GnbLink = ({
  href,
  top,
  left,
  bottom,
  right,
  children,
  fileName,
  ...props
}: propTypes) => {
  return (
    <NavBtn
      top={top}
      bottom={bottom}
      right={right}
      left={left}
      href={href}
      download={fileName}
      {...props}
    >
      {children}
    </NavBtn>
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
