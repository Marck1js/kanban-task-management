import React from 'react'
import { useTheme } from '@/context/theme-provider'
import style from './DeleteTask.module.scss';

const DeleteTask = ({ setDelTask, taskActive}) => {
    const { isDarkMode: theme } = useTheme();
    return (
        <>
            <div
                onClick={() => setDelTask(false)}
                className={style.position}
            ></div>

            <div

                className={
                    theme
                        ? `${style.contenedor} ${style.contenedor_dark}`
                        : `${style.contenedor}`
                }

            >
                <p
                    className={
                        theme
                            ? `${style.textDelete} ${style.textDelete_dark}`
                            : `${style.textDelete}`
                    }


                >Delete this task?</p>

                <p

                    className={
                        theme
                            ? `${style.briefTextWarning} ${style.briefTextWarning_dark}`
                            : `${style.briefTextWarning}`
                    }


                >Are you sure you want to delete the '{taskActive}' task and its subtasks? This action cannot be reversed.</p>

                <div className={style.actionButtons}>
                    <button className={style.delBtn}>Delete</button>
                    <button className={style.cancelBtn}>Cancel</button>

                </div>
            </div>
        </>
    )
}

export default DeleteTask