/* eslint-disable react/require-default-props */
import React from "react";
import { useTranslation } from "react-i18next";
import Edit from "./assets/Edit";
import Delete from "./assets/Delete";

interface Props {
    menuVisible?: (visible: boolean) => void;
    setPopUpVisible?: (visible: boolean) => void;
    setContMenuVisible: (visible: boolean) => void;
    serviceId?: number;
    setFavorsId?: (id: number) => void;
    setBackdropEditWindowOpen: (visible: boolean) => void;
}

const MoreVerticalMenu: React.FC<Props> = ({
    menuVisible,
    setPopUpVisible,
    setContMenuVisible,
    serviceId,
    setFavorsId,
    setBackdropEditWindowOpen
}) => {
    const { t } = useTranslation("catalog");

    return (
        <div
            className="bg-white flex p-[15px] flex-col h-auto w-[190px] shadow-[0px_4px_32px_0px] shadow-[#00103d29] rounded-[16px] mr-[20px] mt-[90px]"
            onClick={e => e.stopPropagation()}
        >
            <div
                className="flex flex-row mb-[20px] gap-[12px] "
                onClick={() => {
                    if(menuVisible && serviceId && setFavorsId){
                    menuVisible(true);
                    setContMenuVisible(false);
                    setFavorsId(serviceId);
                    setBackdropEditWindowOpen(true)
                    }
                }}
            >
                <Edit />
                <div>{t("edit")}</div>
            </div>
            <div
                className="flex flex-row gap-[12px]"
                onClick={() => {
                    if(setPopUpVisible && serviceId && setFavorsId) {
                    setPopUpVisible(true);
                    setContMenuVisible(false);
                    setFavorsId(serviceId);
                   
                }
                }}
            >
                <Delete />
                <div>{t("delete")}</div>
            </div>
        </div>
    );
};

export default MoreVerticalMenu;
