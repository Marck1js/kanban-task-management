import style from "./BoardNoEmpty.module.scss";
import { Column, EditBoard } from "..";
import { useTheme } from "@/context/theme-provider";
import { useState } from "react";
const BoardNoEmpty = () => {
  const { isDarkMode: theme } = useTheme();
  const [editBoard, setEditBoard] = useState(false);
  return (
    <>
      <div className={style.contenedor}>
        <Column colorTask={'0e0f90'} nameTask={'todo'} />
        {/* <Column colorTask={'eda124'} nameTask={'doing'}/>
        <Column colorTask={'f2e59c'} nameTask={'verify'}/>
      <Column colorTask={'23f19c'} nameTask={'done'}/> */}


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
