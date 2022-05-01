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

    isMobile ? setIsMobile(true) : setIsMobile(false);
  };

  const setCursorLocation = (target: HTMLDivElement) => {
    document.addEventListener('mousemove', e => {
      target.style.left = `${e.clientX}px`;
      target.style.top = `${e.clientY}px`;
    });
  };

  useEffect(() => {
    checkDevice();
    if (ref.current) {
      if (isMobile)
        document.removeEventListener('mousemove', () => {
          setCursorLocation(circle);
        });
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

  return page.current === 1 ? (
    <Circle id="circle" ref={ref} isMobile={isMobile} />
  ) : null;
};

const Circle = styled.div<{ isMobile: boolean }>`
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
