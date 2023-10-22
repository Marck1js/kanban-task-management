import React from 'react'
import style from './AddNewBoard.module.scss'
import {useTheme} from '@/context/theme-provider'
import { IconCross } from "@/svgComponents";

const AddNewBoard = ({setShowAddNewBoard}) => {
  const { isDarkMode: theme } = useTheme();

  return (
    <>
      <div
        onClick={()=> setShowAddNewBoard(false)}
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
        <p className={style.addNewTask}>Add New Board</p>

        {/* Section Title */}
        <div

          className={
            theme
              ? `${style.sectionTitle} ${style.sectionTitle_dark}`
              : `${style.sectionTitle}`
          }

        >
          <label>Name</label>
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
          <label>Columns</label>

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
        <button className={style.createTask}>Create New Board</button>
      </div>
    </>
  )
}

export default AddNewBoard