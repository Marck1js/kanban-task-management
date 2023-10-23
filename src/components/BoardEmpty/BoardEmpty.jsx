'use client'
import style from "./BoardEmpty.module.scss";
import { useTheme } from '@/context/theme-provider';

const BoardEmpty = ({thereIs}) => {
  const { isDarkMode: theme } = useTheme();



  return (
    <div
      className={
        theme
          ? `${style.contenedor} ${style.contenedor_dark}`
          : `${style.contenedor}`
      }

    >
      <p className={style.text}>
        This board is empty. Create a new column to get started.
      </p>
      <button
        disabled={!thereIs && true}
        className={style.buttonAddTask}

      >+ Add new column</button>
    </div>
  );
};

export default BoardEmpty;
