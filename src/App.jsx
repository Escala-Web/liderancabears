import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import {ThemeProvider} from 'styled-components';
import theme from './theme/theme';
import { useState } from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
function App() {

  const [themeSelect, setThemeSelect] = useState("dark");

  console.log(theme[themeSelect]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <Router>
      <ThemeProvider theme={theme[themeSelect]}>
        <GlobalStyle />
        <Header />
        <AppRoutes />
      </ThemeProvider>
    </Router>
  );
}

export default App
