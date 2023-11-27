import React from "react";
import { useTranslation } from "next-i18next";

type SwitchProps = {
    active: number;
    values: string[];
    changeActive: (val: number) => void;
};

const Switch: React.FC<SwitchProps> = ({ active, values, changeActive }) => {
    const { t } = useTranslation("index");

    return (
        <div className="w-[100%] flex bg-white border border-border rounded-[25px] gap-1">
            {values.map((el, key) => (
                <div
                    key={el}
                    style={{ width: `${Math.round(100 / values.length)}%` }}
                    className={`text-center duration-[0.1s] ease-in p-2 cursor-pointer rounded-[20px] ${
                        active === key ? "bg-lightgray" : ""
                    }`}
                    onClick={() => changeActive(key)}
                >
                    <p
                        className={`sans duration-[0.1s] ease-in font-extralight ${
                            active === key ? "text" : "text-text-secondary"
                        }`}
                    >
                        {t(el)}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Switch;
