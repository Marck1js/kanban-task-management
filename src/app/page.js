import "@/app/globals.css";
import style from "@/app/page.module.scss";
import {
  BoardEmpty,
  BoardNoEmpty,
  Dashboard,
  DashboardMobile,
  MainContent,
  TopMenu,
  TopMenuMobile,
} from "@/components";
import { getBoards, getListBoards } from "@/fetching";
import { Suspense } from "react";

const page = async ({ children }) => {
  const data = await getBoards();

  // const listBoards = await data?.map((e) => e.name);
  const list = await getListBoards();

  // console.log(list);
  return (
    <section className={style.contenedor}>
      {children}
      {!children && (
        <>
          <TopMenu boardActive={data?.[0]?.name ?? null} />
          <TopMenuMobile
            // listBoards={listBoards}
            boardActive={data?.[0]?.name ?? null}
          />
        </>
      )}

      <div className={style.main}>
        <Dashboard listBoards={list} />
        <MainContent>
          <p>Let's started, please select or create a new board</p>
        </MainContent>
        {/* {data ? (
          // <Suspense fallback={<div>loading</div>}>
             <BoardNoEmpty data={data} />
          // </Suspense>
        ) : (
          <BoardEmpty thereIs={data ? true : false} />
        )} */}
      </div>
    </section>
  );
};

export default page;
