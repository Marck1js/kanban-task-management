import style from "./TopMenu.module.scss";
import { VerticalEllipsis } from "@/svgComponents";
import { KanbanLogoDark, KanbanLogoLight } from "@/svgComponents";
import { useTheme } from "@/context/theme-provider";
import { AddNewTask, ButtonSetting, DeleteBoard, EditBoard } from "..";
import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
const TopMenu = ({ boardActive }) => {

  const { isDarkMode: theme } = useTheme();
  const [showSettings, setShowSettings] = useState(false);
  const [portalAddNewTask, setPortalAddNewTask] = useState(false);
  const [editBoard, setEditBoard] = useState(false);
  const [delBoard,setDelBoard] = useState(false);

  const styleBtnSetting = {
    top: 50 + 'px',
    left: 80 + 'px'
  };

  return (
    <>

      <section
        className={
          theme
            ? `${style.contenedor} ${style.contenedor_dark}`
            : `${style.contenedor}`
        }
      >
        <div
          className={
            theme ? `${style.logoTop} ${style.logoTop_dark}` : `${style.logoTop}`
          }
        >
          {theme ? <KanbanLogoDark /> : <KanbanLogoLight />}
        </div>
        <div className={style.platformLaunch}>

          <p
            className={
              theme ? `${style.text} ${style.text_dark}` : `${style.text}`
            }
          >
            {boardActive}
          </p>
          <div className={style.addNewTask}>
            <button
              onClick={() => setPortalAddNewTask(!portalAddNewTask)}
              className={style.buttonAddTask}
            >+ Add new task </button>
            <button
              className={style.verticalEllipsis}
              onClick={() => setShowSettings(!showSettings)}
            >
              <VerticalEllipsis />
            </button>

            {
              showSettings && (
                <ButtonSetting
                  setShowSettings={setShowSettings}
                  measures={styleBtnSetting}
                  onEdit={() => {
                    setEditBoard(true)
                  }}
                  onDelete={() => {
                    setDelBoard(true)
                  }}
                />
              )}

          </div>
        </div>


      </section>

      {
        portalAddNewTask && createPortal(
          <AddNewTask setPortalAddNewTask={setPortalAddNewTask} />,
          document.body
        )
      }

      {
        editBoard &&
        (
          <EditBoard
            setEditBoard={setEditBoard}
          />
        )
      }

      {
        delBoard &&
        (
          <DeleteBoard
          boardActive={boardActive}
          setDelBoard={setDelBoard}
          />
        )
      }


    </>
  );
};

export default TopMenu;
