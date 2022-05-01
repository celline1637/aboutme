import { useRecoilValue } from 'recoil';
import { pageState } from '../recoil/atoms';
import GnbButton from './GnbButton';
import { GnbLink } from './GnbLink';
import { Pagination } from './Pagination';
import Resume from '../assets/frontend_sunkyung.pdf';

const Gnb = () => {
  const currentPage = useRecoilValue(pageState);

  const goToBanner = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToTargetScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
    const page = e.currentTarget.value;
    window.scrollTo({
      top: document.body.scrollHeight * ((parseInt(page) - 1) / 4),
      // behavior: 'smooth',
    });
  };

  return (
    <nav>
      <GnbButton top left mixed value="smile" onClick={goToBanner}>
        : )
      </GnbButton>
      <GnbButton
        x={30}
        top
        right
        mixed
        value="2"
        onClick={goToTargetScroll}
        isActive={currentPage.current === 2}
      >
        Skills
      </GnbButton>
      <GnbButton
        top
        right
        mixed
        value="3"
        onClick={goToTargetScroll}
        isActive={currentPage.current === 3}
      >
        History
      </GnbButton>
      <GnbButton
        bottom
        left
        mixed
        value="4"
        onClick={goToTargetScroll}
        isActive={currentPage.current === 4}
      >
        About
      </GnbButton>
      {currentPage.current === 1 ? (
        <GnbButton
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
        </GnbButton>
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

export default Gnb;
