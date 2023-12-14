"use client";
import React from "react";
import { Dashboard } from "..";
import style from "./MainContent.module.scss";
import { useTheme } from "../../context/theme-provider";
const MainContent = ({ children }) => {
  const { isDarkMode: theme } = useTheme();
  return (
    <div
      className={theme ? `${style.main} ${style.main_dark}` : `${style.main}`}
    >
      {children}
    </div>
  );
};

export default MainContent;
