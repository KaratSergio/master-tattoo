import { FC } from 'react';
import { H3 } from '@/components/typography/H3';
import { P } from '@/components/typography/P';
import { WorkItemProps } from '@/types/workSectionTypes';
import { Ellipse } from '@/components/icons/Ellipse_temp/Ellipse';

const WorkItem: FC<WorkItemProps> = ({ title, text, number }) => {
    // Об'єкт визначення класів з урахуванням значення `number`
    const circlePositions: Record<string, string[]> = {
        '1': [
            'bottom-[-10px] left-0 z-[-1] size-[60px]',
            'bottom-5 left-[-4px] size-1',
            'top-[-12px] left-1 size-4',
            'bottom-4 left-16 size-6',
        ],

        '2': [
            'top-8 left-[-12px] size-5',
            'top-6 left-14 size-3',
            'bottom-0 left-8 z-[-1] size-[60px]',
        ],

        '3': [
            'bottom-[-12px] left-[-6px] z-[-1] size-[60px]',
            'top-6 right-[-2px] size-4',
            'top-0 left-[-6px] size-3',
        ],

        '4': [
            'top-8 left-[-10px] z-[-1] size-[60px]',
            'top-[-10px] right-[12px] size-3',
            'top-10 right-[-10px] size-4',
        ],

        '5': ['top-2 right-2 size-3', 'top-6 right-6 size-4', 'top-8 left-8 z-[-1] size-[60px]'],

        '6': [
            'top-[-15px] left-[5px] z-[-1] size-[60px]',
            'bottom-[-20px] left-[15px] z-[-1] size-6',
            'top-6 left-[25px] size-3',
            'bottom-2 right-[-5px] size-4',
        ],
    };

    const positions = circlePositions[number] || [];

    return (
        <li className="flex items-center gap-6">
            <div className="relative work-item-bg size-20 content-center pt-2">
                {positions.map((position, index) => (
                    <Ellipse key={index} className={`absolute text-sky_blue ${position}`} />
                ))}

                <strong className="flex items-center justify-center text-white text-[115px] font-bold leading-[50px] w-20 h-auto flex-shrink-0">
                    {number}
                </strong>
            </div>

            <div className="flex flex-col justify-end">
                <H3>{title}</H3>
                <P className="xl:w-[186px] 2xl:w-[228px]">{text}</P>
            </div>
        </li>
    );
};

export default WorkItem;
