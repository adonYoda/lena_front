import React from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import useAppStore from "stores/appStore";
import ClientIcon from "../../assets/mainmenu/ClientIcon";
import DocsIcon from "../../assets/mainmenu/DocsIcon";
import CatalogIcon from "../../assets/mainmenu/CatalogIcon";
import SettingIcon from "../../assets/mainmenu/SettingIcon";
import MenuItem from "../MenuItem";

const SidebarMainMenu: React.FC<{ tabletOpen: boolean }> = ({ tabletOpen }) => {
    const { t } = useTranslation("admin");

    const { activePage, setActivePage } = useAppStore();

    return (
        <div className="flex flex-col gap-6 w-100">
            <Link href="/catalog">
                <MenuItem
                    hover={tabletOpen}
                    text={t("catalog")}
                    disable={false}
                    Icon={CatalogIcon}
                    activeState={activePage === "catalog"}
                    onClick={() => {
                        setActivePage("catalog");
                    }}
                />
            </Link>
            <Link href="/participants">
                <MenuItem
                    hover={tabletOpen}
                    text={t("participants")}
                    disable={false}
                    Icon={ClientIcon}
                    activeState={activePage === "participants"}
                    onClick={() => {
                        setActivePage("participants");
                    }}
                />
            </Link>
            <Link href="/employees">
                <MenuItem
                    hover={tabletOpen}
                    text={t("employees")}
                    disable={false}
                    Icon={ClientIcon}
                    activeState={activePage === "employees"}
                    onClick={() => {
                        setActivePage("employees");
                    }}
                />
            </Link>
            <MenuItem
                hover={tabletOpen}
                text={t("documents")}
                disable={false}
                Icon={DocsIcon}
                activeState={activePage === "documents"}
                onClick={() => {
                    setActivePage("documents");
                }}
            />
            
            <MenuItem
                hover={tabletOpen}
                text={t("settings")}
                disable={false}
                Icon={SettingIcon}
                activeState={activePage === "settings"}
                onClick={() => {
                    setActivePage("settings");
                }}
            />
        </div>
    );
};

export default SidebarMainMenu;
