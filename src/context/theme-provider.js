"use client";
import { createContext, useState, useContext } from "react";
import {useDarkModeLocalStorage as useStore} from '../store'
export const ThemeContext = createContext({});

export default function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Zustand para poder guardar el dark mode en localstorage
  // aun no funciona, pero la idea es poder configurarlo
  
  // const isDarkMode = useStore((state) => state.isDarkMode)
  // const setIsDarkMode = useStore((state) => state.setIsDarkMode)
 
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
