/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";

interface PriceInputProps {
    value: number;
    disable: boolean;
    setValue: (price: number) => Promise<void>;
    removeValue: () => Promise<void>;
    borderRadius: string;
}

const PriceInput: React.FC<PriceInputProps> = ({
    value,
    setValue,
    removeValue,
    disable,
    borderRadius,
}) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [price, setNewPrice] = useState<number>(value);
    

    const ref = useRef<HTMLDivElement>(null);

    const clickInput = (e: MouseEvent) => {
        if (
            e.target !== ref.current &&
            !ref.current?.contains(e.target as Node) &&
            !disable
        ) {
            setEdit(false);
        }
        if (
            (e.target === ref.current ||
                ref.current?.contains(e.target as Node)) &&
            !disable
        ) {
            setEdit(true);
        }
    };

    const handleInputChange = (inputValue: number) => {
        setNewPrice(inputValue)
    }

    
    useEffect(() => {
        window.addEventListener("click", clickInput);

        return () => window.removeEventListener("click", clickInput);
    }, []);

    return (
        <div
            ref={ref}
            className={`min-h-[100%] max-w-[content] min-w-[176px] px-3 py-2 bg-secondary bg-opacity-10 rounded-[${borderRadius}] justify-center items-center gap-2 inline-flex ${
                disable && "opacity-50"
            } `}
        >
            <div className="rounded-[20px] justify-center items-center gap-1 flex">
                <div className="relative w-4 h-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                    >
                        <path
                            d="M3 13V3H6.5C7.42826 3 8.3185 3.35119 8.97487 3.97631C9.63125 4.60143 10 5.44928 10 6.33333V9.66667"
                            stroke="#3DCC3D"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M13 3V13H9.5C8.57174 13 7.6815 12.6488 7.02513 12.0237C6.36875 11.3986 6 10.5507 6 9.66667V6.33333"
                            stroke="#3DCC3D"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
                <div className="text-base font-normal leading-tight text-secondary">
                    {!edit ? (
                        <p>{value}</p>
                    ) : (
                        <input
                            type="text"
                            value={price}
                            className="w-[60px] bg-[transparent]"
                            onChange={(e) => {
                                const regex = /^\d*$/;
                                const inputValue = e.target.value;
                                if (regex.test(inputValue)) {
                                    handleInputChange(+inputValue);
                                }
                                
                            }}
                        />
                    )}
                </div>
            </div>
            <div className="relative w-4 h-4">
                {edit ? (
                    <div className="flex gap-1">
                        <div
                            onClick={() => {
                                setValue(price);
                                setEdit(false);
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                            >
                                <rect
                                    width="16"
                                    height="16"
                                    rx="8"
                                    fill="#0DC268"
                                    fillOpacity="0.1"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M13.4715 4.19526C13.7318 4.45561 13.7318 4.87772 13.4715 5.13807L6.47149 12.1381C6.21114 12.3984 5.78903 12.3984 5.52868 12.1381L2.86201 9.47141C2.60166 9.21106 2.60166 8.78895 2.86201 8.5286C3.12236 8.26825 3.54447 8.26825 3.80482 8.5286L6.00008 10.7239L12.5287 4.19526C12.789 3.93491 13.2111 3.93491 13.4715 4.19526Z"
                                    fill="#0DC268"
                                />
                            </svg>
                        </div>
                        <div
                            onClick={() => {
                                removeValue()
                                setEdit(false);
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                            >
                                <rect
                                    width="16"
                                    height="16"
                                    rx="8"
                                    fill="#ED0A34"
                                    fillOpacity="0.1"
                                />
                                <path
                                    d="M3.50901 3.50911C3.74332 3.27479 4.12322 3.2748 4.35753 3.50911L7.99993 7.15152L11.6423 3.50913C11.8767 3.27481 12.2566 3.27481 12.4909 3.50913C12.7252 3.74344 12.7252 4.12334 12.4909 4.35766L8.84845 8.00005L12.4909 11.6425C12.7252 11.8768 12.7252 12.2567 12.4908 12.491C12.2565 12.7253 11.8766 12.7253 11.6423 12.491L7.99992 8.84858L4.35752 12.491C4.1232 12.7253 3.7433 12.7253 3.50899 12.491C3.27467 12.2567 3.27467 11.8768 3.50899 11.6424L7.1514 8.00005L3.509 4.35764C3.27469 4.12332 3.27469 3.74342 3.50901 3.50911Z"
                                    fill="#ED0A34"
                                />
                            </svg>
                        </div>
                    </div>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                    >
                        <path
                            d="M9.48559 3.95149L12.0485 6.51441L5.90915 12.6476C5.35057 13.2062 4.66332 13.619 3.90782 13.8496L1.81114 14.4897C1.62857 14.5455 1.45575 14.3671 1.51019 14.1888L2.15021 12.0922C2.38089 11.3365 2.79373 10.6491 3.35241 10.0904L9.48559 3.95149ZM13.1581 1.81736L14.1826 2.84194C14.5793 3.23865 14.6041 3.86647 14.257 4.29209L13.0885 5.46509L10.5349 2.91146L11.6257 1.81733C12.0489 1.39421 12.7349 1.39423 13.1581 1.81736Z"
                            fill="#3DCC3D"
                        />
                    </svg>
                )}
            </div>
        </div>
    );
};

export default PriceInput;
