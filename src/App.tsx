import { GlobalStyle } from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
