import { FC } from 'react';
import { H3 } from '@/components/typography/H3';
import { P } from '@/components/typography/P';
import { StageItemProps } from '@/types/workSectionTypes';
import { EllipseList } from '@/components/icons/ellipse/EllipseList';

const StageItem: FC<StageItemProps> = ({ title, text, titleList }) => {
    return (
        <li>
            <div className="flex items-center gap-4">
                <EllipseList className="" />
                <strong className="text-20px my-5 block font-medium lowercase">{titleList}</strong>
            </div>
            <H3 className="mb-[10px]">{title}</H3>
            <P>{text}</P>
        </li>
    );
};

export default StageItem;
