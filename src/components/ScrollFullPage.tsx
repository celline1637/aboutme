import { useSetRecoilState } from 'recoil';
import useIntersectionObserver from '../hook/useIntersectionObserver';
import { typingAnimationState } from '../recoil/atoms';

interface propTypes {
  scrollTop: number;
  children?: React.ReactNode;
}

const ScrollFullPage = ({ scrollTop, children }: propTypes) => {
  const setTypingAnimation = useSetRecoilState(typingAnimationState);

  const observeElement = () => {
    window.scrollTo({
      top: document.body.scrollHeight * scrollTop,
      behavior: 'smooth',
    });
    setTypingAnimation(prev => !prev);
  };
  const onIntersect: IntersectionObserverCallback = async (
    [entry],
    observer
  ) => {
    if (entry.isIntersecting) {
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
