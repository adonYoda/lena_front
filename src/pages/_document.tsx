import { Html, Head, Main, NextScript } from "next/document";
import { useTokenStore } from "stores/tokenStore";


export default function Document() {
    const { appLang } = useTokenStore();

    return (
        <Html lang={appLang}
        >
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
