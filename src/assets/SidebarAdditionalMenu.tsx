import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Image from "next/image";
import useAppStore from "stores/appStore";
import { Lang } from "stores/tokenStore";

import CheckCircle from "ui/components/CheclCircle";
import MenuItem from "comonents/MenuItem";
import LanguageIcon from "./LanguageIcon";

const SidebarAdditionalMenu: React.FC<{ hover: boolean }> = ({ hover }) => {
    const [viewLang, setViewLang] = useState<boolean>(false);

    const { t } = useTranslation("admin");

    const onLang = (value: boolean) => {
        setViewLang(!value);
    };

    const { appLang, setAppLang} = useAppStore();

    const router = useRouter();

    const { pathname, asPath, query } = router;

    const languages = {
        ru: "Русский",
        en: "English",
        ar: "العربية",
        he: "עברית",
    };

    function changeLang(lang: Lang) {
        router.push({ pathname, query }, asPath, { locale: lang });
    }

    const langOnClick = (value: Lang) => {
        setAppLang(value);
        changeLang(value);
    };
    return (
        <div className="relative flex flex-col items-start gap-6 sm:gap-6">
            <MenuItem
                onClick={value => {
                    onLang(value);
                }}
                text={t("lang")}
                hover={hover}
                dropdown
                activeState={viewLang}
                Icon={LanguageIcon}
            />
            {viewLang && (
                <div className="bg-bg-secondary md:bg-white rounded-12 sm:bg-white w-[calc(100%-40px)] flex flex-col gap-2 p-2 lg:w-[calc(100%-10px)]">
                    {Object.keys(languages).map((el: string) => (
                        <div
                            key={el}
                            onClick={() => {
                                langOnClick(el as Lang);
                            }}
                            className={`flex cursor-pointer gap-6 md:gap-4 sm:gap-2 select-none w-100 ${
                                !hover ? "lg:justify-between" : "lg:gap-2"
                            }`}
                        >
                            <Image
                                alt=""
                                src={`/assets/Icon/lang/${el}.svg`}
                                className="w-[25px] relative h-100"
                                fill
                            />
                            <div className="flex gap-1">
                                <p
                                    className={`${
                                        !hover && "lg:hidden"
                                    } flex body flex-grow-1
								${el === "ar" && "font-ara"}
								${el === "he" && "font-heb"}
								${el === "ru" && "font-norm"}
								${el === "en" && "font-norm"}
								`}
                                >
                                    {languages[el as keyof typeof languages]}
                                </p>
                                <span>
                                    {appLang === el && (
                                        <CheckCircle
                                            width={!hover ? "12" : ""}
                                        />
                                    )}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SidebarAdditionalMenu;
