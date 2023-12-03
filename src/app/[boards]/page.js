import React, { use } from "react";
import { getBoards } from "@/fetching";
import { BoardEmpty, BoardNoEmpty } from "@/components";

const page = async ({ params }) => {
  const { boards } = params;
  console.log(`12-${boards}`);
  const data = await getBoards(boards);
  const listBoards = await data?.map((e) => e.name);

  console.log(data[0].columns.length);

  return (
    <>
      {data[0].columns.length > 0 ? (
        <BoardNoEmpty data={data} />
      ) : (
        <BoardEmpty thereIs={data ? true : false} />
      )}
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
