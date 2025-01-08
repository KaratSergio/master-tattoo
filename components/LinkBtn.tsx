import cn from 'classnames';
import { FC, ReactNode } from 'react';
import Link from 'next/link';

export interface LinkBtnProps {
    children: ReactNode;
    to: string;
    className?: string;
}

export const LinkBtn: FC<LinkBtnProps> = ({ children, className, to }) => {
    return (
        <Link
            href={to}
            className={cn(
                'w-full rounded-[10px] py-[15px] pl-[42px] pr-[17px] text-[15px] low-box-shadow font-bold leading-5 uppercase',
                'bg-a_gradient transition duration-300',
                className
            )}
        >
            {children}
        </Link>
    );
};
