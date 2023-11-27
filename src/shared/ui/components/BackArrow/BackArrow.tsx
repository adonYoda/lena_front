import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const BackArrow = React.memo<{
    onClick?: () => void;
    text?: string;
    rotate?: boolean;
    color?: string;
    textColor?: string;
    showText?: boolean;
}>(({ onClick, text, rotate, color, showText = true, textColor }) => {
    const { t } = useTranslation("index");

    const { locale } = useRouter();

    const [hover, setHover] = useState(false);

    return (
        <div
            className="flex items-center justify-center gap-0 cursor-pointer"
            onMouseEnter={() => {
                setHover(true);
            }}
            onMouseLeave={() => {
                setHover(false);
            }}
            onClick={() => {
                if (onClick) {
                    onClick();
                }
            }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                onMouseEnter={() => {
                    setHover(true);
                }}
                onMouseLeave={() => {
                    setHover(false);
                }}
                className={`${
                    hover ? "fill-button-hover" : "fill-primary"
                } sm:w-[20px] sm:h-[20px] ${
                    locale === "he" || locale === "ar"
                        ? rotate
                            ? ""
                            : "rotate-180"
                        : rotate
                        ? "rotate-180"
                        : ""
                }`}
            >
                <path
                    d="M11.5319 4.25911C11.8563 4.579 11.8868 5.08447 11.6208 5.43913L11.5409 5.53187L6.05 11.1L20.1 11.1C20.5971 11.1 21 11.5029 21 12C21 12.4588 20.6567 12.8375 20.2129 12.893L20.1 12.9H6.05L11.5409 18.4681C11.8608 18.7926 11.884 19.2984 11.6131 19.6493L11.5319 19.7409C11.2074 20.0608 10.7016 20.084 10.3507 19.8131L10.2591 19.7319L3.25911 12.6319C2.94242 12.3107 2.91603 11.8109 3.17994 11.4599L3.25911 11.3681L10.2591 4.26813C10.6081 3.91418 11.1779 3.91014 11.5319 4.25911Z"
                    fill={color || "#3A55F8"}
                />
            </svg>
            {showText && (
                <p
                    className={`${
                        hover
                            ? textColor || "text-button-hover"
                            : textColor || "text-primary"
                    }`}
                    onMouseEnter={() => {
                        setHover(true);
                    }}
                    onMouseLeave={() => {
                        setHover(false);
                    }}
                >
                    {text || t("back")}
                </p>
            )}
        </div>
    );
});

export default BackArrow;
