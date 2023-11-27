/* eslint-disable react/require-default-props */
/* eslint-disable consistent-return */
import React, { ReactNode, useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import Image from "next/image";
import Toggle from "react-toggle";
import Arrow from "./assets/Arrow";

import styles from "./styles.module.css";

interface DropdownProps {
    children: ReactNode;
    header: string;
    id: number;
    count: number;
    onToggle?: () => Promise<void>;
    active?: boolean;
    loading?: boolean;
    type: "toggle" | "dropdown";
    
}

const Dropdown: React.FC<DropdownProps> = ({
    children,
    header,
    id,
    count,
    onToggle,
    type,
   
    ...props
}) => {
    const [open, setOpen] = useState<boolean>(false);


    

    useEffect(() => {
        if (type === "toggle") {
            setOpen(true);
        }
    }, [type]);

    return (
        <div className=" items-center p-10 bg-white w-100 rounded-24 m-[32px]">
            <>
                <div className="flex  items-center justify-between w-100 p-2">
                    <div className="relative flex items-center gap-3">
                        <Image
                            src={`/assets/Icon/catalog/${id}.svg`}
                            alt=""
                            fill
                            className="relative w-[36px]"
                        />
                        <h2 className="flex gap-x-2">
                            {header}
                            <span className="text-text-secondary">
                                {" "}
                                {count}
                            </span>
                        </h2>
                    </div>
                    {type === "dropdown" ? (
                        <div
                            onClick={() => {
                               
                                setOpen(!open);
                            }}
                            className={`${
                                open ? "rotate-0" : "rotate-180"
                            } duration-100`}
                        >
                            <Arrow />
                        </div>
                    ) : (
                        <Toggle
                            checked={props?.active}
                            icons={false}
                            disabled={props?.loading}
                            onChange={() => {
                                if (onToggle) {
                                    onToggle();
                                }
                            }}
                        />
                    )}
                </div>
                <div className="mt-6">
                    <CSSTransition
                        in={open}
                        timeout={100}
                        unmountOnExit
                        classNames={{
                            enter: styles["slide-in-out-enter"],
                            enterActive: styles["slide-in-out-enter-active"],
                            exit: styles["slide-in-out-exit"],
                            exitActive: styles["slide-in-out-exit-active"],
                        }}
                    >
                        <div>{children}</div>
                    </CSSTransition>
                </div>
            </>
        </div>
    );
};

export default Dropdown;
