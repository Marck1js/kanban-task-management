import style from "./OverviewTask.module.scss"
import { useTheme } from "@/context/theme-provider";
import { useState } from "react";
import { createPortal } from "react-dom";
import { DeleteTask, DetailTask, EditTask } from "..";
const Overview = ({ nameActivity, stepActivity = 3 }) => {
  const { isDarkMode: theme } = useTheme();
  const [portalDetail, setPortalDetail] = useState(false);
  const [editTask, setEditTask] = useState(false);
  const [delTask, setDelTask] = useState(false);



  return (
    <>
      <div
        draggable
        onClick={() => setPortalDetail(!portalDetail)}
        className={
          theme
            ? `${style.overviewTask} ${style.overviewTask_dark}`
            : `${style.overviewTask}`
        }
      >
        <p className={style.nameActivity}>{nameActivity}</p>
        <p className={style.stepActivity}> 0 of {stepActivity} substasks</p>
      </div>
      {
        portalDetail &&
        <DetailTask
          textOverview={nameActivity}
          setPortalDetail={setPortalDetail}
          setDelTask={() => {
            setPortalDetail(false)
            setDelTask(true)
          }}

          setEditTask={() => {
            setPortalDetail(false)
            setEditTask(true)
          }}



        />
      }

      {
        delTask &&
        <DeleteTask
          taskActive={nameActivity}
          setDelTask={setDelTask}
        />
      }

      {
        editTask &&
        <EditTask
        setEditTask={setEditTask}
        />
      }


    </>

  );
};

export default Overview;
