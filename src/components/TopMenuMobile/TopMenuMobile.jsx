"use client";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import style from "./TopMenuMobile.module.scss";
import {
  IconChevronDown,
  KanbanMobileLogo,
  VerticalEllipsis,
} from "@/svgComponents";
import { AddNewTask, DashboardMobile } from "..";
import { useTheme } from "@/context/theme-provider";

const TopMenuMobile = ({ boardActive, listBoards }) => {
  const { isDarkMode: theme } = useTheme();

  const [portalAddNewTask, setPortalAddNewTask] = useState(false);
  const [showDashboardMobile, setShowDashboardMobile] = useState(false);

  return (
    <>
      <div
        // className={style.contenedor}
        className={
          theme
            ? `${style.contenedor} ${style.contenedor_dark}`
            : `${style.contenedor}`
        }
      >
        {showDashboardMobile ? (
          <DashboardMobile
            setShowDashboardMobile={setShowDashboardMobile}
            listBoards={listBoards}
          />
        ) : null}

        <div className={style.leftPart}>
          <div className={style.logoTop}>
            <KanbanMobileLogo />
          </div>
          <button
            className={
              theme
                ? `${style.boardText} ${style.boardText_dark}`
                : `${style.boardText}`
            }
            onClick={() => setShowDashboardMobile(true)}
          >
            Platform Launch
            <span 
            // className={style.logoTop}
            className={
              showDashboardMobile
                ? `${style.logoTop} ${style.logoTop_rotate}`
                : `${style.logoTop}`
            }
            
            >
              <IconChevronDown />
            </span>
          </button>
        </div>

        <div className={style.rightPart}>
          <button
            onClick={() => setPortalAddNewTask(!portalAddNewTask)}
            className={style.addBtn}
          >
            +
          </button>

          <div className={style.logoTop}>
            <VerticalEllipsis />
          </div>
        </div>
      </div>

      {portalAddNewTask &&
        createPortal(
          <AddNewTask setPortalAddNewTask={setPortalAddNewTask} />,
          document.body
        )}
    </>
  );
};

export default TopMenuMobile;
