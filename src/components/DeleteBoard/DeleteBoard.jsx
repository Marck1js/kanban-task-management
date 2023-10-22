import React from 'react'
import { useTheme } from '@/context/theme-provider'
import style from './DeleteBoard.module.scss';

const DeleteBoard = ({ setDelBoard, boardActive }) => {
    const { isDarkMode: theme } = useTheme();
    return (
        <>
            <div
                onClick={() => setDelBoard(false)}
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


                >Delete this board?</p>

                <p

                    className={
                        theme
                            ? `${style.briefTextWarning} ${style.briefTextWarning_dark}`
                            : `${style.briefTextWarning}`
                    }


                >Are you sure you want to delete the '{boardActive}' board? This action will remove all columns and tasks and cannot be reversed.</p>

                <div className={style.actionButtons}>
                    <button className={style.delBtn}>Delete</button>
                    <button className={style.cancelBtn}>Cancel</button>

                </div>
            </div>
        </>
    )
}

export default DeleteBoard