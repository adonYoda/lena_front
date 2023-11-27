import React from "react";
import { useIsReverse } from "hooks/useIsReverse";
import NotificationUser from "./NotificationUser";
import UserSummery from "./UserSummery";

const UserAsset = () => {
    const reverse = useIsReverse();
    const sidebarStyles: React.CSSProperties = {
        top: '40px',
        position: "absolute",
        left: reverse ? "40px" : "auto",
        right: reverse ? "auto" : "40px",
    };

    return (
        <div style={sidebarStyles} >
            <div className=" top-[40px] right-[40px] w-[261px] h-[60px] flex justify-between items-center">
                <NotificationUser />
                <UserSummery />
            </div>
        </div>
    );
};

export default UserAsset;
