import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import { ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import React, { useState } from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import * as CookieConsent from "vanilla-cookieconsent";

function App() {
  const [themeSelect, setThemeSelect] = useState("dark");

  const toggleTheme = () => {
    setThemeSelect((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  React.useEffect(() => {
    console.log("Iniciando Cookie Consent...");
  
    const timer = setTimeout(() => {
      if (typeof CookieConsent === "undefined") {
        console.error("❌ Erro: CookieConsent não está carregado!");
        return;
      }
  
      console.log("✅ CookieConsent carregado, executando...");
  
      CookieConsent.run({
        categories: {
          necessary: {
            enabled: true,
            readOnly: true,
          },
          analytics: {},
        },
  
        guiOptions: {
          consentModal: {
            layout: "box",
            position: "bottom left",
          },
        },
  
        language: {
          default: "pt",
          translations: {
            pt: {
              consentModal: {
                title: "Nós usamos cookies",
                description:
                  "Utilizamos cookies para melhorar a sua experiência no site. Você pode aceitar todos ou gerenciar suas preferências.",
                acceptAllBtn: "Aceitar todos",
                acceptNecessaryBtn: "Rejeitar todos",
                showPreferencesBtn: "Gerenciar preferências",
              },
              preferencesModal: {
                title: "Gerenciar preferências de cookies",
                acceptAllBtn: "Aceitar todos",
                acceptNecessaryBtn: "Rejeitar todos",
                savePreferencesBtn: "Aceitar seleção atual",
                closeIconLabel: "Fechar modal",
                sections: [
                  {
                    title: "Cookies estritamente necessários",
                    description:
                      "Esses cookies são essenciais para o funcionamento do site e não podem ser desativados.",
                    linkedCategory: "necessary",
                  },
                  {
                    title: "Desempenho e Análises",
                    description:
                      "Esses cookies coletam informações sobre como você usa nosso site. Todos os dados são anonimizados e não podem ser usados para identificá-lo.",
                    linkedCategory: "analytics",
                  },
                  {
                    title: "Mais informações",
                    description:
                      'Para dúvidas sobre nossa política de cookies e suas escolhas, por favor, <a href="#contato">entre em contato</a>.',
                  },
                ],
              },
            },
          },
        },
  
        onConsent: (categories) => {
          console.log("✅ Cookies aceitos:", categories);
          localStorage.setItem("cookie_consent", JSON.stringify(categories));
        },
  
        onChange: (categories) => {
          console.log("⚡ Preferências de cookies alteradas:", categories);
        },
      });
    }, 3000);
  
    return () => clearTimeout(timer);
  }, []);

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

export default App;
