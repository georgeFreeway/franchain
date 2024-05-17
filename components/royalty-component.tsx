import React from 'react';
import Image from 'next/image';

export const RoyaltyComponent = () => {
    return (
        <div className="hidden md:hidden lg:hidden xl:block md:w-[650px] lg:w-[1024px] bg-gradient-to-t from-[#F4E7F4] to-[#D5E4EA] via-[#DFEAF0] w-[864px] h-[1117px]">
            <div className="flex flex-col items-center justify-center w-[650px] md:ml-[310px] h-[1116px]">
                <div className="space-y-4">
                    <Image src={'/signup.svg'} alt="background" height={327} width={428} className="mx-auto" />
                    <div className="space-y-2">
                        <h1 className="text-[40px] dmsans font-semibold text-center leading-[52.08px]">
                            Royalty collections, <br /> simplified. It&apos;s next level!
                        </h1>

                        <p className="text-[22px] dmsans font-normal text-center leading-[28.64px]">
                            Revenue based invoice collection to <br /> make royalty
                            collection as easy as...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
