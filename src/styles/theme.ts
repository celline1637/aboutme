const calcRem = (pxSize: number) => `${pxSize / 16}rem`;

const calcP = (total: number, part: number) => {
  return `${(part / total) * 100}%`;
};

const calcVw = (width: number, px: number) => {
  return `${(px / width) * 100}vw`;
};

const flexSet = (just = 'center', align = 'center') => {
  return `display: flex;
  justify-content: ${just};
  align-items: ${align};`;
};

const flexColumnSet = (just = 'center', align = 'center') => {
  return `display: flex;
  flex-direction: column;
  justify-content: ${just};
  align-items: ${align};`;
};

const posCenterX = (type = 'absolute') => {
  return `
  position: ${type};
  left:50%;
  transform:translateX(-50%);
  `;
};

const posCenterY = (type = 'absolute') => {
  return `
  position: ${type};
  top: 50%;
  transform: translateY(-50%);
  `;
};

const posCenter = (type = 'absolute') => {
  return `
  position: ${type};
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  `;
};

const theme = {
  calcRem,
  calcP,
  calcVw,
  flexSet,
  flexColumnSet,
  posCenterX,
  posCenterY,
  posCenter,
  mobile: 'screen and (max-width: 768px)',
};

export default theme;
