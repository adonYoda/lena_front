import React from "react";
import { useTranslation } from "react-i18next";
import "react-loading-skeleton/dist/skeleton.css";
import { useIsReverse } from "../../hooks/useIsReverse";

const Employees = () => {
    const reverse = useIsReverse();
    const { t } = useTranslation("admin");
    return (
        <div className="p-4">
            <h1 className={`mb-5 ${!reverse ? "left: 0" : "right:0"} flex `}>
                {t("employees")}
            </h1>
            <div
                className={`relative mt-4 ${
                    reverse ? "xxl:pl-64 xl:pl-20" : "xxl:pr-64 xl:pr-20"
                }`}
            >
              Body
            </div>
        </div>
    );
};

export default Employees;