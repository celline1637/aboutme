import { useSetRecoilState } from 'recoil';
import useIntersectionObserver from '../hook/useIntersectionObserver';
import { pageState, typingAnimationState } from '../recoil/atoms';

interface propTypes {
  page: number;
  children?: React.ReactNode;
}

const ScrollFullPage = ({ page, children }: propTypes) => {
  const setTypingAnimation = useSetRecoilState(typingAnimationState);
  const setPage = useSetRecoilState(pageState);

  const observeElement = () => {
    window.scrollTo({
      top: document.body.scrollHeight * (page === 1 ? 0 : (page - 1) / 3),
      behavior: 'smooth',
    });
    setPage(prev => {
      return { ...prev, current: page };
    });
    setTypingAnimation(prev => !prev);
  };

  const onIntersect: IntersectionObserverCallback = async (
    [entry],
    observer
  ) => {
    if (entry.isIntersecting) {
      console.log(entry.target);
      observeElement();
      observer.observe(entry.target);
    }
  };

  const { setTarget } = useIntersectionObserver({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
    onIntersect,
  });
  return <div ref={setTarget}>{children}</div>;
};

export default ScrollFullPage;
