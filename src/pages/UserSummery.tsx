import React, { useEffect, useState } from "react";
import { useTokenStore } from "stores/tokenStore";

const UserSummery = () => {
    const { employeeName} = useTokenStore();

    const [emplName, setEmplName] = useState<string>("");
    const [firstSymbol, setFirstSymbol] = useState<string>("");

    useEffect(() => {
        if (employeeName !== undefined && employeeName !== null && employeeName.length > 0) {
            setEmplName(employeeName);
            setFirstSymbol(employeeName[0].toUpperCase());
        } else {
            setEmplName("Agent");
            setFirstSymbol("A");
        }

    }, [employeeName]
    );


    return (
        <div className="flex bg-white justify-between items-center p-3 rounded-[30px] h-100 w-[75%]">
            <div className="bg-[#4C91FF] rounded-full w-[40px] h-[40px] flex items-center justify-center">
                <h3 className="text-[#E0ECFF] py-1">
                    {firstSymbol}
                </h3>
            </div>
            <div className="flex flex-col items-end">
                <div className="">
                        <h6>
                            {emplName}
                        </h6>
                </div>
                <div className="">
                    <p className="body">Админ</p>
                </div>
            </div>
        </div>
    );
};

export default UserSummery;
