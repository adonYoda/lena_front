/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo, useState } from "react";
import SelectArrow from "./assets/SelectArrow";

type SelectProps = {
    children: any;
    active: any;
};

const Select = memo<SelectProps>(({ children, active }) => {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <div className="relative flex items-center h-100">
            {visible && (
                <div className="absolute w-100 bottom-[-90px] sm:bottom-[-95px] flex gap-3 pt-6 flex-col bg-white p-2 left-0 rounded-b-[22px]">
                    {children.map((el: any) => (
                        <div
                            key={JSON.stringify(el)}
                            onClick={() => {
                                setVisible(false);
                            }}
                            className="relative flex items-center justify-start w-100"
                        >
                            {el as any}
                        </div>
                    ))}
                </div>
            )}
            <div
                onClick={() => {
                    setVisible(!visible);
                }}
                className="flex items-center h-100 z-10 justify-center gap-2 p-2 bg-white rounded-[22px]"
            >
                {active as any}
                <SelectArrow rotate={visible} />
            </div>
        </div>
    );
});

export default Select;
