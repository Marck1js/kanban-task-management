import React from 'react'
import style from './EditBoard.module.scss'
import { useTheme } from '@/context/theme-provider'
import { IconCross } from "@/svgComponents";

const EditBoard = ({ setEditBoard }) => {
  const { isDarkMode: theme } = useTheme();

  return (
    <>
      <div
        onClick={() => setEditBoard(false)}
        className={style.position}
      ></div>

      <div
        // className={style.contenedor}

        className={
          theme
            ? `${style.contenedor} ${style.contenedor_dark}`
            : `${style.contenedor}`
        }

      >
        <p className={style.addNewTask}>Edit Board</p>

        {/* Section Title */}
        <div

          className={
            theme
              ? `${style.sectionTitle} ${style.sectionTitle_dark}`
              : `${style.sectionTitle}`
          }

        >
          <label>Board Name</label>
          <div className={style.title}>
            <input type="text" placeholder="e.g. Web Design" />
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
          <label>Board Columns</label>

          <div className={style.contenedorSubtask}>
            <div className={style.inputSubtask}>
              <input placeholder="Todo" />
            </div>
            <button className={style.iconStyle}>
              <IconCross />
            </button>
          </div>

          <div className={style.contenedorSubtask}>
            <div className={style.inputSubtask}>
              <input placeholder="Doing" />
            </div>
            <button className={style.iconStyle}>
              <IconCross />
            </button>
          </div>

          <button className={style.addNewSubtask}>+Add New Column</button>


        </div>


        {/* Create Task Button */}
        <button className={style.createTask}>Save Changes</button>
      </div>
    </>
  )
}

export default EditBoard;