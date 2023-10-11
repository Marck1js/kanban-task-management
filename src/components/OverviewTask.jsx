import style from "@style/Overview.module.scss"
import { useTheme } from "@/context/theme-provider";
import { useState } from "react";
import { createPortal } from "react-dom";
import { DetailTask } from ".";
const Overview = ({ nameActivity, stepActivity = 3 }) => {
  const { isDarkMode: theme } = useTheme();
  const [portalDetail, setPortalDetail] = useState(false);



  return (
    <>
    <div
      onClick={()=> setPortalDetail(!portalDetail)}
      className={
        theme
          ? `${style.OverviewTask} ${style.OverviewTask_dark}`
          : `${style.OverviewTask}`
      }
    >
      <p className={style.nameActivity}>{nameActivity}</p>
      <p className={style.stepActivity}> 0 of {stepActivity} substasks</p>
    </div>
        {
          portalDetail && createPortal(
            <DetailTask textOverview={nameActivity} setPortalDetail={setPortalDetail}/>,
            document.body
          )
        }
    </>
    
  );
};

export default Overview;