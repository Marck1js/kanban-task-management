"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import style from "@style/Dashboard.module.scss";
import {
  DarkMode,
  EyeSlash,
  FluentBoard,
  KanbanLogoLight,
  KanbanLogoDark,
  LightMode,
  ShowSidebar,
} from "@/svgComponents";
import { DarkModeBar, NewBoard } from ".";
import { useTheme } from "@/context/theme-provider";

const Dashboard = () => {
  const [numBoards, setNumBoards] = useState(2)
  const { isDarkMode: theme } = useTheme();
  const boards = useRef(null)
  const hideSideBar = () => {
    let showSection = document.getElementById("showSection");
    let section = document.getElementById("section");
    section.style.minWidth = `0px`;

    section.style.transition = `width 250ms linear`;
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
        <div id="cont" className={theme ? `${style.containerSidebar} ${style.containerSidebar_dark}`: `${style.containerSidebar}`}>
          <div className={style.menu}>
            <p className={style.boards}>
              all boards <span>({numBoards})</span>
            </p>
            <ul ref={boards} className={style.list}>
              <NewBoard nameBoard={'Platform Launch'} active/>
              <NewBoard nameBoard={'Marketing Plan'} />
              <NewBoard nameBoard={'RoadMap'} />
              <NewBoard nameBoard={'Lifestyle'} />
              <NewBoard nameBoard={'Discord Plan'} />
              <NewBoard nameBoard={'Google Ads'} />
              <NewBoard nameBoard={'Payoneer'} />
              <NewBoard nameBoard={'Excalidraw'} />
              <NewBoard nameBoard={'Software Engineer'} />
              <NewBoard nameBoard={'Minimal'} />
              <NewBoard nameBoard={'Forecast'} />
              <NewBoard nameBoard={'FaceRound'} />
              <NewBoard nameBoard={'React Native'} />
              <NewBoard nameBoard={'Ultra Progress'} />
              <NewBoard nameBoard={'Bunjs'} />
              <NewBoard nameBoard={'RoadMap'} />
              <NewBoard nameBoard={'RoadMap'} />
           
                           
              <li className={style.createNewBoard}>
                <FluentBoard /> <span>+ Create New Board</span>
              </li>
            </ul>
          </div>

          <div className={style.options}>
            <DarkModeBar />
            <button 
            // onClick={() => hideSideBar()}
             className={style.sidebar}>
              <EyeSlash />
              <span className={style.text}>Hide SideBar</span>
            </button>
          </div>
        </div>
      </section>

      <div
      //  onClick={() => showSidebar()}
        id="showSection" className={style.showContenedor}>
        <ShowSidebar />
      </div>
    </>
  );
};

export default Dashboard;
