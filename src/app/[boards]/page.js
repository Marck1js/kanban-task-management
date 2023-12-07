import React from "react";
import { getBoards } from "@/fetching";
import {
  BoardEmpty,
  BoardNoEmpty,
  MainContent,
  MainTopMenu,
  TopMenu,
  TopMenuMobile,
} from "@/components";

const page = async ({ params }) => {
  const { boards } = params;
  console.log(`12-${boards}`);
  const data = await getBoards(boards);
  const listBoards = await data?.map((e) => e.name);

  console.log(data);

  return (
    <>
      <MainTopMenu>
        <TopMenu boardActive={data?.[0]?.name ?? null} />
        <TopMenuMobile
          // listBoards={listBoards}
          boardActive={data?.[0]?.name ?? null}
        />
      </MainTopMenu>

      <MainContent>
        {data[0].columns.length > 0 ? (
          <BoardNoEmpty data={data} />
        ) : (
          <BoardEmpty thereIs={data ? true : false} />
        )}
      </MainContent>
    </>
  );
};

export default page;

{
  /* 
  <>
{data ? (
  <BoardNoEmpty data={data} />
) : (
  <BoardEmpty thereIs={data ? true : false} />
)}
</> 
*/
}
