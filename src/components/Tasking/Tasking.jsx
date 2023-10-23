import React from "react";
import style from "./Tasking.module.scss";
import { HorizontalEllipsis, VerticalEllipsis} from "@/svgComponents";
const Tasking = ({ color = "976720", nameTask, quantity}) => {
  const ovalColorStyle = {
    backgroundColor: `#${color}`,
  };

  return (
    <div className={style.contenedor}>
      <div  className={style.tasking}>
        <div className={style.oval} style={ovalColorStyle}></div>
        <p className={style.textTask}>
          {nameTask?.toUpperCase()}
          <span>({quantity})</span>
        </p>
      </div>
      <button className={style.buttonEllipsis}>
        <span><HorizontalEllipsis/></span>
      </button>
    </div>
  );
};

export default Tasking;
