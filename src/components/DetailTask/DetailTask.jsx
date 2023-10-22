import { useTheme } from "@/context/theme-provider";
import { VerticalEllipsis } from "@/svgComponents";
import style from "./DetailTask.module.scss";
import { useState } from "react";
import { ButtonSetting } from "..";
const DetailTask = ({ setPortalDetail, textOverview }) => {
  const { isDarkMode: theme } = useTheme();
  const [showSettings, setShowSettings] = useState(false);


  const styleBtnSetting = {
    top: 30 +'px',
    right: 0 + 'px'
  };

  return (
    <>
      <div
        onClick={() => setPortalDetail(false)}
        className={style.position}
      ></div>

      <div
   
        className={
          theme
            ? `${style.contenedor} ${style.contenedor_dark}`
            : `${style.contenedor}`
        }
      >
        {/* Overview */}
        <div className={style.overview}>
          <p
            className={
              theme
                ? `${style.textOverview} ${style.textOverview_dark}`
                : `${style.textOverview}`
            }
          >
            {textOverview}
          </p>
          <div className={style.boxSettings}>
            <button
              onClick={() => setShowSettings(!showSettings)}
              className={style.settings}
            >
              <VerticalEllipsis />
            </button>

            {showSettings && (
             <ButtonSetting 
             editing="Edit Task" 
             deleting="Delete Task"
             setShowSettings={setShowSettings} 
             measures={styleBtnSetting} />
             )}

             
          </div>
        </div>

        {/* Descripcion */}
        <div className={style.description}>
          <p className={style.textDescription}>
            We know what we're planning to build for version one. Now we need to
            finalise the first pricing model we'll use. Keep iterating the
            subtasks until we have a coherent proposition.
          </p>
        </div>

        {/* Subtasks */}
        <div className={style.subtasks}>
          <p
            className={
              theme
                ? `${style.subtasksRemaining} ${style.subtasksRemaining_dark}`
                : `${style.subtasksRemaining}`
            }
          >
            Subtasks {"("}
            <span>2</span> of <span>3</span>
            {")"}
          </p>

          <div
            className={
              theme
                ? `${style.itemSubtask} ${style.itemSubtask_dark}`
                : `${style.itemSubtask}`
            }
          >
            <label className={style.labelTask}>
              <input type="checkbox" />
              <span className={`${style.todoSpan} ${style.todoSpan_done}`}>
                Research competitor pricing and business models
              </span>
            </label>
          </div>

          <div
            className={
              theme
                ? `${style.itemSubtask} ${style.itemSubtask_dark}`
                : `${style.itemSubtask}`
            }
          >
            <label className={style.labelTask}>
              <input type="checkbox" />
              <span className={`${style.todoSpan} ${style.todoSpan_done}`}>
                Research competitor pricing and business models
              </span>
            </label>
          </div>

          <div
            className={
              theme
                ? `${style.itemSubtask} ${style.itemSubtask_dark}`
                : `${style.itemSubtask}`
            }
          >
            <label className={style.labelTask}>
              <input type="checkbox" />
              <span className={`${style.todoSpan} `}>
                Research competitor pricing and business models
              </span>
            </label>
          </div>
        </div>

        {/* Current Status */}
        <div
          className={
            theme
              ? `${style.currentStatus} ${style.currentStatus_dark}`
              : `${style.currentStatus}`
          }
        >
          <label>Current Status</label>
          <select className={style.selectStatus}>
            <option>Doing</option>
            <option>Todo</option>
            <option>Done</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default DetailTask;



// <div 
             
// className={
//   theme
//     ? `${style.optionsSettings} ${style.optionsSettings_dark}`
//     : `${style.optionsSettings}`
// }

// >
//   <button className={style.optionEdit}>Edit Task</button>
//   <button className={style.optionDelete}>Delete Task</button>
// </div>