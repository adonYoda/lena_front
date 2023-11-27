import React from "react";

const Arrow: React.FC = () => (
    <div>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            className="duration-100"
        >
            <rect
                x="48"
                y="48"
                width="48"
                height="48"
                rx="24"
                transform="rotate(180 48 48)"
                fill="#DBDEE4"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M37.6101 30.3712C37.002 31.0991 35.9001 31.2115 35.1489 30.6222L24 21.8773L12.8511 30.6222C12.0999 31.2115 10.998 31.0991 10.3899 30.3712C9.78176 29.6433 9.89775 28.5756 10.649 27.9864L22.8989 18.3777C23.541 17.8741 24.459 17.8741 25.1011 18.3777L37.351 27.9864C38.1022 28.5756 38.2182 29.6433 37.6101 30.3712Z"
                fill="#BFC1C7"
            />
        </svg>
    </div>
);

export default Arrow;
