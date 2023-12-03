"use client";

import React, { useState } from "react";
import { useTheme } from "@/context/theme-provider";
import style from "./SubtaskCheck.module.scss";
import { setSubtasksComplete } from "@/fetching";

const SubtaskCheck = ({ title, isCompleted, changeValue, disabled }) => {
  const { isDarkMode: theme } = useTheme();

  return (
    <button
      disabled={disabled}
      className={
        theme
          ? `${style.itemSubtask} ${style.itemSubtask_dark}`
          : `${style.itemSubtask}`
      }
    >
      <label className={style.labelTask}>
        <input
          onClick={() => setSubtasksComplete(title)}
          type="checkbox"
          value={isCompleted}
          checked={isCompleted}
          onChange={changeValue}
        />
        <span
          className={
            isCompleted
              ? `${style.todoSpan} ${style.todoSpan_done}`
              : `${style.todoSpan}`
          }
        >
          {title}
        </span>
      </label>
    </button>
  );
};

export default SubtaskCheck;
