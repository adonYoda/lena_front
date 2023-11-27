/* eslint-disable react/require-default-props */
import React from "react";

type CheckCircleProps = {
    width?: string;
};

const CheckCircle: React.FC<CheckCircleProps> = ({ width = "" }) => (
    <>
        <div className="sm:scale-[78%]">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={width || "24"}
                height={width || "24"}
                viewBox="0 0 16 16"
                fill="none"
            >
                <g clipPath="url(#clip0_7782_1615)">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM11.9363 6.7365C12.2878 6.38503 12.2878 5.81518 11.9363 5.46371C11.5848 5.11224 11.015 5.11224 10.6635 5.46371L6.9 9.22723L5.33903 7.66626C4.98756 7.31479 4.41771 7.31479 4.06624 7.66626C3.71477 8.01773 3.71477 8.58758 4.06624 8.93905L6.26361 11.1364C6.43239 11.3052 6.66131 11.4 6.9 11.4C7.1387 11.4 7.36762 11.3052 7.5364 11.1364L11.9363 6.7365Z"
                        fill="#0DC268"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_7782_1615">
                        <rect width="16" height="16" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    </>
);

export default CheckCircle;
