import { atom } from 'recoil';

export const darkMode = atom({
  key: 'darkmode',
  default: true,
});

export const typingAnimationState = atom({
  key: 'typingAnimationState',
  default: false,
});
