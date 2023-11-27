/* eslint-disable sonarjs/cognitive-complexity */

import React from "react";
import { ButtonProps } from "./Button.types";

const Button = React.memo<ButtonProps>(
    ({
        children,
        onClick,
        submit,
        disabled = false,
        secondary = false,
        outlined = false,
        additionalClassName = "",
        activeAwaiting = false,
        isAwaiting,
        ...otherProps
    }) => {
        function onClickFunction() {
            if ((!disabled || !isAwaiting) && onClick) {
                onClick();
            }
        }
        return (
            <div
                onClick={() => {
                    onClickFunction();
                }}
                className={`w-100 relative ${additionalClassName} duration-200 border-[2px] ease-in xxl:h-[64px] xl:h-[64px] lg:h-[56px] md:h-[56px] sm:h-[48px] gap-[12px] rounded-[30px] button flex items-center justify-center select-none ${
                    (!disabled || isAwaiting) && "cursor-pointer"
                } text-center ${
                    secondary &&
                    `text-white bg-secondary border-secondary ${
                        disabled || isAwaiting
                            ? "bg-secondary-disabled border-secondary-disabled"
                            : "hover:bg-secondary-hover hover:border-secondary-hover"
                    }`
                } ${
                    outlined &&
                    ` bg-white ${
                        disabled || isAwaiting
                            ? "border-button-disabled text-button-disabled"
                            : " border-primary text-primary hover:border-x-button-hover hover:text-button-hover active:border-r-button-pressed active:text-button-pressed"
                    }`
                }  ${
                    !outlined &&
                    !secondary &&
                    `text-white ${
                        disabled || isAwaiting
                            ? "bg-button-disabled border-button-disabled"
                            : "bg-primary border-primary hover:bg-button-hover hover:border-button-hover active:bg-button-pressed active:border-button-pressed"
                    }`
                }}`}
            >
                {submit && !disabled && !isAwaiting && (
                    <>
                        <input
                            type="submit"
                            className="absolute top-0 left-0 opacity-0 w-100 h-100"
                        />
                    </>
                )}
                {!isAwaiting || !activeAwaiting ? (
                    <>
                        {otherProps?.additionalBefore}
                        {children}
                        {otherProps?.additionalAfter}
                    </>
                ) : (
                    <>
                        <div className="lds-ellipsis">
                            <div />
                            <div />
                            <div />
                            <div />
                        </div>
                    </>
                )}
            </div>
        );
    }
);

export default Button;
