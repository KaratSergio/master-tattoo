import { FC } from 'react';
import { StageListProps } from '@/types/workSectionTypes';
import StageItem from './StageItem';
import { Button } from '@/components/Button';

const StageList: FC<StageListProps> = ({ workStage, button }) => {
    return (
        <ul className="px-5 xl:pr-20 pb-[50px] xl:flex flex-col xl:gap-10 2xl:gap-20">
            {workStage.map((stage, index) => (
                <div key={stage.id}>
                    <StageItem {...stage} index={index} />
                    {/* The button after the first element on mobile devices */}
                    {index === 0 && <Button className="mt-[30px] mb-10 sm:hidden">{button}</Button>}
                </div>
            ))}
        </ul>
    );
};

export default StageList;
