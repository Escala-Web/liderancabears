import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import {ThemeProvider} from 'styled-components';
import theme from './theme/theme';
import { useState } from 'react';
import {GlobalStyle} from './styles/GlobalStyle';
import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';

function App() {

  const [themeSelect, setThemeSelect] = useState("dark");

  const toggleTheme = () => {
    setThemeSelect((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <Router>
      <ThemeProvider theme={theme[themeSelect]}>
        <GlobalStyle />
        <ToastContainer />
        <Header toggleTheme={toggleTheme} theme={themeSelect} />
          <AppRoutes />
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App
