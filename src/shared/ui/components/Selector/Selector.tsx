import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import styles from "./styles.module.css"; // Подключите свои стили для селектора

interface SelectorProps {
    path: string;
    windows: string[];
    activeWindow: string;
    setActiveWindows: (value: string) => void;
}

const Selector: React.FC<SelectorProps> = ({
    path,
    windows,
    activeWindow,
    setActiveWindows,
}) => {
    const handleWindowClick = (index: string) => {        
        setActiveWindows(index);
    };
    const { t } = useTranslation("admin");
    return (
        <div className={styles.selector}>
            {windows.map((window, index) => (
                <Link href={`${path}/${window}`} >
                <div
                    key={window}
                    className={`${styles["selector-item"]} ${
                        index === windows.indexOf(activeWindow)
                            ? styles.active
                            : ""
                    }`}
                    onClick={() => handleWindowClick(window)}
                >
                    {t(window)}
                    <div
                        className={`rounded-[14px]  w-[40px] h-auto flex justify-center  ${
                            index === windows.indexOf(activeWindow)
                                ? "bg-[#3A55F81A]"
                                : "bg-bg-secondary"
                        }`}
                    >
                        <div
                            className={` m-[8px 4px] ${
                                index === windows.indexOf(activeWindow)
                                    ? "text-primary"
                                    : "text-icon-secondary"
                            } body`}
                        />
                    </div>
                </div> </Link>
            ))}
        </div>
    );
};

export default Selector;
