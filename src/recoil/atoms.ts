import { atom } from 'recoil';
import skills from '../pages/Skills';

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

export const skillData = atom<object>({
  key: 'skillData',
  default: {
    ...skills,
  },
});
