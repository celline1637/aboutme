import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import useIntersectionObserver from '../hook/useIntersectionObserver';
import { pageState, typingAnimationState } from '../recoil/atoms';

interface propTypes {
  page: number;
  bgc?: string;
  title: string;
  children?: React.ReactNode;
}

const ScrollFullPage = ({ page, bgc = 'bgc', title, children }: propTypes) => {
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
  return (
    <Wrapper ref={setTarget} bgc={bgc}>
      <h2 aria-label={`page about ${title}`}>{title}</h2>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.article<{ bgc: string }>`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme, bgc }) => theme.colors[bgc]};

  h2 {
    display: none;
  }
`;

export default ScrollFullPage;
