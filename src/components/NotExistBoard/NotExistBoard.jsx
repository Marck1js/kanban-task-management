"use client";
import { useState } from "react";
import style from "./NotExistBoard.module.scss";
import { useTheme } from "@/context/theme-provider";
import { AddNewBoard } from "..";

const NotExistBoard = () => {
  const { isDarkMode: theme } = useTheme();
  const [showAddNewBoard, setShowAddNewBoard] = useState(false);
  return (
    <>
      <div
        className={
          theme
            ? `${style.contenedor} ${style.contenedor_dark}`
            : `${style.contenedor}`
        }
      >
        <p className={style.text}>
          This board does not exist. Create a new board to get started.
        </p>
        <button
          onClick={() => setShowAddNewBoard(!showAddNewBoard)}
          className={style.buttonAddTask}
        >
          Create New Board
        </button>
      </div>

      {showAddNewBoard && (
        <AddNewBoard setShowAddNewBoard={setShowAddNewBoard} />
      )}
    </>
  );
};

export default NotExistBoard;
