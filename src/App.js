import React from "react";
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
