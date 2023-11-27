import React, { useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import AssetsButton from "ui/components/AssetsButton/AssetsButton";
import { useIsReverse } from "hooks/useIsReverse";
import Button from "ui/components/Button";
import BackArrow from "ui/components/BackArrow/BackArrow";
import { useTokenStore } from "stores/tokenStore";
import CloseTablet from "../../assets/CloseTablet";
import UserLogo from "../../assets/UserLogo";
import MobileLogo from "../../assets/MobileLogo";
import MenuItem from "../MenuItem";
import ExitIcon from "../../assets/ExitIcon";
import SidebarAdditionalMenu from "../../assets/SidebarAdditionalMenu";
import SidebarMainMenu from "./SidebarMainMenu";

const Sidebar = () => {
    const [open, setOpen] = useState<boolean>(false);
    const {setToken} = useTokenStore();

    const [tabletOpen, setTabletOpen] = useState<boolean>(false);

    const sidebarRef = useRef<HTMLDivElement>(null);

    const reverse = useIsReverse();

    const { t } = useTranslation("admin");

    const sidebarStyles: React.CSSProperties = {
        position: reverse ? "fixed" : "relative",
        right: reverse ? "0 !important" : "auto !important",
        left: reverse ? "auto !important" : "0 !important",
    };

    function exit() {
        setToken("eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJST0xFX0FETUlOIl0sInN1YiI6IjI3IiwiaWF0IjoxNzAwMzk0MzU4LCJleHAiOjE3MDEyNTgzNTh9.9eq9eq_aEw-IIvHk-455bbWul-vrLgjtGNjqURV91Oc");
    }
    

    return (
        <>
            <div
                className={`hidden ${
                    tabletOpen &&
                    "lg:block fixed w-[100vw] h-[100vh]top-0 bg-bg-secondary z-[998]"
                }`}
                onClick={() => {
                    setTabletOpen(false);
                }}
            />
            <div className="relative h-screen w-[100vw] left-0 z-[9999]">
                <div style={sidebarStyles}
                    className={`fixed top-[-1vh] h-[101vh] ${
                        open
                            ? "xxl:w-[320px] xl:w-[240px] lg:w-[] md:w-[100vw] sm:w-[100vw] md:left-[0] sm:left-[0]"
                            : tabletOpen
                            ? "xxl:w-[400px] xl:w-[] lg:w-[216px] md:w-[] sm:w-[]"
                            : "xxl:w-[320px] xl:w-[240px] lg:w-[80px] md:w-[0px] sm:w-[0px] md:left-[-25vw] sm:left-[-25vw]"
                    }  bg-white md:bg-primary sm:bg-primary duration-150`}
                    ref={sidebarRef}
                >
                    <div className="hidden lg:block absolute top-[8%] right-[-12px]">
                        <CloseTablet
                            setOpen={() => {
                                setTabletOpen(!tabletOpen);
                            }}
                            open={tabletOpen}
                        />
                    </div>

                    <div
                        className={`flex h-100 flex-col py-10 lg:py-5 md:mt-[40px] sm:mt-[40px] md:px-5 sm:px-3 ${
                            reverse
                                ? "xxl:pr-10 xl:pr-5 lg:pr-4"
                                : "xxl:pl-10 xl:pl-5 lg:pl-4"
                        }`}
                    >
                        <UserLogo tabletOpen={tabletOpen} />

                        <div className="flex flex-col items-center justify-evenly w-100 h-100">
                            <div className="w-100">
                                <SidebarMainMenu tabletOpen={tabletOpen} />
                            </div>

                            <div className="w-100">
                                <SidebarAdditionalMenu hover={tabletOpen} />
                            </div>

                            <div className="hidden md:block sm:block w-[80%]">
                                <Button
                                    secondary
                                    onClick={() => {
                                        // exit();
                                    }}
                                    additionalAfter={
                                        <BackArrow
                                            rotate
                                            color="white"
                                            showText={false}
                                        />
                                    }
                                >
                                    Выйти
                                </Button>
                            </div>

                            <div className="w-100 sm:hidden md:hidden">
                                <MenuItem
                                    hover={tabletOpen}
                                    text={t("exit")}
                                    disable={false}
                                    Icon={ExitIcon}
                                    activeState={false}
                                    onClick={() => {
                                        exit();
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute justify-between hidden p-5 w-100 md:flex sm:flex">
                    <MobileLogo open={open} />
                    <AssetsButton
                        setActive={(value: boolean) => {
                            setOpen(value);
                        }}
                        active={open}
                    />
                </div>
            </div>
        </>
    );
};

export default Sidebar;
