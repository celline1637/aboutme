import React, { useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { pageState } from '../recoil/atoms';

interface propTypes {
  percent: number;
  color?: string;
}

export const Pagination = ({ percent, color }: propTypes) => {
  const currentPage = useRecoilValue(pageState);
  const ref = useRef<SVGEllipseElement>(null);

  useEffect(() => {
    var RADIUS = 54;
    var CIRCUMFERENCE = 2 * Math.PI * RADIUS;
    if (ref.current) {
      var bar = ref.current;
      var progress = percent / 100;
      var dashoffset = CIRCUMFERENCE * (1 - progress);
      bar.style.strokeDashoffset = dashoffset.toString();
      bar.style.strokeDasharray = CIRCUMFERENCE.toString();
    }
  }, [percent]);

  return (
    <Wrapper percent={50}>
      <svg
        className="circle_progress"
        width="120"
        height="80"
        viewBox="0 0 120 120"
      >
        <ellipse
          className="frame"
          cx="80"
          cy="40"
          rx="50"
          ry="30"
          stroke-width="12"
        />
        <ellipse
          className="bar"
          ref={ref}
          cx="80"
          cy="40"
          rx="50"
          ry="30"
          stroke-width="12"
        />

        {/* <circle className="frame" cx="60" cy="60" r="54" stroke-width="12" /> */}
      </svg>

      <span>
        {currentPage.current} / {currentPage.total}
      </span>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ percent: number }>`
  margin: 1rem;
  padding: 2rem 2.4rem;
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 99;
  mix-blend-mode: difference;
  color: ${({ theme }) => theme.colors.main};
  font-size: 4vw;
  font-weight: 500;
  border-radius: 50%;
  transition: all 0.4s ease;
  /* border: 0.4rem solid ${({ theme }) => theme.colors.main}; */
  border-radius: 50%;

  @media (min-width: 1000px) {
    font-size: 2rem;
  }

  span {
    /* position: fixed;
    bottom: 0;
    right: 0; */
  }

  svg {
    /* z-index: -1;
    position: fixed;
    bottom: 0;
    right: 0; */

    /* transform: rotate(-90deg); */
    .circle_progress_wrap {
      position: relative;
      width: 120px;
      height: 80px;
    }
    .circle_progress {
      /* transform: rotate(-90deg); */
    }
    .frame,
    .bar {
      fill: none;
    }
    .frame {
      stroke: ${({ theme }) => theme.colors.bgc};
    }
    .bar {
      stroke: ${({ theme }) => theme.colors.main};
      stroke-linecap: round;
    }
  }

  .percent {
    stroke-dasharray: 100;
    stroke-dashoffset: calc(100 - 60);
  }
`;
