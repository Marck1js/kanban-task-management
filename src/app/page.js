import "@/app/globals.css";
import style from "@/app/page.module.scss";
import {
  BoardEmpty,
  BoardNoEmpty,
  Dashboard,
  DashboardMobile,
  TopMenu,
  TopMenuMobile,
} from "@/components";
import { getBoards } from "@/fetching";

const page = async () => {
  const data = await getBoards();
  const listBoards = await data?.map((e) => e.name);

  return (
    <section className={style.contenedor}>
      <TopMenu boardActive={data?.[0].name ?? null} />
      <TopMenuMobile listBoards={listBoards} boardActive={data?.[0].name ?? null} />
      <div className={style.main}>
        <Dashboard listBoards={listBoards} />
        {data ? (
          <BoardNoEmpty data={data} />
        ) : (
          <BoardEmpty thereIs={data ? true : false} />
        )}
      </div>
    </section>
  );
};

export default page;
