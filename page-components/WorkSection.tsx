import { FC } from 'react';
import Image from 'next/image';
import { H2 } from '@/components/typography/H2';
import { H3 } from '@/components/typography/H3';
import { P } from '@/components/typography/P';
import { WorkSectionProps } from '@/types/workSectionTypes';
import { Button } from '@/components/Button';
import { EllipseList } from '@/components/icons/Ellipse/EllipseList';

const WorkSection: FC<WorkSectionProps> = ({ data }) => {
    return (
        <section>
            <div className="container mt-[60px] rounded-b-2xl">
                {/* BLOK A */}
                <div>
                    <H2 variant="title-section">{data.title}</H2>
                    <ul className="mt-10 flex flex-col gap-[30px]">
                        {data.workList.map(workItem => (
                            <li key={workItem.id} className="flex items-center gap-[10px]">
                                <strong className="flex items-center justify-center text-dark text-[115px] font-bold leading-[50px] w-20 h-auto flex-shrink-0">
                                    {workItem.number}
                                </strong>
                                <div className="flex flex-col justify-end">
                                    <H3>{workItem.title}</H3>
                                    <P>{workItem.text}</P>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* BLOK B */}
                <div className="mt-[60px] rounded-b-2xl low-box-shadow">
                    <div className="w-full max-[335px] max-h-[219px] overflow-hidden rounded-t-2xl">
                        <Image
                            src={data.image.url}
                            alt={data.image.alt}
                            width={750}
                            height={902}
                            quality={90}
                            className="object-cover"
                        />
                        <h3>{data.titleStage}</h3>
                    </div>
                    <div className="mt-[60px]">
                        <ul className="px-5">
                            {data.workStage.map(stageItem => (
                                <li key={stageItem.id}>
                                    <div className="flex items-center gap-4">
                                        <EllipseList className="" />
                                        <strong className="text-20px my-5 block font-medium lowercase">
                                            {stageItem.titleList}
                                        </strong>
                                    </div>
                                    <H3 className="mb-[10px]">{stageItem.title}</H3>
                                    <p>{stageItem.text}</p>
                                </li>
                            ))}
                        </ul>
                        <Button className="">{data.button}</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkSection;
