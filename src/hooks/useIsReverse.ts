import { useRouter } from "next/router";

export function useIsReverse(): boolean {
    const { locale } = useRouter();

    return ["ar", "he"].includes(locale || "en");
}
