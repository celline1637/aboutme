import { useRecoilValue } from 'recoil';
import { pageState } from '../recoil/atoms';
import NavButton from './GnbButton';
import { GnbLink } from './GnbLink';
import { Pagination } from './Pagination';
import Resume from '../assets/frontend_sunkyung.pdf';
import styled from 'styled-components/macro';

const Gnb = () => {
  const currentPage = useRecoilValue(pageState);
  const goToBanner = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav>
      <NavButton top left mixed value="smile" onClick={goToBanner}>
        : )
      </NavButton>
      <NavButton x={30} top right mixed>
        Skills
      </NavButton>
      <NavButton top right mixed>
        Projects
      </NavButton>
      <NavButton bottom left mixed>
        About
      </NavButton>
      {currentPage.current === 1 ? (
        <NavButton
          bottom
          right
          onClick={() => {
            window.scrollTo({
              top: document.body.scrollHeight * (1 / 3),
              behavior: 'smooth',
            });
          }}
        >
          Scroll <span>&gt;</span>
        </NavButton>
      ) : (
        <Pagination />
      )}
      <GnbLink left={25} href="mailto:cellin1637@gmail.com">
        Email
      </GnbLink>
      <GnbLink left={40} href={Resume} fileName="주니어 프론트엔드_노선경.pdf">
        Resume
      </GnbLink>
    </nav>
  );
};

const Skill = styled(NavButton)<{ x: number }>`
  left: ${({ x }) => `${x}%`};
`;

export default Gnb;
