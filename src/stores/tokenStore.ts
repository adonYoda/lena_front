import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Lang = "en" | "ru" | "he" | "ar";


interface TokenStore {
  token: string | null;
  expireDate: Date | null;
  userId: number | null;
  employeeId: number | null;
  employeeName: string | null;
  role: string | null;
  appLang: Lang,
  catalogWindow: number,
  setToken: (authtoken: string | null) => void;
  setUserId: (user: number) => void;
  setRole: (r: string) => void;
  setEmployeeId: (employee: number) => void;
  setEmployeeName: (employee: string) => void;
  setAppLang: (value: Lang) => void;
  setCatalogWindow: (window: number) => void;
}

export const useTokenStore = create<TokenStore>()(persist(
  (set) => ({
      token: null,
      expireDate: null, 
      userId: null,
      employeeId: null,
      employeeName: null,
      role: null,
      appLang: 'ru',
      catalogWindow: 0,
      setToken: (authtoken: string | null) => set(() => ({token: authtoken, expireDate: new Date(Date.now() + 24 * 60 * 60 * 1000)})),
      setUserId: (user: number) => set({userId: user}),
      setRole: (r: string) => set({role: r}),
      setEmployeeId: (employee: number) => set({employeeId: employee}),
      setEmployeeName: (employee: string) => set({employeeName: employee}),
      setAppLang: (value: Lang) => set({ appLang: value }),
      setCatalogWindow: (window: number) => set({catalogWindow: window})
  }), { name: 'tokenStore' }
)
);

