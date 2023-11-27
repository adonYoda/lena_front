import React from "react";
import { useTranslation } from "react-i18next";
import { useIsReverse } from "hooks/useIsReverse";

const Clients = () => {
  const reverse = useIsReverse();
  const { t } = useTranslation("admin");

  return (
    <div className="p-4">
      <h1 className={`mb-5 ${!reverse ? "left: 0" : "right:0"} flex `}>
          {t("clients")}
      </h1>
      Clients
      ghghf
      fghhg
      gfhhgdfg
    </div>    
  )
};
export default Clients;