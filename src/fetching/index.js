import { revalidateTag } from "next/cache";

const localhost = "http://localhost:6500";
const boards = "/boards";
const listBoards = "/listBoards";
const addBoard = "/add/board";
const complete = "/complete";

export const getBoards = async (board) => {
  const boards = await fetch(`${localhost}?boards=${board}`, {
    cache: "no-cache",
    next: {
      tags: ["board"],
    },
  })
    .then((e) => {
      return e.json();
    })
    .catch((e) => {
      return null;
    });
  return boards;
};

export const getListBoards = async () => {
  const boards = await fetch(`${localhost}${listBoards}`, {
    cache: "no-cache",
    next: {
      tags: ["board"],
    },
  })
    .then((e) => {
      return e.json();
    })
    .catch((e) => {
      return null;
    });
  return boards;
};

export const setSubtasksComplete = async (id) => {
  const result = await fetch(`${localhost}${complete}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  })
    .then((e) => e.json())
    .catch((e) => console.log(e));

  return result;
};

export const postNewBoard = async (object) => {
  const result = await fetch(`${localhost}${addBoard}`, {
    cache: "no-cache",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(object),
  })
    .then((e) => e.json())
    .then((e) => {
      if (e.status == "error") {
        throw new Error(JSON.stringify(e));
      }
      return e;
    });
  return result;
};

// {
//   "status": "Ok",
//   "msg": "Board and Columns Created successfully"
// }
