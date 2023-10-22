import React from "react";
import style from "./EditTask.module.scss";
import { IconCross } from "@/svgComponents";
import { useTheme } from '@/context/theme-provider'
const EditTask = ({ setEditTask }) => {

  const { isDarkMode: theme } = useTheme();

  return (
    <>
      <div onClick={() => setEditTask(false)} className={style.position}></div>


      <div
        // className={style.contenedor}

        className={
          theme
            ? `${style.contenedor} ${style.contenedor_dark}`
            : `${style.contenedor}`
        }

      >
        <p className={style.addNewTask}>Edit Task</p>

        {/* Section Title */}
        <div

          className={
            theme
              ? `${style.sectionTitle} ${style.sectionTitle_dark}`
              : `${style.sectionTitle}`
          }

        >
          <label>Title</label>
          <div className={style.title}>
            <input type="text" placeholder="e.g. Take coffee break" />
          </div>
        </div>
        {/* Section Desctiption */}
        <div
          className={
            theme
              ? `${style.sectionDescription} ${style.sectionDescription_dark}`
              : `${style.sectionDescription}`
          }

        >
          <label>Description</label>
          <div className={style.textarea}>
            <textarea
              placeholder="e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
            />
          </div>
        </div>

        {/* Section Subtasks */}
        <div

          className={
            theme
              ? `${style.sectionSubtasks} ${style.sectionSubtasks_dark}`
              : `${style.sectionSubtasks}`
          }

        >
          <label>Subtasks</label>

          <div className={style.contenedorSubtask}>
            <div className={style.inputSubtask}>
              <input placeholder="e.g. Make Coffee" />
            </div>
            <button className={style.iconStyle}>
              <IconCross />
            </button>
          </div>

          <div className={style.contenedorSubtask}>
            <div className={style.inputSubtask}>
              <input placeholder="e.g. Make Coffee" />
            </div>
            <button className={style.iconStyle}>
              <IconCross />
            </button>
          </div>

          <button className={style.addNewSubtask}>+Add New Subtask</button>


        </div>


        {/* Section Status */}
        <div

          className={
            theme
              ? `${style.sectionStatus} ${style.sectionStatus_dark}`
              : `${style.sectionStatus}`
          }

        >
          <label>Status</label>

          <div className={style.selectStatus}>
            <select>
              <option>Todo</option>
              <option>Doing</option>
              <option>Verify</option>
              <option>Done</option>
            </select>
          </div>


        </div>



        {/* Create Task Button */}
        <button className={style.createTask}>Save Changes</button>
      </div>
    </>
  );
};

export default EditTask;
