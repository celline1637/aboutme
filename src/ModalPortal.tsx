import ReactDOM from 'react-dom';

interface propTypes {
  children?: React.ReactNode;
}

const Portal = ({ children }: propTypes) => {
  const modalRoot = document.getElementById('modal');
  return modalRoot && children
    ? ReactDOM.createPortal(children, modalRoot)
    : null;
};

export default Portal;
