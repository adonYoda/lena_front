import React from "react";
import { IconProps } from "types/IconProps";

export type ItemState = "active" | "hover" | "disable" | "standard";

export type MenuItemProps = {
    Icon: React.FC<IconProps>;
    text: string;
    activeState: boolean;
    disable?: boolean;
    hover: boolean;
    dropdown?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onClick: (x?: any) => void;
};
