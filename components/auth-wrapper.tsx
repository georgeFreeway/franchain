import React, { FC } from 'react';

type AuthWrapperProp = {
    children: React.ReactNode;
}

export const AuthWrapper: FC<AuthWrapperProp> = ({ children }) => {
    return (
        <div className="w-[650px] md:w-[864px] lg:w-[1024px] h-[1117px] bg-[#F8F8FB]">
            <div className="flex flex-col justify-center items-start p-16 md:p-16 lg:p-60 xl:p-16 w-[650px] md:w-[650px] lg:w-[1024px] h-[1117px] md:mr-[310px]">
                {children}
            </div>
        </div>
    );
}