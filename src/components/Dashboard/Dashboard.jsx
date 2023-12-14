"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import style from "./Dashboard.module.scss";
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
import { useBoards } from "@/store";
import { usePathname } from "next/navigation";
import { convertirTexto } from "@/helpers";

const Dashboard = ({ listBoards }) => {
  const [showAddNewBoard, setShowAddNewBoard] = useState(false);
  const { isDarkMode: theme } = useTheme();

  const pathname = usePathname();



  const boards = useRef(null);

  const hideSideBar = () => {
    let showSection = document.getElementById("showSection");
    let section = document.getElementById("section");
    section.style.width = `0px`;

    section.style.transition = `width 100ms linear`;
    function funVisible() {
      showSection.style.visibility = `visible`;
      section.removeEventListener("transitionend", funVisible);
    }
    section.addEventListener("transitionend", funVisible);
  };

  const showSidebar = () => {
    let showSection = document.getElementById("showSection");
    let section = document.getElementById("section");
    showSection.style.visibility = `hidden`;
    section.style.width = `300px`;
  };

  return (
    <>
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
                      nameBoard={elem.name}
                      active={
                        pathname.split("/")[1] == convertirTexto(elem.name)
                      }
                      key={idx}
                    />
                  );
                })}

              {/* <NewBoard nameBoard={'Platform Launch'} active />
              <NewBoard nameBoard={'Marketing Plan'} />
              <NewBoard nameBoard={'RoadMap'} /> */}

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
            <button onClick={() => hideSideBar()} className={style.sidebar}>
              <EyeSlash />
              <span className={style.text}>Hide SideBar</span>
            </button>
          </div>
        </div>
      </section>

      <div
        onClick={() => showSidebar()}
        id="showSection"
        className={style.showContenedor}
      >
        <ShowSidebar />
      </div>
    </>
  );
};

export default Dashboard;
