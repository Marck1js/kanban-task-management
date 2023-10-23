'use client'

import React, { useState } from 'react'
import { useTheme } from '@/context/theme-provider';
import style from './SubtaskCheck.module.scss';

const SubtaskCheck = ({title,isCompleted, changeValue}) => {
    const { isDarkMode: theme } = useTheme();
   
    return (

        <button
            className={
                theme
                    ? `${style.itemSubtask} ${style.itemSubtask_dark}`
                    : `${style.itemSubtask}`
            }
        >
            <label className={style.labelTask}>
                <input 
                type="checkbox" 
                value={isCompleted}
                checked={isCompleted}
                onChange={changeValue}
                />
                <span className={ isCompleted ? `${style.todoSpan} ${style.todoSpan_done}` : `${style.todoSpan}` }>
                    {title}
                </span>
            </label>
        </button>


    )
}

export default SubtaskCheck