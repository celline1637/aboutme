import React, { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { pageState } from '../recoil/atoms';

export const Cursor = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const page = useRecoilValue(pageState);

  const checkDevice = () => {
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    if (window.innerWidth > 750)
      isMobile ? setIsMobile(true) : setIsMobile(false);
  };

  const setCursorLocation = (target: HTMLDivElement) => {
    document.addEventListener('mousemove', e => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      target.style.left = mouseX + 'px';
      target.style.top = mouseY + 'px';
    });
  };

  useEffect(() => {
    checkDevice();
    if (ref.current) {
      const circle = ref.current;
      document.addEventListener('mousemove', () => {
        setCursorLocation(circle);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile, page.current]);

  useEffect(() => {
    window.addEventListener('resize', checkDevice);
    return () => {
      window.removeEventListener('resize', checkDevice);
    };
  }, []);

  return !isMobile && page.current === 1 ? (
    <Circle id="circle" ref={ref} />
  ) : null;
};

const Circle = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.main};
  mix-blend-mode: difference;
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 999;
  pointer-events: none;
`;
