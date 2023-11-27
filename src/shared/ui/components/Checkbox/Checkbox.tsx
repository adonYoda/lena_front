import React from "react";

interface Props {
    setCheckSubtype: (value: string)=> void
}

const Checkbox: React.FC<Props> = ({setCheckSubtype }) => {
    const handlerCheckboxCheck = () => {
            setCheckSubtype('1');
    };
    return (
        <div className="flex gap-1 px-4 pb-1">
            <input
                type="checkbox"
                onClick={() => {
                    handlerCheckboxCheck();
                }}
            />
            <p className="footnote">p</p>
        </div>
    );
};

export default Checkbox;
