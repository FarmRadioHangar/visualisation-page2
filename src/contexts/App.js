import React, { useState, createContext } from "react";
import { useTranslation } from "react-i18next";

export const AppContext = createContext({});

export function AppContextProvider({ children }) {
  const [aboutPageVisible, setAboutPageVisible] = useState(false);
  const [country, setCountry] = useState("");
  const [language, setLanguage] = useState("en");
  const { i18n } = useTranslation();

  const appContext = {
    country,
    setCountry,
    language,
    setLanguage: (lang) => {
      i18n.changeLanguage(lang);
      setLanguage(lang);
    },
    aboutPageVisible,
    setAboutPageVisible,
  };

  return (
    <AppContext.Provider value={appContext}>{children}</AppContext.Provider>
  );
}
