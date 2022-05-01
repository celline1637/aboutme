import { atom } from 'recoil';

export const darkMode = atom({
  key: 'darkmode',
  default: true,
});

export const typingAnimationState = atom({
  key: 'typingAnimationState',
  default: false,
});

export const pageState = atom({
  key: 'pageState',
  default: {
    current: 1,
    total: 4,
  },
});
