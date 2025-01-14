import { FC } from 'react';
import { H3 } from '@/components/typography/H3';
import { P } from '@/components/typography/P';
import { WorkItemProps } from '@/types/workSectionTypes';

const WorkItem: FC<WorkItemProps> = ({ title, text, number }) => {
    return (
        <li className="flex items-center gap-[10px]">
            <strong className="flex items-center justify-center text-dark text-[115px] font-bold leading-[50px] w-20 h-auto flex-shrink-0">
                {number}
            </strong>
            <div className="flex flex-col justify-end">
                <H3>{title}</H3>
                <P>{text}</P>
            </div>
        </li>
    );
};

export default WorkItem;
