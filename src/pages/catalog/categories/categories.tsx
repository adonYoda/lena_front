import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useTokenStore } from "stores/tokenStore";
import { useIsReverse } from "hooks/useIsReverse";

const Categories = () => {
  const reverse = useIsReverse();
  const { t } = useTranslation("admin");
  const {setCatalogWindow} = useTokenStore();

  useEffect(() => {
    setCatalogWindow(3);
  }, []
);


  return (
    <div className="p-4">
      <h1 className={`mb-5 ${!reverse ? "left: 0" : "right:0"} flex `}>
          {t("categories")}
      </h1>
      Categories
    </div>    
  )
};
export default Categories;