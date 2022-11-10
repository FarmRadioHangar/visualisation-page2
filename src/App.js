import React from "react";
import "./font/BebasBold.woff2";
import "./font/BebasBook.woff2";
import "./font/BebasRegular.woff2";
import "./font/BebasLight.woff2";
import Landing from "./components/Landing";
import { AppContextProvider } from "./contexts/App";

function App() {
  return (
    <AppContextProvider>
      <Landing />
    </AppContextProvider>
  );
}

export default App;
