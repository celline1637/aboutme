import React from 'react';
import ReactDOM from 'react-dom';

const ModalPortal = (children: React.ReactNode) => {
  const modalRoot = document.getElementById('modal');
  return ReactDOM.createPortal(children, modalRoot!);
};
export default ModalPortal;
