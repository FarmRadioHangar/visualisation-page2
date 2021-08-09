import React from "react";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom";
import i18n from "i18next";
import reportWebVitals from "./reportWebVitals";
import theme from "./theme";
import { ChakraProvider } from "@chakra-ui/react";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        French: "Français",
      },
    },
    fr: {
      translation: {
        "About the project": "À propos du projet",
        Insights: "Observations",
        "Explore the results": "Explorer les résultats",
        English: "English",
        French: "Français",
        "Report coming soon": "Rapport à venir",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
