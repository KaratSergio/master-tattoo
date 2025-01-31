import { FC } from 'react';
import { StageListProps } from '@/types/workSectionTypes';
import StageItem from './StageItem';
import { Button } from '@/components/Button';

const StageList: FC<StageListProps> = ({ workStage, button }) => {
    return (
        <ul className="bg-white px-5 rounded-b-2xl xl:rounded-b-none xl:rounded-r-2xl xl:pr-20 pb-[50px] xl:py-[70px] 2xl:py-[100px] xl:flex flex-col xl:gap-10 2xl:gap-20">
            {workStage.map((stage, index) => (
                <div key={stage.id}>
                    <StageItem {...stage} index={index} />
                    {/* The button after the first element on mobile devices */}
                    {index === 0 && (
                        <Button popupType="contact" className="mt-[30px] mb-10 sm:hidden">
                            {button}
                        </Button>
                    )}
                </div>
            ))}
        </ul>
    );
};

export default StageList;
