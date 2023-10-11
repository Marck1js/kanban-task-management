'use client'
import { ThemeContext } from '@/context/theme-provider';
import {useContext} from 'react'
import style from "@style/BoardEmpty.module.scss";
const BoardEmpty = () => {

  return (
    <div className={style.contenedor}>
      <p className={style.text}>
        This board is empty. Create a new column to get started.
      </p>
      <button className={style.buttonAddTask}>+ Add new column</button>
    </div>
  );
};

export default BoardEmpty;
