import React from "react";
import { useTranslation } from "react-i18next";
import { useIsReverse } from "hooks/useIsReverse";

const Wares = () => {
  const reverse = useIsReverse();
  const { t } = useTranslation("admin");
  return (
    <div className="p-4">
      <h1 className={`mb-5 ${!reverse ? "left: 0" : "right:0"} flex `}>
          {t("wares")}
      </h1>
      Wares
    </div>    
  )
};
export default Wares;