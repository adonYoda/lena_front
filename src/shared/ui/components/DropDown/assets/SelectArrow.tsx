import React from "react";

const SelectArrow = React.memo<{ rotate: boolean }>(({ rotate }) => (
    <div className={`duration-75 ease-in ${rotate && "rotate-180"}`}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.15557 2.29666C2.40812 1.96834 2.879 1.90693 3.20732 2.15948L6.00004 4.30772L8.79275 2.15948C9.12107 1.90693 9.59196 1.96834 9.84451 2.29666C10.0971 2.62498 10.0356 3.09586 9.70732 3.34841L6.45732 5.84841C6.18773 6.05579 5.81234 6.05579 5.54275 5.84841L2.29275 3.34841C1.96444 3.09586 1.90302 2.62498 2.15557 2.29666Z"
                fill="#2C2D2E"
            />
        </svg>
    </div>
));

export default SelectArrow;
