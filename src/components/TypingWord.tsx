import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { typingAnimationState } from '../recoil/atoms';

interface propTypes {
  textList: Array<string>;
  typeSpeed?: number;
  backSpeed?: number;
  loop?: boolean;
  ignoreInitialDelay?: boolean;
  smartBackspace?: boolean;
}

const TypingWord = ({
  textList,
  ignoreInitialDelay = true,
  typeSpeed = 200,
  backSpeed = 200,
}: propTypes) => {
  let firstText = '';
  firstText = textList[0];

  const initialState = {
    index: 0,
    text: firstText,
    length: 1,
    isDeleting: false,
  };

  const [currentText, setCurrentText] = useState(initialState);
  const [isComplete, setIsComplete] = useState(false);
  const timer = useRef<any>();

  const unmountTimer = () => {
    const timeoutInfo = timer.current;
    if (timeoutInfo) {
      // Checks if timer has been already been stopped
      timer.current = undefined;
      clearTimeout(timeoutInfo);
    }
  };

  const returnLastMatch = (string1: string, string2: string) => {
    let i = 0;
    let j = 0;
    for (; i < string1.length && j < string2.length; i++, j++) {
      if (string1.charAt(i) !== string2.charAt(j)) return i - 1;
    }
    return i;
  };

  const updateText = useCallback(() => {
    const currentTextContent = currentText.text;
    const currentTextLength = currentText.length;
    const currentIndex = currentText.index;

    if (currentTextContent.length === currentTextLength) {
      // Check if end of text has been reached

      if (currentText.index === textList.length - 1) {
        setCurrentText({
          index: currentIndex + 1,
          text: textList[currentIndex],
          length: ignoreInitialDelay ? 1 : 0,
          isDeleting: false,
        });
        return true;
      }

      // If array go for the next text
      if (currentIndex >= textList.length - 1) {
        // If it was the last text in the array
        setIsComplete(true);
        // unmountTimer();
        return false;
      } else {
        // If shouldDelete is true, start deleting characters
        setCurrentText({
          ...currentText,
          length: currentTextLength - 1,
          isDeleting: true,
        }); // Start decrementing the length

        return true;
      }
    }
    if (currentTextLength === 0 && currentText.isDeleting) {
      // Entire text has been deleted then switch to the next text
      setCurrentText({
        index: currentIndex + 1,
        text: textList[currentIndex + 1],
        length: ignoreInitialDelay ? 1 : 0,
        isDeleting: false,
      });
      return true;
    }
    if (currentText.isDeleting && currentIndex < textList.length - 1) {
      // Smart Backspace enabled and not the last texty
      const lastMatch = returnLastMatch(
        currentTextContent,
        textList[currentIndex + 1]
      );
      if (currentTextLength === lastMatch) {
        setCurrentText({
          index: currentIndex + 1,
          text: textList[currentIndex + 1],
          length: lastMatch + 1,
          isDeleting: false,
        });
        return true;
      }
    }
    if (currentText.isDeleting) {
      setCurrentText({ ...currentText, length: currentTextLength - 1 });
    } else {
      setCurrentText({ ...currentText, length: currentTextLength + 1 });
    }
    return true;
  }, [currentText, textList, ignoreInitialDelay]);

  // Decide whether to set delete speed or type speed
  const setTimeOutSpeed = currentText.isDeleting ? backSpeed : typeSpeed;

  useEffect(() => {
    timer.current = setInterval(updateText, setTimeOutSpeed);
    return unmountTimer;
  }, [updateText, setTimeOutSpeed]);

  const stringToRender = currentText.text.substr(0, currentText.length);

  return <Wrapper>{stringToRender}</Wrapper>;
};

const Wrapper = styled.span`
  &::after {
    content: '|';
    animation: blink 1s step-end infinite;
  }

  @keyframes blink {
    0% {
      opacity: 1;
    }
    49% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;

export default TypingWord;
