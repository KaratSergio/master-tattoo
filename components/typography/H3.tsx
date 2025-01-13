import cn from 'classnames';
import { ReactNode } from 'react';

export const H3 = ({ children, className }: { children: ReactNode; className?: string }) => {
    return <h3 className={cn('text-[20px] font-semibold leading-7', className)}>{children}</h3>;
};
