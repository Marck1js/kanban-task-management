"use client";
import React from "react";
import style from "@style/DarkModeBar.module.scss";
import { DarkMode, LightMode } from "@/svgComponents";
import { useTheme } from "@/context/theme-provider";
const DarkModeBar = () => {
  const { isDarkMode: theme, toggleTheme } = useTheme();

  const handleDarkMode = () => {
    const input = document.getElementById("check");
    const ball = document.getElementById("ball");
    toggleTheme();

    if (input.checked == true) {
      ball.style.transform = `translateX(100%)`;
      return;
    }
    if (input.checked == false) {
      ball.style.transform = `translateX(0%)`;
      return;
    }
  };
  return (
    <div
      className={
        theme
          ? `${style.selectMode} ${style.selectMode_dark}`
          : `${style.selectMode}`
      }
    >
      <LightMode />
      <div className={style.btnMode}>
        <input
          onClick={() => handleDarkMode()}
          type="checkbox"
          name="check"
          id="check"
        />
        <label htmlFor="check">
          <div id="box" className={style.box}>
            <div id="ball" className={style.ball}></div>
          </div>
        </label>
      </div>
      <DarkMode />
    </div>
  );
};

export default DarkModeBar;
