import { FC } from 'react';
import { WorkListProps } from '@/types/workSectionTypes';
import WorkItem from './WorkItem';

const WorkList: FC<WorkListProps> = ({ workList }) => {
    return (
        <ul className="mt-10 flex flex-col gap-[30px]">
            {workList.map(item => (
                <WorkItem key={item.id} {...item} />
            ))}
        </ul>
    );
};

export default WorkList;
