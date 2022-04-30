import { GlobalStyle } from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import theme from './styles/theme';
import { useRecoilValue } from 'recoil';
import { darkMode } from './recoil/atoms';
import colorTheme from './styles/colorTheme';

function App() {
  const darkmode = useRecoilValue(darkMode);

  return (
    <ThemeProvider
      theme={{
        ...theme,
        ...(darkmode ? colorTheme['dark'] : colorTheme['light']),
      }}
    >
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
