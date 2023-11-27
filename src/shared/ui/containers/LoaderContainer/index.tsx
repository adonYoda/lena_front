import React, { ReactNode } from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import { useRouter } from "next/router";

const StyledContainer = styled.div`
    &.alert-enter {
        opacity: 0;
        transform: scale(0.9);
        transform: translateY(-100px);
    }
    &.alert-enter-active {
        opacity: 1;
        transform: translateX(0);
        transition: opacity 100ms, transform 100ms;
    }
    &.alert-exit {
        opacity: 1;
    }
    &.alert-exit-active {
        opacity: 0;
        transform: translateY(-10px);
        transition: opacity 100ms, transform 100ms;
    }

    @keyframes ldio-5au1vi7jjqd {
        0% {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(30deg);
        }
        100% {
            transform: rotate(60deg);
        }
    }
    .ldio-5au1vi7jjqd > div {
        transform-origin: 50.5px 50.5px;
        animation: ldio-5au1vi7jjqd 0.2331002331002331s infinite linear;
    }
    .ldio-5au1vi7jjqd > div div {
        position: absolute;
        width: 17.17px;
        height: 74.74px;
        background: #3a55f8;
        left: 50.5px;
        top: 50.5px;
        transform: translate(-50%, -50%);
    }
    .ldio-5au1vi7jjqd > div div:nth-child(1) {
        width: 54.54px;
        height: 54.54px;
        border-radius: 50%;
    }
    .ldio-5au1vi7jjqd > div div:nth-child(5) {
        width: 18.18px;
        height: 18.18px;
        background: #ffffff;
        border-radius: 50%;
    }
    .ldio-5au1vi7jjqd > div div:nth-child(3) {
        transform: translate(-50%, -50%) rotate(60deg);
    }
    .ldio-5au1vi7jjqd > div div:nth-child(4) {
        transform: translate(-50%, -50%) rotate(120deg);
    }
    .loadingio-spinner-gear-ajq1j5uotjn {
        width: 101px;
        height: 101px;
        display: inline-block;
        overflow: hidden;
        background: #ffffff;
    }
    .ldio-5au1vi7jjqd {
        width: 100%;
        height: 100%;
        position: relative;
        transform: translateZ(0) scale(1);
        backface-visibility: hidden;
        transform-origin: 0 0; /* see note above */
    }
    .ldio-5au1vi7jjqd div {
        box-sizing: content-box;
    }
`;

const LoaderContainer: React.FC<{ children: Element[] }> = ({ children }) => {
    const { pathname } = useRouter();

    function returnBoolean() {
        return pathname !== "/";
    }

    return (
        <>
            <div className="relative flex flex-col items-center justify-center w-100 h-100">
                <StyledContainer>
                    <CSSTransition
                        in={returnBoolean()}
                        timeout={500}
                        unmountOnExit
                        classNames={{
                            enter: "alert-enter",
                            enterActive: "alert-enter-active",
                            exit: "alert-exit-active",
                            exitActive: "alert-exit-active",
                        }}
                    >
                        <div>
                            <div
                                className={`absolute flex gap-[5px] justify-center items-center top-0 duration-[350ms] ease-in left-0 z-30 w-[100vw] h-[100vh] bg-white `}
                            >
                                <div className="loadingio-spinner-gear-ajq1j5uotjn">
                                    <div className="ldio-5au1vi7jjqd">
                                        <div>
                                            <div /> <div /> <div /> <div />
                                            <div />
                                        </div>
                                    </div>
                                </div>
                                <h1 className="text-primary">Serv Expert</h1>
                            </div>
                        </div>
                    </CSSTransition>
                </StyledContainer>
                {children as ReactNode}
            </div>
        </>
    );
};

export default LoaderContainer;
