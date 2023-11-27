import React, { useCallback, useEffect, useRef, useState } from "react";
import { CodeInputProps } from "./Codeinput.types";

const CodeInput: React.FC<CodeInputProps> = React.memo(
    ({ valLength, setValue, error }) => {
        const ref = useRef<HTMLFormElement | null>(null);

        const [valuesArray, setValuesArray] = useState<string[]>([]);

        const detectActiveLabel = useCallback(() => {
            if (valuesArray.length === 0) {
                (ref.current?.children[0] as HTMLElement)?.focus();
            } else if (valuesArray.length === valLength) {
                (ref.current?.children[valLength - 1] as HTMLElement)?.focus();
            } else {
                (
                    ref.current?.children[valuesArray.length] as HTMLElement
                )?.focus();
            }
        }, [valLength, valuesArray.length]);

        useEffect(() => {
            detectActiveLabel();
            if (valuesArray.length === valLength) {
                setValue(valuesArray.join(""));
            } else {
                setValue("");
            }
        }, [detectActiveLabel, setValue, valLength, valuesArray]);

        return (
            <div className="relative" dir="ltr">
                <form
                    className="flex flex-row justify-center gap-2 sm:gap-1"
                    ref={ref}
                >
                    {new Array(valLength).fill(1).map((el, key) => (
                        <input
                            key={el}
                            type="number"
                            value={valuesArray[key] || ""}
                            placeholder={valuesArray.length <= key ? "0" : ""}
                            onChange={e => {
                                if (
                                    valuesArray.length <= valLength &&
                                    /^[0-9]$/g.test(e.target.value)
                                ) {
                                    setValuesArray([
                                        ...valuesArray,
                                        e.target.value,
                                    ]);
                                }
                            }}
                            name={`input${key}`}
                            maxLength={1}
                            onKeyDown={e => {
                                if (e.keyCode === 46 || e.keyCode === 8) {
                                    setValuesArray(
                                        valuesArray.slice(
                                            0,
                                            valuesArray.length - 1
                                        )
                                    );
                                }
                            }}
                            className={`border-[2px] body placeholder:body focus:border-primary outline-none caret-[rgba(44,45,46,1)] ${
                                error
                                    ? "border-error text-error"
                                    : !error && valuesArray.length > key
                                    ? "border-border-filled"
                                    : "border-border"
                            } select-none text-center w-[60px] h-[60px] sm:w-[46px] sm:h-[46px] md:h-[52px] md:w-[52px] lg:w-[52px] lg:h-[52px] rounded-full`}
                        />
                    ))}
                </form>
                <div
                    className="absolute top-0 w-100 h-100"
                    onClick={() => {
                        detectActiveLabel();
                    }}
                />
            </div>
        );
    }
);

export default CodeInput;
