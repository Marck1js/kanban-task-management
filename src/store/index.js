import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useDarkModeLocalStorage = create(
  persist(
    (set, get) => ({
      isDarkMode: false,
      setIsDarkMode: () => set({ isDarkMode: !get().isDarkMode }),
    }),
    {
      name: "dark-mode", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
