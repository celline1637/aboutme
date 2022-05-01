import { atom, selector } from 'recoil';
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

// export const categoryData = selector({
//   key: 'categoryData',
//   get: async ({ get }) => {
//     const skillData = get(skillData);
//     const category = [];
//     Object.values(skillData).map(el => {
//       return category.push(...el.category);
//     });
//   },
// });
