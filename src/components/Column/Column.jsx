import React from "react";
import style from "./Column.module.scss";
import { OverviewTask, Tasking } from "..";
const Column = ({ colorTask, nameTask, tasks,listColumns }) => {

 
  return (
    <div className={style.column}>
      <Tasking color={colorTask} nameTask={nameTask} quantity={tasks?.length ?? 0} />
      <div className={style.fieldDetail}>


        {/* <OverviewTask nameActivity={"Build UI for search"} />
        <OverviewTask nameActivity={"Desing UI for search"} />
        <OverviewTask nameActivity={"Searching Database"} /> */}

        {
          tasks.length > 0 && (
            tasks.map((elem, idx) => {
              return (
                <OverviewTask listColumns={listColumns} key={crypto.randomUUID()} detailsInfo={elem} />
              )
            })
          )
        }


      </div>
    </div>
  );
};

export default Column;
