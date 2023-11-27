import React from "react";
import { IconProps } from "types/IconProps";
import { useIsReverse } from "hooks/useIsReverse";

const SmallArrow: React.FC<IconProps> = props => {
    const isReverse = useIsReverse();

    return (
        <div className={`${isReverse && "rotate-180"}`}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={props?.height || "20"}
                height={props?.width || "20"}
                viewBox={`0 0 ${props?.width || "20"} ${props?.height || "20"}`}
                fill="none"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.7365 6.26361C15.088 6.61508 15.088 7.18493 14.7365 7.5364L10.2729 12L14.7365 16.4636C15.088 16.8151 15.088 17.3849 14.7365 17.7364C14.385 18.0879 13.8152 18.0879 13.4637 17.7364L8.3637 12.6364C8.01223 12.2849 8.01223 11.715 8.3637 11.3636L13.4637 6.2636C13.8152 5.91213 14.385 5.91213 14.7365 6.26361Z"
                    fill={props?.fill || "white"}
                />
            </svg>
        </div>
    );
};

export default SmallArrow;
