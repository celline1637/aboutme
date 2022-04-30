import styled from 'styled-components';
import ScrollFullPage from './ScrollFullPage';

interface propTypes {
  index: number;
  color?: string;
}

const Dashboard = ({ index, color = 'main' }: propTypes) => {
  return (
    <ScrollFullPage scrollTop={index}>
      <Wrapper color={color}></Wrapper>
    </ScrollFullPage>
  );
};

const Wrapper = styled.div<{ color: string }>`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme, color }) => theme.colors[color]};
`;

export default Dashboard;
