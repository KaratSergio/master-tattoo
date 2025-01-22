import { FC } from 'react';
import Image from 'next/image';
import { H2 } from '@/components/typography/H2';
import { WorkSectionProps } from '@/types/workSectionTypes';

import WorkList from '@/components/forWorkSection/WorkList/WorkList';
import WorkStage from '@/components/forWorkSection/WorkStage/StageList';

const WorkSection: FC<WorkSectionProps> = ({ data }) => {
    return (
        <section>
            <div className="container mt-[60px] rounded-b-2xl">
                {/* WORK LIST */}
                <div>
                    <H2 variant="title-section">{data.title}</H2>
                    <WorkList workList={data.workList} />
                </div>
                {/* WORK STAGE */}
                <div className="xl:px-[30px] 2xl:px-[55px]">
                    <div className="mt-[60px] rounded-b-2xl xl:rounded-b-none xl:rounded-r-2xl low-box-shadow xl:flex xl:gap-10">
                        <div className="relative w-full max-[335px] max-h-[219px] xl:max-h-full overflow-hidden rounded-t-2xl xl:rounded-l-2xl xl:rounded-t-none">
                            <Image
                                src={data.image.url}
                                alt={data.image.alt}
                                width={750}
                                height={902}
                                quality={90}
                                className="object-cover h-full w-full"
                            />
                            <H2
                                variant="title-section"
                                className="absolute top-6 xl:top-10 xl:left-16 left-8 text-white txt-shadow_2 w-48 xl:w-96"
                            >
                                {data.titleStage}
                            </H2>
                        </div>
                        <div className="mt-[60px]">
                            <WorkStage workStage={data.workStage} button={data.button} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkSection;
