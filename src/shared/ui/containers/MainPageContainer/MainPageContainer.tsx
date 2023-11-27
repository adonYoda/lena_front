import React from "react";
import { MainPageContainerType } from "./container.types";

const MainPageContainer: React.FC<MainPageContainerType> = ({ children }) => (
    <div className="w-[100vw] h-[100vh md:h-[auto] relative flex md:flex-col sm:flex-col items-center md:items-end justify-end bg-white overflow-hidden flex-row">
        {children}
    </div>
);

export default MainPageContainer;
