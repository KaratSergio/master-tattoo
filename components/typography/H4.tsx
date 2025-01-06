import cn from 'classnames';
import { ReactNode } from 'react';

export const H4 = ({ children, className }: { children: ReactNode; className?: string }) => {
    return <h4 className={cn('mt-2', className)}>{children}</h4>;
};
