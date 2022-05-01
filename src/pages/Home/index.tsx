import styled from 'styled-components/macro';
import Banner from '../../components/Banner';
import { Cursor } from '../../components/Cursor';
import Dashboard from '../../components/Dashboard';
import NavMenu from '../../components/NavMenu';

const Main = () => {
  return (
    <>
      <NavMenu />
      <Cursor />
      <Wrapper>
        <Banner />
        <Dashboard page={2} />
        <Dashboard page={3} color="bgc" />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  ${({ theme }) => theme.flexColumnSet()}
`;

export default Main;
