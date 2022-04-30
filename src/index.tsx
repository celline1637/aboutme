import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import App from './App';

const rootNode = document.getElementById('root');

ReactDOM.createRoot(rootNode!).render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);
