import React from "react";

interface ActiveFilterProps {
    label: string;
    value: string[] | number | null;
    changeValue: (value: string[] | number | null) => void;
}

const ActiveFilter: React.FC<ActiveFilterProps> = ({
    label,
    value,
    changeValue,
}) => (
    <div className="select-none h-100">
        <div className="flex px-3 py-2 border h-100 border-primary whitespace-nowrap rounded-24 bg-[#3A55F81A]">
            <h5 className="text-link">{label}:&nbsp;</h5>
            {typeof value === "object" &&
                value?.map((el, i) => (
                    <p className="text-link">
                        {el}
                        {i === value.length - 1 ? "" : ";"}&nbsp;
                    </p>
                ))}
            {typeof value === "number" && <p className="text-link">{value}</p>}
            <div
                onClick={() => {
                    changeValue(value);
                }} 
                className="cursor-pointer"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                        d="M5.26363 5.2636C5.6151 4.91213 6.18495 4.91213 6.53642 5.26361L12 10.7272L17.4636 5.26363C17.8151 4.91216 18.385 4.91216 18.7364 5.26363C19.0879 5.6151 19.0879 6.18495 18.7364 6.53642L13.2728 12L18.7364 17.4636C19.0879 17.8151 19.0879 18.385 18.7364 18.7364C18.3849 19.0879 17.8151 19.0879 17.4636 18.7364L12 13.2728L6.53639 18.7364C6.18492 19.0879 5.61507 19.0879 5.2636 18.7364C4.91213 18.3849 4.91213 17.8151 5.26361 17.4636L10.7272 12L5.26363 6.53639C4.91216 6.18492 4.91216 5.61507 5.26363 5.2636Z"
                        fill="#3A55F8"
                    />
                </svg>
            </div>
        </div>
    </div>
);

export default ActiveFilter;
