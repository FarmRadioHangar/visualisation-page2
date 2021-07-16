import React, { useState, createContext } from "react";

export const AppContext = createContext({});

export function AppContextProvider({ children }) {
  const [country, setCountry] = useState("");
  const [language, setLanguage] = useState("en");

  const appContext = {
    country,
    setCountry,
    language,
    setLanguage,
  };

  return (
    <AppContext.Provider value={appContext}>{children}</AppContext.Provider>
  );
}
