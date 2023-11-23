'use client'
import style from "./BoardNoEmpty.module.scss";
import { Column, EditBoard } from "..";
import { useTheme } from "@/context/theme-provider";
import { useState } from "react";
import { colorRGBAleatorio as RGB } from '@/helpers'
const BoardNoEmpty = ({ data }) => {
  const { isDarkMode: theme } = useTheme();
  const [editBoard, setEditBoard] = useState(false);


  let n = 0;

  return (
    <>
      <div className={theme ? `${style.contenedor} ${style.contenedor_dark}` : `${style.contenedor}`}>

        {/* <Column colorTask={'0e0f90'} nameTask={'todo'} />
        <Column colorTask={'eda124'} nameTask={'doing'} />
        <Column colorTask={'f2e59c'} nameTask={'verify'} />
        <Column colorTask={'23f19c'} nameTask={'done'} />
 */}

        {
          data.length > 0 && (
            data[n].columns.map((elem, idx) => {
              return (
                <Column
                  listColumns={data[n].columns.map(e => e.name)}
                  key={elem.id}
                  colorTask={RGB()}
                  nameTask={elem.name}
                  tasks={elem.tasks}
                />

              )
            })
          )
        }





        {/* Button Add Column */}
        <button
          onClick={() => setEditBoard(true)}
          className={
            theme
              ? `${style.addNewColumn} ${style.addNewColumn_dark}`
              : `${style.addNewColumn}`
          }
        >+New Column</button>
      </div>

      {
        editBoard &&
        <EditBoard
          setEditBoard={setEditBoard}
        />
      }

    </>
  );
};

export default BoardNoEmpty;
