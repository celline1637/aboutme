import React from 'react';
import { darken } from 'polished';
import styled, { css } from 'styled-components/macro';

interface propsType {
  children?: React.ReactNode;
  color?: string;
  fontWeight?: string;
  fullWidth?: boolean;
  outline?: boolean;
  onClick?: React.MouseEventHandler;
  onBlur?: React.FocusEvent<HTMLInputElement> | undefined;
  value?: string;
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button' | undefined;
}

function Button({
  children,
  color = 'white',
  type,
  fontWeight = '700',
  fullWidth = false,
  outline = false,
  disabled = false,
  onBlur,
  value,
  ...rest
}: propsType) {
  return (
    <StyledButton
      value={value}
      type={type}
      color={color}
      outline={outline}
      fullWidth={fullWidth}
      fontWeight={fontWeight}
      disabled={disabled}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}

const colorStyles = css<{ color: string; outline: boolean }>`
  ${({ theme, color, outline }) => {
    const selected = theme.colors[color];
    return outline
      ? css`
          color: ${selected};
          background: white;
          border: 1px solid ${selected};
          &:hover {
            background: ${selected};
            color: white;
          }
        `
      : css`
          border: none;
          background: ${selected};
          color: ${selected === '#FFF' ? 'black' : 'white'};
          &:not(:disabled):hover {
            background: ${darken(0.1, selected)};
          }
          &:not(:disabled):active {
            background: ${darken(0.1, selected)};
          }
        `;
  }}
`;

const fontWeightStyles = css<{ fontWeight: string }>`
  ${({ fontWeight }) => {
    const selected = fontWeight;
    return css`
      font-weight: ${selected};
    `;
  }}
`;

const fullWidthStyle = css<{ fullWidth: boolean }>`
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
      justify-content: center;
    `}
`;

const StyledButton = styled.button<{
  color: string;
  fontWeight: string;
  fullWidth: boolean;
  outline: boolean;
}>`
  ${({ theme }) => theme.flexSet()};
  padding: 0.6rem 1rem;
  outline: none;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 4px;
  color: black;
  -webkit-tap-highlight-color: transparent;
  font-size: 1rem;
  &:disabled {
    cursor: not-allowed !important;
  }

  ${colorStyles}
  ${fontWeightStyles}
  ${fullWidthStyle}
`;

export default Button;
