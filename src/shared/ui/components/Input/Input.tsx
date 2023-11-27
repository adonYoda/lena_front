/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Russian from "assets/Icon/lang/Russian";
import Hebrew from "assets/Icon/lang/Hebrew";
import English from "assets/Icon/lang/English";
import { InputType } from "./Input.types";
import Cross from "./assets/cross";
import ShowPassword from "./assets/showPassword";
import CheckCircle from "../CheclCircle";
import Error from "./assets/error";
import BaseAnimationContainer from "../../containers/BaseAnimationContainer/BaseAnimationContainer";

const Input: React.FC<InputType> = React.memo<InputType>(
    ({
        value,
        setValue,
        type,
        name,
        placeholder,
        valueValidationFunction,
        error,
        label,
        valueVisible = true,
        visibleSuccess = true,
        autofocus = false,
        ...otherProps
    }) => {
        const [focus, setFocus] = useState<boolean>(false);

        const { locale } = useRouter();

        function clearValue() {
            setValue("");
        }

        function onChange(onChangeValue: string): void {
            if (
                valueValidationFunction &&
                !valueValidationFunction(onChangeValue)
            )
                return;
            setValue(onChangeValue);
        }

        function afterClick() {
            if (otherProps?.afterOnClick) {
                otherProps?.afterOnClick();
            }
        }

        function changeValueVisible() {
            if (otherProps?.setValueVisible) {
                otherProps?.setValueVisible();
            }
        }

        const ref = useRef<HTMLInputElement>(null);

        function changeInputFocus(e: MouseEvent) {
            if (
                e.target === ref?.current ||
                e.target === otherProps?.reference?.current
            ) {
                setFocus(true);
            } else {
                setFocus(false);
            }
        }

        useEffect(() => {
            if (window) {
                window.addEventListener("click", changeInputFocus);
            }

            window.removeEventListener("click", changeInputFocus);
        }, []);

        return (
            <div className="relative flex flex-col gap-3 w-100">
                <div className="flex gap-[3px] ">
                    {label === "Название на иврите" ||
                        label === "שם בעברית (חובה)" ||
                        (label === "Name in Hebrew" && <Hebrew />)}
                    {label === "Название на русском языке" ||
                        label === "Name in Russian" ||
                        (label === "שם ברוסית" && <Russian />)}
                    {label === "Название на английском языке" ||
                        label === "שם באנגלית" ||
                        (label === "Name in English" && <English />)}

                    {label !== "" && <h6>{label}</h6>}
                </div>

                <div
                    className={`border-[1px] text-[18px] py-1 rounded-[30px] xxl:h-[60px] xl:h-[60px] lg:h-[52px] md:h-[52px] sm:h-[48px] flex justify-center items-center px-5 ${
                        focus && !error && !otherProps.disabled
                            ? "border-primary hover:border-primary"
                            : error || (error && !otherProps.disabled)
                            ? "border-error"
                            : value !== "" && !error
                            ? "border-border-filled"
                            : "border-[#00103D1F]"
                    } ${
                        !otherProps?.disabled
                            ? "hover:border-[#00103D4D]"
                            : "border-[#00103D4D] bg-[#00103D0F]"
                    } duration-100`}
                >
                    <input
                        type={valueVisible ? "string" : "password"}
                        name={name}
                        dir="ltr"
                        autoFocus={autofocus}
                        minLength={otherProps.minLength ?? 0}
                        maxLength={otherProps?.maxLength ?? Infinity}
                        className={`truncate w-100 ${
                            otherProps?.disabled && "text-text-input"
                        } outline-none z-0 h-100 bg-none body ${
                            !valueVisible &&
                            value === "" &&
                            "placeholder:opacity-50"
                        } py-3 ${
                            error
                                ? "text-error"
                                : "text-text placeholder:body placeholder:opacity-50"
                        } ${
                            ["ar", "he"].includes(locale as string)
                                ? "placeholder:text-right text-right"
                                : ""
                        } ${
                            type === "code" && value !== "" && "tracking-[14px]"
                        }`}
                        value={value ?? ""}
                        placeholder={
                            type === "password" && valueVisible === false
                                ? Array(8).fill("•").join("")
                                : placeholder
                        }
                        disabled={otherProps.disabled}
                        onChange={({ target }) => {
                            onChange(target.value);
                        }}
                        ref={otherProps.reference || ref}
                    />
                    <div className="flex items-center justify-center gap-2">
                        <BaseAnimationContainer
                            inAnimation={
                                type === "password" && !otherProps.disabled
                            }
                        >
                            <ShowPassword
                                onClick={() => {
                                    changeValueVisible();
                                }}
                                showPassword={!!valueVisible}
                                color={error !== "" ? "#ED0A34" : ""}
                            />
                        </BaseAnimationContainer>
                        <BaseAnimationContainer
                            inAnimation={
                                value !== "" &&
                                !otherProps.disabled &&
                                error !== ""
                            }
                        >
                            <Cross
                                onClick={() => {
                                    clearValue();
                                }}
                                color={error !== "" ? "#ED0A34" : ""}
                            />
                        </BaseAnimationContainer>
                        <BaseAnimationContainer
                            inAnimation={
                                !error &&
                                visibleSuccess &&
                                value !== "" &&
                                value !== null &&
                                !otherProps.disabled
                            }
                        >
                            <CheckCircle />
                        </BaseAnimationContainer>
                    </div>
                </div>
                {otherProps?.afterLink && error === "" && (
                    <>
                        {typeof otherProps?.afterLink === "string" ? (
                            <div className="flex justify-end text-right w-100">
                                <p
                                    onClick={() => {
                                        afterClick();
                                    }}
                                >
                                    {otherProps?.afterLink}
                                </p>
                            </div>
                        ) : (
                            <>{otherProps?.afterLink}</>
                        )}
                    </>
                )}
                <BaseAnimationContainer inAnimation={!!error}>
                    <div className="flex items-center gap-2">
                        <Error />
                        <div>
                            {typeof error === "string" ? (
                                <p className=" footnote text-error">{error}</p>
                            ) : (
                                <>{error}</>
                            )}
                        </div>
                    </div>
                </BaseAnimationContainer>
            </div>
        );
    }
);

export default Input;
