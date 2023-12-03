"use client";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import style from "./TopMenuMobile.module.scss";
import {
  IconChevronDown,
  KanbanMobileLogo,
  VerticalEllipsis,
  Plus
} from "@/svgComponents";
import { AddNewTask, ButtonSetting, DashboardMobile, DeleteBoard, EditBoard } from "..";
import { useTheme } from "@/context/theme-provider";

const TopMenuMobile = ({ boardActive, listBoards }) => {
  const { isDarkMode: theme } = useTheme();

  const [portalAddNewTask, setPortalAddNewTask] = useState(false);
  const [showDashboardMobile, setShowDashboardMobile] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [editBoard, setEditBoard] = useState(false);
  const [delBoard, setDelBoard] = useState(false);
  const styleBtnSetting = {
    top: 45 + "px",
    right: -5 + "px",
  };

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
           {boardActive}
            <span
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
            <Plus/>
          </button>

          <button
            className={style.logoTop}
            onClick={() => setShowSettings(!showSettings)}
          >
            <VerticalEllipsis />
          </button>

          {showSettings && (
            <ButtonSetting
              setShowSettings={setShowSettings}
              measures={styleBtnSetting}
              onEdit={() => {
                setEditBoard(true);
              }}
              onDelete={() => {
                setDelBoard(true);
              }}
            />
          )}
        </div>
      </div>

      {portalAddNewTask ?
        createPortal(
          <AddNewTask setPortalAddNewTask={setPortalAddNewTask} />,
          document.body
        )  : null }

      {editBoard ? <EditBoard setEditBoard={setEditBoard} /> : null}

      {delBoard ? <DeleteBoard boardActive={boardActive} setDelBoard={setDelBoard} /> : null }
    </>
  );
};

export default TopMenuMobile;
