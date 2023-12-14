import React, { use } from "react";
import { getBoards } from "@/fetching";

import {
  BoardEmpty,
  BoardNoEmpty,
  Dashboard,
  MainContent,
  MainTopMenu,
  NotExistBoard,
  TopMenu,
  TopMenuMobile,
} from "@/components";
import { useRouter } from "next/navigation";

const page = async ({ params }) => {
  const data = await getBoards(params.boards);
  console.log(data);

  return (
    <>
      {data?.msg ? (
        <NotExistBoard/>
      ) : data[0].columns.length > 0 ? (
        <BoardNoEmpty data={data} />
      ) : (
        <BoardEmpty thereIs={data ? true : false} />
      )}
    </>
  );
};

export default page;
