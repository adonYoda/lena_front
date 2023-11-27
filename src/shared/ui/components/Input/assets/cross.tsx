import React from "react";

const Cross: React.FC<{ color: string; onClick: () => void }> = ({
    ...otherProps
}) => (
    <div>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            onClick={() => {
                if (otherProps.onClick) {
                    otherProps.onClick();
                }
            }}
            className="cursor-pointer sm:scale-[78%]"
        >
            <path
                d="M7.5364 6.2636C7.18492 5.91213 6.61508 5.91213 6.2636 6.2636C5.91213 6.61508 5.91213 7.18492 6.2636 7.5364L10.7272 12L6.2636 16.4636C5.91213 16.8151 5.91213 17.3849 6.2636 17.7364C6.61508 18.0879 7.18492 18.0879 7.5364 17.7364L12 13.2728L16.4636 17.7364C16.8151 18.0879 17.3849 18.0879 17.7364 17.7364C18.0879 17.3849 18.0879 16.8151 17.7364 16.4636L13.2728 12L17.7364 7.5364C18.0879 7.18492 18.0879 6.61508 17.7364 6.2636C17.3849 5.91213 16.8151 5.91213 16.4636 6.2636L12 10.7272L7.5364 6.2636Z"
                fill="#ED0A34"
            />
        </svg>
    </div>
);

export default Cross;
