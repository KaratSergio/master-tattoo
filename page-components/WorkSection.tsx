import { FC } from 'react';
import Image from 'next/image';
import { H2 } from '@/components/typography/H2';
import { WorkSectionProps } from '@/types/workSectionTypes';
import { Button } from '@/components/Button';

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
                        <WorkStage workStage={data.workStage} />
                        <Button className="">{data.button}</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkSection;
