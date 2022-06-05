import React from 'react';
import { ThemeProvider } from 'styled-components';

/* Theme */
import GlobalStyles from './Components/Theme/GlobalStyle';
import { lightTheme } from './Components/Theme/Theme';

/* Components */
import Calculator from './Components/Calculator/Calculator';

const App = () => (
  <ThemeProvider theme={lightTheme}>
    <GlobalStyles />
    <div className="app">
      <Calculator />
    </div>
  </ThemeProvider>
);

export default App;
