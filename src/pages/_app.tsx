import "@globalcss";
import type { AppProps } from "next/app";
import { appWithTranslation} from "next-i18next";
import styled from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {Lang, useTokenStore } from "stores/tokenStore";
import PopupContainer from "ui/containers/PopupsContainer";

function returnClass(lang: Lang): string {
    switch (lang) {
        case "ar":
            return "'Noto Sans Arabic', sans-serif";
        case "he":
            return "'Noto Sans Hebrew', sans-serif";
        default:
            return "'Noto Sans', sans-serif";
    }
}

const LangStyleContainer = styled.div<{ lang: Lang }>`
    * {
        font-family: ${props => returnClass(props.lang)};
    }
`;

function App({ Component, pageProps }: AppProps) {
    const {appLang } = useTokenStore();

    const queryClient = new QueryClient(
        {
            defaultOptions: {
                queries: {
                    refetchOnWindowFocus: false,
                    retry:100
                }
            }
        }
    );

    return (
        <div dir={["ar", "he"].includes(appLang) ? "rtl" : "ltr"}>
            <QueryClientProvider client={queryClient}>
                <LangStyleContainer lang={appLang}>
                    <Component {...pageProps} />
                </LangStyleContainer>
            </QueryClientProvider>
            <PopupContainer />
        </div>
    );
}

export default appWithTranslation(App);
