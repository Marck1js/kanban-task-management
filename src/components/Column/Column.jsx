import React from "react";
import style from "./Column.module.scss";
import { OverviewTask, Tasking } from "..";
const Column = ({ colorTask, nameTask }) => {
  return (
    <div className={style.column}>
      <Tasking color={colorTask} nameTask={nameTask} />
      <div className={style.fieldDetail}>
        <OverviewTask nameActivity={"Build UI for search"} />
        <OverviewTask nameActivity={"Desing UI for search"} />
        <OverviewTask nameActivity={"Searchin Database"} />
      
      </div>
    </div>
  );
};

export default Column;
