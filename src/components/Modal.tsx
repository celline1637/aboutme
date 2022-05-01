import React from 'react';
import styled from 'styled-components';

interface propTypes {
  children?: React.ReactNode;
  handleModal?: React.MouseEventHandler;
  color?: string;
}

export const Modal = ({ handleModal, children, color }: propTypes) => {
  return (
    <Dimmer onClick={handleModal}>
      <ModalWrapper color={color}>{children}</ModalWrapper>
    </Dimmer>
  );
};

const Dimmer = styled.div`
  ${({ theme }) => theme.flexSet()};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.74);
  z-index: 9999;
`;

const ModalWrapper = styled.div<{ color?: string }>`
  ${({ theme }) => theme.flexColumnSet()};
  width: 68vw;
  height: 68vw;
  padding: 1rem;
  border-radius: 100%;
  background-color: ${({ color }) => `#${color}`};
  font-size: 3.5vw;
  font-weight: 500;
  text-align: center;
  line-height: 1.2;

  @media (min-width: 1000px) {
    font-size: 3rem;
  }
`;
