import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

const useSessionStore = create(
  persist(
    (set, get) => ({
      // Token functions
      token: "",
      name: "",
      setUser: ({ name, token }) => set({
        name: name,
        token: token
      }),

      sessionLogout: () => set({
        name: "",
        token: ""
      }),
    }),
    {
      name: 'presensi-perpus', // Nama unik storage
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useSessionStore;
