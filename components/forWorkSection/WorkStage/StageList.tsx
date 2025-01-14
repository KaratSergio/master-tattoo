import { FC } from 'react';
import { StageListProps } from '@/types/workSectionTypes';
import StageItem from './StageItem';

const StageList: FC<StageListProps> = ({ workStage }) => {
    return (
        <ul className="px-5">
            {workStage.map(stage => (
                <StageItem key={stage.id} {...stage} />
            ))}
        </ul>
    );
};

export default StageList;
