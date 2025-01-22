import { FC } from 'react';
import { WorkListProps } from '@/types/workSectionTypes';
import WorkItem from './WorkItem';

const WorkList: FC<WorkListProps> = ({ workList }) => {
    return (
        <ul className="mt-10 flex flex-col xl:flex-row xl:flex-wrap gap-[30px] xl:gap-[70px] 2xl:gap-x-[245px] xl:justify-between">
            {workList.map(item => (
                <WorkItem key={item.id} {...item} />
            ))}
        </ul>
    );
};

export default WorkList;
