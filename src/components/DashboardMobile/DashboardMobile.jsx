"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import style from "./DashboardMobile.module.scss";
import {
  DarkMode,
  EyeSlash,
  FluentBoard,
  KanbanLogoLight,
  KanbanLogoDark,
  LightMode,
  ShowSidebar,
} from "@/svgComponents";
import { AddNewBoard, DarkModeBar, NewBoard, EditBoard } from "..";
import { useTheme } from "@/context/theme-provider";

const Dashboard = ({ listBoards, setShowDashboardMobile }) => {
  const [showAddNewBoard, setShowAddNewBoard] = useState(false);
  const { isDarkMode: theme } = useTheme();
  const boards = useRef(null);

  return (
    <>
      <div 
      onClick={() => setShowDashboardMobile(false)}
      className={style.position}></div>
      <section id="section" className={`${style.contenedor}`}>
        <div
          id="cont"
          className={
            theme
              ? `${style.containerSidebar} ${style.containerSidebar_dark}`
              : `${style.containerSidebar}`
          }
        >
          <div className={style.menu}>
            <p className={style.boards}>
              all boards <span>({listBoards?.length ?? 0})</span>
            </p>
            <ul ref={boards} className={style.list}>
              {listBoards?.length > 0 &&
                listBoards.map((elem, idx) => {
                  return (
                    <NewBoard
                      nameBoard={elem}
                      active={idx == 0 ? true : false}
                      key={idx}
                    />
                  );
                })}

              <li
                onClick={() => setShowAddNewBoard(!showAddNewBoard)}
                className={style.createNewBoard}
              >
                <FluentBoard /> <span>+ Create New Board</span>
              </li>
            </ul>
          </div>

          {showAddNewBoard && (
            <AddNewBoard setShowAddNewBoard={setShowAddNewBoard} />
          )}

          <div className={style.options}>
            <DarkModeBar />
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
