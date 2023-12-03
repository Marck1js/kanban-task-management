import React from "react";
import style from "./SubInputs.module.scss";
import { IconCross } from "@/svgComponents";
import { useTheme } from "@/context/theme-provider";
const SubInputs = ({ value, onHandleChange, name, placeholder }) => {
  const { isDarkMode: theme } = useTheme();

  return (
    <div
      className={
        theme
          ? `${style.contenedorSubtask} ${style.contenedorSubtask_dark}`
          : `${style.contenedorSubtask}`
      }
    >
      <div className={style.inputSubtask}>
        <input
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onHandleChange}
        />
      </div>
      <button className={style.iconStyle}>
        <IconCross />
      </button>
    </div>
  );
};

export default SubInputs;
