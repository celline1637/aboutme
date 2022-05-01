import { useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { pageState } from '../recoil/atoms';

export const Pagination = () => {
  const currentPage = useRecoilValue(pageState);
  const ref = useRef<any>(null);

  useEffect(() => {
    var RADIUS = 54;
    var CIRCUMFERENCE = 2 * Math.PI * RADIUS;
    if (ref.current) {
      var bar = ref.current;
      var progress = currentPage.current / currentPage.total / 100;
      var dashoffset = CIRCUMFERENCE * (1 - progress);
      bar.style.strokeDashoffset = dashoffset.toString();
      bar.style.strokeDasharray = CIRCUMFERENCE.toString();
    }
  }, [currentPage]);

  return (
    <Wrapper>
      <span>
        {currentPage.current} / {currentPage.total}
      </span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 1rem;
  padding: 2rem 2.4rem;
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 99;
  mix-blend-mode: difference;
  border: 0.4rem solid ${({ theme }) => theme.bgc};
  color: ${({ theme }) => theme.colors.main};
  font-size: 4vw;
  font-weight: 500;
  border-radius: 50%;
  transition: all 0.4s ease;
  border-radius: 50%;
  animation: fadein 2s;
  -moz-animation: fadein 2s; /* Firefox */
  -webkit-animation: fadein 2s; /* Safari and Chrome */
  -o-animation: fadein 2s; /* Opera */

  @media (min-width: 1000px) {
    font-size: 2rem;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-moz-keyframes fadein {
    /* Firefox */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-webkit-keyframes fadein {
    /* Safari and Chrome */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @-o-keyframes fadein {
    /* Opera */
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
