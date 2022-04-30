import useIntersectionObserver from '../hook/useIntersectionObserver';

interface propTypes {
  scrollTop: number;
  children?: React.ReactNode;
}

const ScrollFullPage = ({ scrollTop, children }: propTypes) => {
  const onIntersect: IntersectionObserverCallback = async (
    [entry],
    observer
  ) => {
    if (entry.isIntersecting) {
      window.scrollTo({
        top: document.body.scrollHeight * scrollTop,
        behavior: 'smooth',
      });

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
