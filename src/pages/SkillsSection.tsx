import React, { useEffect, useState } from 'react';
import ScrollFullPage from '../components/ScrollFullPage';
import styled from 'styled-components';
import { pageState } from '../recoil/atoms';
import { useRecoilValue } from 'recoil';

export const SkillsSection = () => {
  const page = useRecoilValue(pageState);
  const [action, setAction] = useState<string>();

  const skills = [
    'Communication',
    'Flutter',
    'React',
    'Animation',
    'UX/UI',
    'CSS',
    'HTML',
    'Dart',
    'TypeScripts',
    'CI/CD',
    'StateManagements',
    'Git',
    'Data Visualization',
    'Communication',
    'Flutter',
    'React',
    'Animation',
    'UX/UI',
    'CSS',
    'HTML',
    'Dart',
    'TypeScripts',
    'CI/CD',
    'StateManagements',
    'Git',
    'Data Visualization',
  ];

  const setAnimation = (action: string) => {
    setTimeout(() => {
      setAction(action);
    }, 100);
  };

  useEffect(() => {
    page.current === 2 ? setAnimation('fadein') : setAnimation('fadeout');
  }, [page.current]);

  return (
    <ScrollFullPage page={2} bgc="main" title="skills">
      {page.current === 2 && (
        <Scroll animation={action}>
          {skills.map(el => (
            <Text>{el}</Text>
          ))}
        </Scroll>
      )}
    </ScrollFullPage>
  );
};

const Text = styled.div`
  line-height: 1.3;
  font-size: 4vw;
  mix-blend-mode: difference;
  color: ${({ theme }) => theme.colors.main};
  font-family: 'BIZ UDPMincho', serif;
`;

const Scroll = styled.div<{ animation?: string }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  mix-blend-mode: difference;
  padding: 0.4rem;
  width: fit-content;
  height: 100vh;
  background-color: #fff;

  /* animation: ${({ animation }) => animation} 1.3s; */
  opacity: ${({ animation }) => animation === 'fadeout' && 0};

  @keyframes fadein {
    0% {
      transform: translate(0, -1000%);
      opacity: 0;
    }
    100% {
      transform: translate(0, 0%);
      opacity: 1;
    }
  }

  @keyframes fadeout {
    0% {
      transform: translate(-50%, 0%);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -1000%);
      opacity: 0;
    }
  }
`;
