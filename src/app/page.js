"use client";
import "@/app/globals.css";
import style from "@/app/page.module.scss";
import { BoardEmpty, BoardNoEmpty, Dashboard, TopMenu} from "@/components";
import { useTheme } from "@/context/theme-provider";

const page = () => {
  const { isDarkMode: theme } = useTheme();

  return (
    <section className={style.contenedor}>
      <TopMenu boardActive={'UI/UX Design'}/>

      <div className={ theme ? `${style.main} ${style.main_dark}` : `${style.main}`}>
        <Dashboard />
        <BoardNoEmpty />
      </div>
    </section>
  );
};

export default page;
