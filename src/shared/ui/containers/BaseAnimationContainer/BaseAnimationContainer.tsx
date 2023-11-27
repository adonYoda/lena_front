/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./styles.module.css";

const BaseAnimationContainer: React.FC<{
    children: any;
    inAnimation: boolean;
}> = ({ children, inAnimation }) => (
    <CSSTransition
        in={inAnimation}
        timeout={100}
        unmountOnExit
        classNames={{
            enter: styles["alert-enter"],
            enterActive: styles["alert-enter-active"],
            exit: styles["alert-exit-active"],
            exitActive: styles["alert-exit-active"],
        }}
    >
        {children as any}
    </CSSTransition>
);

export default BaseAnimationContainer;
