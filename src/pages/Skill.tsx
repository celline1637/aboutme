import { useState } from 'react';
import styled, { css } from 'styled-components';
import { Modal } from '../components/Modal';
import { Skill } from '../interfaces/Interfaces';
import ModalPortal from '../ModalPortal';

interface propTypes {
  color: string;
  isActive?: boolean;
  info: Skill;
}

export const SkillCard = ({ color, isActive, info }: propTypes) => {
  const [isModalShow, setIsModalShow] = useState<boolean>(false);

  const handleModal = () => {
    setIsModalShow(prev => !prev);
  };

  return (
    <>
      <Text color={color} isActive={isActive} onClick={handleModal}>
        {info.title}
      </Text>
      {isModalShow && (
        <ModalPortal>
          <Modal handleModal={handleModal} color={color}>
            {info.description.map(el => (
              <div key={el}>{el}</div>
            ))}
          </Modal>
        </ModalPortal>
      )}
    </>
  );
};

const Text = styled.div<{ isActive?: boolean; color: string }>`
  line-height: 1.3;
  font-size: 5vw;
  color: ${({ theme }) => theme.colors.bgc};
  font-family: 'BIZ UDPMincho', serif;

  ${({ isActive, color }) =>
    isActive &&
    css`
      margin: 0.2rem;
      padding: 0.4rem 0.6rem;
      background-color: #${color};
    `};

  & + & {
    margin: 0.4rem;
  }

  @media (min-width: 1000px) {
    font-size: 3rem;
  }
`;
