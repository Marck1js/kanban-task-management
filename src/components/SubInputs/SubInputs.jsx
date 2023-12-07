import React from "react";
import style from "./SubInputs.module.scss";
import { IconCross } from "@/svgComponents";
import { useTheme } from "@/context/theme-provider";
const SubInputs = ({
  value,
  onHandleChange,
  name,
  placeholder,
  id,
  deleteInput,
}) => {
  const { isDarkMode: theme } = useTheme();

  return (
    <div
      className={
        theme
          ? `${style.contenedorSubtask} ${style.contenedorSubtask_dark}`
          : `${style.contenedorSubtask}`
      }
    >
      <div
        className={
          !value
            ? `${style.inputSubtask} ${style.inputSubtask_error}`
            : `${style.inputSubtask}`
        }
      >
        <input
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onHandleChange}
        />
      </div>
      {!value && <span className={style.error}>Can't be empty</span>}
      <button onClick={() => deleteInput(id)} className={style.iconStyle}>
        <IconCross />
      </button>
    </div>
  );
};

export default SubInputs;
