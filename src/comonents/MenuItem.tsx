/* eslint-disable sonarjs/cognitive-complexity */
import React, { useEffect, useRef } from "react";
import { useIsReverse } from "hooks/useIsReverse";
import { MenuItemProps } from "types/MenuItemProp";

const MenuItem: React.FC<MenuItemProps> = ({
    Icon,
    text,
    activeState,
    disable,
    onClick,
    hover,
    dropdown,
}) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function clickOnItem(e: MouseEvent) {
            if (
                (e.target === ref.current ||
                    ref.current?.contains(e.target as Node)) &&
                !disable
            ) {
                if (!dropdown) {
                    onClick();
                } else {
                    onClick(activeState);
                }
            }
        }

        window.addEventListener("click", clickOnItem);

        return () => window.removeEventListener("click", clickOnItem);
    }, [activeState, disable, dropdown, onClick]);

    const reverse = useIsReverse();

    return (
        <div
            className={`relative flex select-none items-center ${
                !disable && "cursor-pointer"
            } xxl:gap-2 xl:gap-2 lg:gap-2 md:gap-2 sm:gap-1 duration-200 h-[40px] w-100`}
            ref={ref}
        >
            <div
                className={`sm:p-2 md:p-2 rounded-full ${
                    activeState
                        ? "sm:bg-success md:bg-success"
                        : disable
                        ? "md:bg-divider sm:bg-divider"
                        : "sm:bg-white md:bg-white"
                }`}
            >
                <Icon
                    status={
                        activeState
                            ? "active"
                            : disable
                            ? "disable"
                            : "standard"
                    }
                />
            </div>

            <div
                className={`${
                    hover ? "" : "lg:hidden"
                } overflow-hidden duration-150`}
            >
                {!activeState ? (
                    <p
                        className={`body ${disable && "text-text-secondary"} ${
                            !disable && "text-text sm:text-white md:text-white"
                        } `}
                    >
                        {text}
                    </p>
                ) : (
                    <h4 className="py-[2px] sm:text-white md:text-white">
                        {text}
                    </h4>
                )}
            </div>
            {dropdown && (
                <div
                    className={`flex items-center justify-center duration-100 ${
                        activeState && "rotate-[180deg]"
                    }`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                    >
                        <path
                            d="M5.00002 3.77843L8.77324 0.671073C9.09298 0.407755 9.56565 0.453497 9.82897 0.773241C10.0923 1.09298 10.0465 1.56565 9.7268 1.82897L5.4768 5.32897C5.19986 5.55704 4.80018 5.55704 4.52324 5.32897L0.273241 1.82897C-0.0465031 1.56565 -0.0922451 1.09298 0.171073 0.773241C0.434392 0.453497 0.907058 0.407755 1.2268 0.671073L5.00002 3.77843Z"
                            className="fill-primary md:fill-white sm:fill-white"
                        />
                    </svg>
                </div>
            )}

            <div
                className={`absolute duration-[150ms] ${
                    activeState && !dropdown ? "w-[4px]" : "w-[0px]"
                } h-100 ${
                    reverse ? "left-0" : "right-0"
                } rounded-[5px] bg-primary sm:bg-secondary md:bg-secondary`}
            />
        </div>
    );
};

export default MenuItem;
