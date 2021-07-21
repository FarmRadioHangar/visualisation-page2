import React, { useState, createContext } from "react";

export const AppContext = createContext({});

export function AppContextProvider({ children }) {
  const [aboutPageVisible, setAboutPageVisible] = useState(false);
  const [country, setCountry] = useState("");
  const [language, setLanguage] = useState("en");

  const appContext = {
    country,
    setCountry,
    language,
    setLanguage,
    aboutPageVisible,
    setAboutPageVisible,
  };

  return (
    <AppContext.Provider value={appContext}>{children}</AppContext.Provider>
  );
}
