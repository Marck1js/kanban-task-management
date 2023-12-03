import { create } from "zustand";

export const useBoards = create((set) => ({
  listBoardsZustand: [],
  initialListBoard: (data) => set((state) => ({ listBoardsZustand: [data] })),
  addClientBoards: (data) =>
    set((state) => ({ listBoardsZustand: [...state.listBoardsZustand, data] })),
}));
