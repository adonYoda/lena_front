/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/no-autofocus */
import React, { useEffect, useRef, useState } from "react";

interface SearchPropsTypes {
    setValue: (value: string) => void;
}

const Search: React.FC<SearchPropsTypes> = ({ setValue }) => {
    const [focus, setFocus] = useState<boolean>(false);
    const [ownValue, setOwnValue] = useState<string>("");

    const searchRef = useRef<HTMLDivElement>(null);

    const inputRef = useRef<HTMLInputElement>(null);

    const setAutoFocus = (e: MouseEvent) => {
        if (
            e.target === searchRef.current ||
            searchRef.current?.contains(e.target as Node)
        ) {
            inputRef?.current?.focus();
        } else {
            setFocus(false);
        }
    };

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (event.key === "Enter") {
                setValue(ownValue)
            }
        };

        window.addEventListener("keydown", handleKeyPress);

        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [ownValue, setValue]);

    useEffect(() => {
        if (window) {
            window.addEventListener("click", setAutoFocus);

            return () => {
                window.addEventListener("click", setAutoFocus);
            };
        }
    }, []);

    return (
        <div
            className="bg-white border-bg-secondary w-[35%] h-[52px] border-[1px] rounded-24 gap-2 px-5 flex items-center"
            ref={searchRef}
        >
            <div>
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
                        d="M10.75 3.5C6.74594 3.5 3.5 6.74594 3.5 10.75C3.5 14.7541 6.74594 18 10.75 18C12.4277 18 13.9722 17.4302 15.2007 16.4735L19.4636 20.7364C19.8151 21.0879 20.3849 21.0879 20.7364 20.7364C21.0878 20.3849 21.0878 19.8151 20.7364 19.4636L16.4735 15.2007C17.4302 13.9722 18 12.4277 18 10.75C18 6.74594 14.7541 3.5 10.75 3.5ZM10.75 5.3C7.74005 5.3 5.3 7.74005 5.3 10.75C5.3 13.76 7.74005 16.2 10.75 16.2C13.76 16.2 16.2 13.76 16.2 10.75C16.2 7.74005 13.76 5.3 10.75 5.3Z"
                        fill="#BFC1C7"
                    />
                </svg>
            </div>

            <input
                className="outline-none h-100 text-text-input body w-100"
                type="text"
                ref={inputRef}
                autoFocus={focus}
                value={ownValue}
                onChange={({ target: { value: changeValue } }) => {
                    setOwnValue(changeValue);
                    setValue(changeValue);
                }}
            />
        </div>
    );
};

export default Search;
