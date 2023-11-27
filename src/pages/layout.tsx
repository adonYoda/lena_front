import React from "react";
import Sidebar from "comonents/siderbar/Sidebar";
import { useIsReverse } from "hooks/useIsReverse";
import UserAsset from "./UserAsset";

type CatalogProps = {
  children: React.JSX.Element | undefined;
}
 
export default function Layout({ children }: CatalogProps) {
  const reverse = useIsReverse();
  return (
    <div className="min-h-max bg-bg h-[300vh] w-100">
    <Sidebar />
    <div style={{position: 'relative'}} > <UserAsset/> </div>
    <div
                className={`${
                    reverse
                        ? "bg-bg min-h-[100vh] xxl:mr-[320px] xl:mr-[240px] pt-10 pl-8 lg:mr-[80px] h-[400px]"
                        : "bg-bg min-h-[100vh] xxl:ml-[320px] xl:ml-[240px] pt-10 pl-8 lg:ml-[80px] h-[400px]"
                }`}
            >
            <>
                {children} 
            </>
    </div>
    </div>
  )
}