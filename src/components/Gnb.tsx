import { useRecoilValue } from 'recoil';
import { pageState } from '../recoil/atoms';
import NavButton from './GnbButton';
import { GnbLink } from './GnbLink';
import { Pagination } from './Pagination';
import Resume from '../assets/frontend_sunkyung.pdf';

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
      <GnbLink left={30} href="mailto:cellin1637@gmail.com">
        Email
      </GnbLink>
      <GnbLink left={50} href={Resume} fileName="주니어 프론트엔드_노선경.pdf">
        Resume
      </GnbLink>
    </nav>
  );
};

export default Gnb;
