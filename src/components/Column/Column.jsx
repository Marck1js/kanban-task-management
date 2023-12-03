"use client";
import React from "react";
import style from "./Column.module.scss";
import { OverviewTask, Tasking } from "..";
const Column = ({ colorTask, nameTask, tasks, listColumns,children }) => {

  return (
    <div className={style.column}>
      <Tasking
        color={colorTask}
        nameTask={nameTask}
        quantity={tasks?.length ?? 0}
      />
     
      {children}
   {/* 
        // ESTO SERIA EL CHILDREN SI NO SE MAPEA
      <div className={style.fieldDetail}>
        {tasks.length > 0 &&
          tasks.map((elem, idx) => {
            return (
              <OverviewTask
                key={elem.id}
                listColumns={listColumns}
                detailsInfo={elem}
              />
            );
          })}
      </div> 
      */}
    </div>
  );
};

export default Column;
