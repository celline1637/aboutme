import { useRecoilValue } from 'recoil';
import { pageState } from '../recoil/atoms';
import BottomLinks from './ContactMenu';
import NavButton from './NavButton';
import { Pagination } from './Pagination';

const NavMenu = () => {
  const currentPage = useRecoilValue(pageState);
  const goToBanner = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
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
      <BottomLinks />
    </>
  );
};

export default NavMenu;
