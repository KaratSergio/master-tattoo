import cn from 'classnames';
import { FC, ReactNode } from 'react';
import Link from 'next/link';

export interface LinkBtnProps {
    children: ReactNode;
    to: string;
    className?: string;
    classDiv?: string;
}

export const LinkBtn: FC<LinkBtnProps> = ({ children, className, classDiv, to }) => {
    return (
        <div
            className={cn(
                'p-[2px] border-[2px] w-full md:w-auto md:max-w-fit rounded-full border-electric flex justify-center items-center',
                classDiv
            )}
        >
            <Link
                href={to}
                className={cn(
                    'w-full h-full rounded-full font-robotoMono uppercase bg-electric border-2 border-electric text-base font-medium text-white flex justify-center items-center leading-[36px] md:px-6 py-[2px] md:w-auto',
                    'hover:bg-white hover:text-black hover:border-2 hover:border-electric transition duration-300',
                    className
                )}
            >
                {children}
            </Link>
        </div>
    );
};
