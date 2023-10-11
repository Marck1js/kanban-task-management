import style from "@style/TopMenu.module.scss";
import { VerticalEllipsis } from "@/svgComponents";
import { KanbanLogoDark,KanbanLogoLight } from "@/svgComponents"; 
import { useTheme } from "@/context/theme-provider";
import { AddNewTask } from ".";
import { useState } from "react";
import { createPortal } from "react-dom";
const TopMenu = ({boardActive}) => {
  const { isDarkMode: theme } = useTheme();
  const [portalAddNewTask, setPortalAddNewTask] = useState(false);

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
          onClick={()=> setPortalAddNewTask(!portalAddNewTask)}
          className={style.buttonAddTask}
          >+ Add new task</button>
          <div className={style.verticalEllipsis}>
            <VerticalEllipsis />
          </div>
        </div>
      </div>

      
      </section>

          {
            portalAddNewTask && createPortal(
              <AddNewTask setPortalAddNewTask={setPortalAddNewTask}/>,
              document.body
            )
          }

    </>
  );
};

export default TopMenu;
