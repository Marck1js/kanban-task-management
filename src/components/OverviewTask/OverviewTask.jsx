"use client";
import style from "./OverviewTask.module.scss";
import { useTheme } from "@/context/theme-provider";
import { useState, useCallback } from "react";
import { DeleteTask, DetailTask, EditTask } from "..";
import { checkTrues } from "@/helpers";
import { createPortal } from "react-dom";

const Overview = ({ stepActivity = 1, detailsInfo, listColumns }) => {
  const { isDarkMode: theme } = useTheme();
  const [portalDetail, setPortalDetail] = useState(false);
  const [editTask, setEditTask] = useState(false);
  const [delTask, setDelTask] = useState(false);
  const [tareas, setTareas] = useState([...detailsInfo.subtasks]);
  const truesCheck = useCallback(checkTrues(tareas), [tareas]);

  const detailTaskProps = {
    listColumns,
    setTareas,
    truesCheck,
    tareas,
    detailsInfo,
    textOverview: detailsInfo.title,
    setPortalDetail,
    setDelTask: () => {
      setPortalDetail(false);
      setDelTask(true);
    },
    setEditTask: () => {
      setPortalDetail(false);
      setEditTask(true);
    },
  };

  const handleClick = (e) => {
    
    setPortalDetail(!portalDetail)
  }

  return (
    <>
      <div
        onClick={(e) => handleClick(e)}
        className={
          theme
            ? `${style.overviewTask} ${style.overviewTask_dark}`
            : `${style.overviewTask}`
        }
      >
        <p className={style.nameActivity}>{detailsInfo.title}</p>
        <p className={style.stepActivity}>
          {" "}
          {truesCheck} of {detailsInfo.subtasks.length} substasks
        </p>
      </div>
      {
      
      portalDetail && 
      // createPortal(
      <DetailTask detailTaskProps={detailTaskProps}/> 
      // , document.body )
      }

      {delTask && (
        <DeleteTask taskActive={detailsInfo.title} setDelTask={setDelTask} />
      )}

      {editTask && <EditTask setEditTask={setEditTask} />}
    </>
  );
};

export default Overview;
