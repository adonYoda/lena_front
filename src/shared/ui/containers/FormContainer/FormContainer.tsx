import React, { ReactElement } from "react";

const FormContainer: React.FC<{ children: ReactElement[] }> = ({
    children,
}) => (
    <div className="relative xxl:min-w-[50vw] xl:min-w-[50vw] lg:min-w-[50vw] md:w-100 sm:w-100">
        <div className="relative z-[15] h-[100vh] md:h-[auto] sm:h-[auto] lg:h-[100vh] overflow-x-hidden  md:w-[100%] lg:w-[100%] md:m-[auto] sm:w-100 border border-border md:border-none sm:border-none px-3 shadow-xl md:shadow-[none] flex items-center justify-center md:mt-[5px] md:items-center sm:px-4 sm:pb-6 sm:pt-[14px] md:px- md:py- lg:px-16 lg:py-25 xl:px-16 xl:py-25 xxl:px-16 xxl:py-25">
            {children}
        </div>
        <div className="absolute top-[-25px] hidden sm:block md:block z-50 left-0 w-100 h-[32px] md:rounded-t-[32px] sm:rounded-t-[24px] bg-white" />
    </div>
);

export default FormContainer;
