import { FC } from 'react';
import Image from 'next/image';
import { WorkSectionProps } from '@/types/workSectionTypes';

const WorkSection: FC<WorkSectionProps> = ({ data }) => {
    return (
        <section>
            <div className="container">
                {/* BLOK A */}
                <div>
                    <h2>{data.title}</h2>
                    <ul>
                        {data.workList.map(workItem => (
                            <li key={workItem.id}>
                                <h3>{workItem.title}</h3>
                                <p>{workItem.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* BLOK B */}
                <div>
                    <div className="w-full max-[335px] max-h-[219px] overflow-hidden">
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
                    <div>
                        <ul>
                            {data.workStage.map(stageItem => (
                                <li key={stageItem.id}>
                                    <strong>{stageItem.titleList}</strong>
                                    <h3>{stageItem.title}</h3>
                                    <p>{stageItem.text}</p>
                                </li>
                            ))}
                        </ul>
                        <button>{data.button}</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkSection;
