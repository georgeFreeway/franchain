import React, { FC } from 'react';
import { routes } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

type NavbarProp = {
    link: string;
    text: string;
}

export const Navbar: FC<NavbarProp> = ({ link, text }) => {
    return (
        <div className='w-[650px] md:w-[650px] lg:w-[1024px] xl:w-[1300px] h-[110.92px] xl:ml-[310px] absolute flex justify-between items-center px-20 lg:px-16'>
            <Link href={routes.HOME}>
                <Image src={'/logo.png'} alt="logo" height={71} width={35} />
            </Link>
            <div>
                <Link href={link} className="rounded-full px-3 py-2 font-normal flex items-center group">
                    <span className="mr-2 text-[#282828]">{text}</span>
                    <svg className="stroke-current text-[#282828]" width="10" height="10" strokeWidth="2" viewBox="0 0 10 10" aria-hidden="true">
                        <g fillRule="evenodd">
                            <path className="opacity-0 group-hover:opacity-100 transition ease-in-out duration-200" d="M0 5h7"></path>
                            <path
                                className="opacity-100 group-hover:transform group-hover:translate-x-1 transition ease-in-out duration-200"
                                d="M1 1l4 4-4 4"></path>
                        </g>
                    </svg>
                </Link>
            </div>
        </div>
    );
}