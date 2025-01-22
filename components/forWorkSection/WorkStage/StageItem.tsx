import { FC } from 'react';
import { StageItemProps } from '@/types/workSectionTypes';
import { H3 } from '@/components/typography/H3';
import { P } from '@/components/typography/P';
import { EllipseList } from '@/components/icons/ellipse/EllipseList';

const StageItem: FC<StageItemProps> = ({ title, text, titleList }) => {
    const [firstWord, secondWord] = titleList.split(' ');

    return (
        <li className="xl:flex gap-6">
            <div className="relative flex items-center xl:items-start gap-4 xl:gap-0">
                <EllipseList className="xl:absolute top-[18px] left-14" />
                <div className="text-sky_blue text-end leading-[8px] xl:w-32">
                    <strong className="text-20px my-5 block font-medium lowercase">
                        {firstWord}
                    </strong>
                    <p className="font-bold">{secondWord}</p>
                </div>
            </div>
            <div>
                <H3 className="my-[10px] ">{title}</H3>
                <P>{text}</P>
            </div>
        </li>
    );
};

export default StageItem;
