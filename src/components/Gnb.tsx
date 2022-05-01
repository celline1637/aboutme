import { useRecoilState } from 'recoil';
import { pageState } from '../recoil/atoms';
import NavButton from './GnbButton';
import { GnbLink } from './GnbLink';
import { Pagination } from './Pagination';
import Resume from '../assets/frontend_sunkyung.pdf';
import React from 'react';

const Gnb = () => {
  const [currentPage, setCurrentPage] = useRecoilState(pageState);
  const goToBanner = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(prev => {
      return { ...prev, current: 1 };
    });
  };

  const goToTargetScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
    const page = e.currentTarget.value;
    setCurrentPage(prev => {
      return { ...prev, current: parseInt(page) };
    });
    window.scrollTo({
      top: document.body.scrollHeight * ((parseInt(page) - 1) / 4),
      // behavior: 'smooth',
    });
  };

  return (
    <nav>
      <NavButton top left mixed value="smile" onClick={goToBanner}>
        : )
      </NavButton>
      <NavButton
        x={30}
        top
        right
        mixed
        value="2"
        onClick={goToTargetScroll}
        isActive={currentPage.current === 2}
      >
        Skills
      </NavButton>

      <NavButton
        top
        right
        mixed
        value="3"
        onClick={goToTargetScroll}
        isActive={currentPage.current === 3}
      >
        History
      </NavButton>
      <NavButton
        bottom
        left
        mixed
        value="4"
        onClick={goToTargetScroll}
        isActive={currentPage.current === 4}
      >
        About
      </NavButton>
      {currentPage.current === 1 ? (
        <NavButton
          bottom
          right
          onClick={() => {
            window.scrollTo({
              top: document.body.scrollHeight * (1 / 4),
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

export default Gnb;
