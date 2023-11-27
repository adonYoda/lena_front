/* eslint-disable consistent-return */
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const ButtonDiv = styled.div<{ color: string }>`
    height: 28px;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        width: 44px;
        height: 44px;
        top: -9px;
        left: -8px;
        background: ${props => props.color};
        z-index: 10;
        transition: 150ms;
        border-radius: 100%;
    }
    .toggle-mnu {
        display: block;
        width: 28px;
        height: 28px;
        z-index: 25;
    }

    .toggle-mnu span:after,
    .toggle-mnu span:before {
        content: "";
        position: absolute;
        /* width: 15px; */
        right: 0;
        top: 9px;
        z-index: 25;
    }

    .toggle-mnu span::before {
        top: 4px;
        z-index: 25;
    }

    .toggle-mnu span:after {
        top: 10px;
        z-index: 25;

        /* width: 25px; */
    }
    .toggle-mnu span {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: end;
        width: 13px;
        z-index: 25;

        transform: translateX(8px) translateY(3px);
    }
    .toggle-mnu span,
    .toggle-mnu span:after,
    .toggle-mnu span:before {
        /* width: 100%; */
        height: 3px;
        background: #fff;
        transition: all 0.3s;
        backface-visibility: hidden;
        border-radius: 2px;
        margin-top: 2px;
        z-index: 25;
    }

    .toggle-mnu span:before {
        width: 18px;
    }

    .toggle-mnu span:after {
        width: 8px;
    }

    .toggle-mnu.on span {
        display: block;
        transform: translateX(2px) translateY(-1px);
        width: 25px;
        background-color: transparent;
    }
    .toggle-mnu.on span:before {
        transform: rotate(45deg) translate(-1px, 0px);
        background-color: #3a55f8;
        width: 100%;
        top: 9px;
    }
    .toggle-mnu.on span:after {
        transform: rotate(-45deg) translate(6px, -7px);
        background-color: #3a55f8;
        width: 100%;
        top: 18px;
    }
`;

const AssetsButton: React.FC<{
    setActive: (value: boolean) => void;
    active: boolean;
}> = ({ setActive, active }) => {
    const ref = useRef<HTMLDivElement>(null);

    const event = (e: MouseEvent) => {
        if (
            e.target === ref.current ||
            ref.current?.contains(e.target as Node)
        ) {
            setActive(!active);
        }
    };

    useEffect(() => {
        if (window) {
            window.addEventListener("click", event);

            return () => window.removeEventListener("click", event);
        }
    }, [active]);

    return (
        <ButtonDiv color={active ? "white" : "#3A55F8"} ref={ref}>
            <div className={`toggle-mnu ${active && "on"} hidden-lg`}>
                <span />
            </div>
        </ButtonDiv>
    );
};

export default AssetsButton;
