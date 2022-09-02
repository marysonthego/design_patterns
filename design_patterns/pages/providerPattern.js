import React, { useState } from "react";
import "../styles/ProviderPattern.module.css";

import List from "./components/List";
import Toggle from "./components/Toggle";

export const themes = {
  light: {
    background: "#fff",
    color: "#000"
  },
  dark: {
    background: "#171717",
    color: "#fff"
  }
};

export const ThemeContext = React.createContext();

export default function App() {
  const [theme, setTheme] = useState("dark");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className={`App theme-${theme}`}>
      <ThemeContext.Provider value={{ theme: themes[theme], toggleTheme }}>
        <>
        <h1>Provider Pattern</h1>
          <Toggle />
          <List />
        </>
      </ThemeContext.Provider>
    </div>
  );
}
