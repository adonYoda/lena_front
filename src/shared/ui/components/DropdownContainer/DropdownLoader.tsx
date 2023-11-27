import React from "react";
import Skeleton from "react-loading-skeleton";

const DropdownLoader: React.FC<{ header: string }> = ({ header }) => (
    <div>
        <>
            <h2>{header}</h2>
            <Skeleton className="my-8 w-100 h-[70px] rounded-24" />
        </>
        <>
            <h2>{header}</h2>
            <Skeleton className="my-8 w-100 h-[120px] rounded-24" />
        </>
    </div>
);

export default DropdownLoader;
