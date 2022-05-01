import { useRef } from 'react';
import styled from 'styled-components';
import Banner from '../../components/Banner';
import BottomLinks from '../../components/ContactMenu';
import Dashboard from '../../components/Dashboard';
import NavButton from '../../components/NavButton';

const Main = () => {
  const totalPages = useRef(3);

  return (
    <Wrapper>
      <NavButton top left mixed value="smile">
        : )
      </NavButton>
      <NavButton top right mixed>
        Projects
      </NavButton>
      <NavButton bottom left mixed>
        About
      </NavButton>
      <NavButton bottom right>
        Scroll <span>&gt;</span>
      </NavButton>
      <BottomLinks />
      <Banner />
      <Dashboard index={1 / totalPages.current} />
      <Dashboard index={2 / totalPages.current} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ theme }) => theme.flexColumnSet()}
`;

export default Main;
