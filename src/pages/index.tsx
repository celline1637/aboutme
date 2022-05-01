import styled from 'styled-components/macro';
import IntroSection from './IntroSection';
import { Cursor } from '../components/Cursor';
import Gnb from '../components/Gnb';
import { SkillsSection } from './SkillsSection';
import { HistorySection } from './HIistorySection';
import { AboutSection } from './AboutSection';

const Main = () => {
  return (
    <>
      <Gnb />
      <Cursor />
      <Wrapper>
        <IntroSection />
        <SkillsSection />
        <HistorySection />
        <AboutSection />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.main`
  position: relative;
  ${({ theme }) => theme.flexColumnSet()}
`;

export default Main;
