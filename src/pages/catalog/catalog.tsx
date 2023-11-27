import React from "react";
import { useTranslation } from "react-i18next";
import "react-loading-skeleton/dist/skeleton.css";
import { useTokenStore } from "stores/tokenStore";
import { useIsReverse } from "../../hooks/useIsReverse";
import Selector from "../../shared/ui/components/Selector";

type CatalogProps = {
    children: React.JSX.Element | undefined;
}

export default function Catalog({ children }: CatalogProps) {
    const windows = ["wares", "brands", "units", "categories"];
    const {catalogWindow, setCatalogWindow} = useTokenStore();
    const reverse = useIsReverse();
    const { t } = useTranslation("admin");
    return (
        <div className="p-4">
            <h1 className={`mb-5 ${!reverse ? "left: 0" : "right:0"} flex `}>
                {t("catalog")}
            </h1>
            <Selector
                path="/catalog"
                windows={windows}
                activeWindow={windows[catalogWindow]}
                setActiveWindows={(value: string) => {
                    setCatalogWindow(windows.indexOf(value));
                }}
            />
            <div
                className={`relative mt-4 ${
                    reverse ? "xxl:pl-64 xl:pl-20" : "xxl:pr-64 xl:pr-20"
                }`}
            >
            <>
                {children}
            </>

            </div>
        </div>
    );
};