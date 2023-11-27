import React, { RefObject, useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./styles.module.css";

const PopupContainer: React.FC = () => {
    const testRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

    const [vis, setVis] = useState(false);

    function onClickWrapper(e: MouseEvent) {
        if (
            e.target === testRef.current ||
            testRef?.current?.contains(e.target as Node)
        ) {
            setVis(false);
        }
    }

    useEffect(() => {
        if (window) {
            window.addEventListener("click", onClickWrapper);

            window.removeEventListener("click", onClickWrapper);
        }
    }, []);

    return (
        <CSSTransition
            in={vis}
            timeout={250}
            unmountOnExit
            classNames={{
                enter: styles["alert-enter"],
                enterActive: styles["alert-enter-active"],
                exit: styles["alert-exit-active"],
                exitActive: styles["alert-exit-active"],
            }}
        >
            <div
                className="fixed w-[100vw] h-[100vh] bg-overlay z-[9999] left-0 top-0"
                ref={testRef}
            />
        </CSSTransition>
    );
};

export default PopupContainer;
