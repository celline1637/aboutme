import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ScrollFullPage from '../components/ScrollFullPage';
import { SkillCard } from './Skill';
import skills from './Skills';

export const SkillsSection = () => {
  const [cat, setCat] = useState<string[]>([]);
  const [selected, setSelected] = useState<{ title: string; color: string }>();

  useEffect(() => {
    skills.map(el => {
      return setCat(prev => Array.from(new Set([...prev, ...el.category])));
    });
  }, []);

  const coloredCat = cat.map(el => {
    return {
      title: el,
      color: ['0', '0', '0', '0', '0', '0']
        .map(() => Math.random().toString(16)[2])
        .join(''),
    };
  });

  return (
    <ScrollFullPage page={2} bgc="main" title="skills">
      <Wrapper>
        <Cat>
          {coloredCat.map(el => (
            <Tag
              key={el.title}
              color={el.color}
              onMouseEnter={() => {
                console.log(el.title);
                setSelected({ ...el });
              }}
            >
              {el.title}
            </Tag>
          ))}
        </Cat>
        <Skills>
          {skills.map(el => (
            <SkillCard
              key={el.title}
              isActive={selected && el.category.includes(selected.title)}
              info={el}
              color={selected ? selected.color : '000'}
            />
          ))}
        </Skills>
      </Wrapper>
    </ScrollFullPage>
  );
};

const Wrapper = styled.div`
  ${({ theme }) => theme.posCenter()};
  ${({ theme }) => theme.flexColumnSet()};
  gap: 2vh;
`;

const Cat = styled.div`
  ${({ theme }) => theme.flexSet()};
  flex-wrap: wrap;
`;

const Tag = styled.div<{ color: string }>`
  ${({ theme }) => theme.flexSet()};
  position: relative;
  margin: 0.2rem;
  padding: 0.4rem 0.6rem;
  background-color: ${({ color }) => `#${color}`};
  color: white;
  font-size: 1.4rem;
`;

const Skills = styled.div`
  ${({ theme }) => theme.flexSet()};
  flex-wrap: wrap;
`;
