'use client'

import { useState} from "react";
import { useTheme } from "@/context/theme-provider";
import { VerticalEllipsis } from "@/svgComponents";
import style from "./DetailTask.module.scss";
import {checkTrues} from '@/helpers'
import { ButtonSetting, DeleteTask, SubtaskCheck } from "..";
const DetailTask = ({detailTaskProps, data }) => {
  const {tareas} = detailTaskProps 

  const { isDarkMode: theme } = useTheme();

  const [showSettings, setShowSettings] = useState(false);

  // Luego cambiar index por crypto.randomUUID
  const handleChangeValue = (keyId) => {
    const currentTareas = [...tareas];
    currentTareas[keyId].isCompleted = !currentTareas[keyId].isCompleted;
    detailTaskProps.setTareas(currentTareas); 
  } 


  const styleBtnSetting = {
    top: 30 +'px',
    right: 0 + 'px'
  };


  return (
    <>
      <div
        onClick={() => detailTaskProps.setPortalDetail(false)}
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
            {detailTaskProps.textOverview}
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
             measures={styleBtnSetting} 
             onDelete={detailTaskProps.setDelTask}
             onEdit={detailTaskProps.setEditTask}
             />             
             )}

             
          </div>
        </div>

        {/* Descripcion */}
        <div className={style.description}>
          <p className={style.textDescription}>
            {detailTaskProps.detailsInfo.description}
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
            <span> {detailTaskProps.truesCheck} </span> of <span>{ tareas.length } </span>
            {")"}
          </p>

           {/* Mapping SubtaskCheck */}
          

         {
           tareas?.length > 0 && (
             tareas.map((elem,idx)=> {
                // let keyId = crypto.randomUUID();
                console.log(elem);
                return (
                  <SubtaskCheck
                    changeValue={()=> handleChangeValue(idx)}
                    title={elem.title}
                    isCompleted={elem.isCompleted}
                    key={elem.id}
                  />
                )
             })
           )
         }


           {/* <div
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
          </div> */}

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
           
            {/* <option>{detailTaskProps.detailsInfo.status}</option> */}
            {
              detailTaskProps?.listColumns?.length > 0 && (
                detailTaskProps.listColumns.map((e,idx)=>{
                  // if(e == detailTaskProps.detailsInfo.status){
                  //   return;
                  // } else {
                    return (
                      <option key={idx}>{e}</option>
                      )
                  // }
                })
              )
            }
            
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