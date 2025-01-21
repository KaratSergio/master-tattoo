import { FC } from 'react';
import { StageItemProps } from '@/types/workSectionTypes';
import { H3 } from '@/components/typography/H3';
import { P } from '@/components/typography/P';
import { EllipseList } from '@/components/icons/ellipse/EllipseList';

const StageItem: FC<StageItemProps> = ({ title, text, titleList }) => {
    const [firstWord, secondWord] = titleList.split(' ');

    return (
        <li>
            <div className="flex items-center gap-4">
                <EllipseList className="" />
                <div className="text-sky_blue text-end leading-[8px]">
                    <strong className="text-20px my-5 block font-medium lowercase">
                        {firstWord}
                    </strong>
                    <p className="font-bold">{secondWord}</p>
                </div>
            </div>
            <H3 className="my-[10px] ">{title}</H3>
            <P>{text}</P>
        </li>
    );
};

export default StageItem;
