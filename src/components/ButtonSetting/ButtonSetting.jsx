'use client';
import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from '@/context/theme-provider'
import style from './ButtonSetting.module.scss';
const ButtonSetting = ({ measures, setShowSettings, onEdit, onDelete, editing = 'Edit Board', deleting = 'Delete Board' }) => {
    const popupRef = useRef(null);
    const { isDarkMode: theme } = useTheme();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setShowSettings && setShowSettings()
            }
        };
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div
            ref={popupRef}
            style={measures ? measures : null}
            className={
                theme
                    ? `${style.optionsSettings} ${style.optionsSettings_dark}`
                    : `${style.optionsSettings}`
            }
        >

            <button
                className={style.optionEdit}
                onClick={onEdit && onEdit}
            >{editing}</button>
            <button
                className={style.optionDelete}
                onClick={onDelete && onDelete}
            >{deleting}</button>
        </div>


    )
}

export default ButtonSetting