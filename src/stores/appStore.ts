import { create } from "zustand";

export type AuthType = 'login' | 'recoverPassword';

export type AuthPhase = 'first' | 'check';

export type RecoverPasswordPhase = 'first' | 'check' | 'third' | 'success';

export const authPhases: AuthPhase[] = ['first', 'check'];

export const recoverPhases: RecoverPasswordPhase[] = [
	'first',
	'check',
	'third',
	'success',
];

export type AppPages =
    | "participants"
    | "employees"
    | "documents"
    | "catalog"
    | "settings"
    | "";

export type Lang = "en" | "ru" | "he" | "ar";

export type ErrorType = "error" | "warning";

export type Error = {
    text: string;
    subtext: string;
    type: ErrorType;
    id: number;
};


interface AppStore {
	authType: AuthType,
	authPhase: AuthPhase,
	recoverPhase: RecoverPasswordPhase,
    appLang: Lang,
    activePage: AppPages,
    phone: string,
    password: string,
    folderId: number,
    setAppLang: (value: Lang) => void;
    setActivePage: (page: AppPages) => void;
    setAuthType: (type: AuthType) => void;
    setAuthPhase: (phase: AuthPhase) => void;
    setPhone: (phon: string) => void;
    setPassword: (pass: string) => void;
    setFolderId: (id: number) => void;
}

const useAppStore = create<AppStore>((set) => ({
	authType: 'login',
	authPhase: 'first',
	recoverPhase: 'first',
    appLang: "ru",
    activePage: "",
    phone: "",
    password: "",
    folderId: 0,
    setAppLang: (value: Lang) => set(() => ({ appLang: value })),
    setActivePage: (page: AppPages) => set(() => ({ activePage: page })),
    setAuthType: (type: AuthType) => set(() =>  ({authType: type})),
    setAuthPhase: (phase: AuthPhase) => set(() => ({authPhase: phase})),
    setPhone: (phon: string) => set({phone: phon}),
    setPassword: (pass: string) => set({password: pass}),
    setFolderId: (id: number) => set({folderId: id}),
})
);

export default useAppStore;
