import React from "react";
import { useIsReverse } from "hooks/useIsReverse";

const CloseTablet: React.FC<{ open: boolean; setOpen: () => void }> = ({
    open,
    setOpen,
}) => {
    const reverse = useIsReverse();

    return (
        <div
            className={`${
                open
                    ? reverse
                        ? ""
                        : "rotate-180"
                    : !reverse
                    ? "rotate-180"
                    : ""
            } bg-primary rounded-full duration-150`}
            onClick={() => {
                setOpen();
            }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.2635 6.26361C8.91203 6.61508 8.91203 7.18493 9.26351 7.5364L13.7271 12L9.2635 16.4636C8.91203 16.8151 8.91203 17.3849 9.26351 17.7364C9.61498 18.0879 10.1848 18.0879 10.5363 17.7364L15.6363 12.6364C15.9878 12.2849 15.9878 11.715 15.6363 11.3636L10.5363 6.2636C10.1848 5.91213 9.61498 5.91213 9.2635 6.26361Z"
                    fill="white"
                />
            </svg>
        </div>
    );
};

export default CloseTablet;
