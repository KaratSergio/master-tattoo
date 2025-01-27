import { FC } from 'react';
import Image from 'next/image';
import { H2 } from '@/components/typography/H2';
import { Button } from '@/components/Button';
import { Markdown } from '@/components/Markdown';
import { ProfileSectionProps } from '@/types/profileSectionTypes';
import CertificateList from '@/components/forProfileSection/CertificateList';

import { EllipseProfileSky } from '@/components/icons/ellipse/profileSection/EllipseProfileSky';
import { EllipseProfileBlue } from '@/components/icons/ellipse/profileSection/EllipseProfileBlue';

const ProfileSection: FC<ProfileSectionProps> = ({ data }) => {
    return (
        <section className="xl:px-[100px] 2xl:px-[280px] xl:mt-[60px]">
            <div className="container xl:low-box-shadow xl:py-10">
                <div className="relative mt-[140px] xl:mt-0 xl:flex xl:justify-center xl:items-center">
                    <div className="absolute top-[-100px] left-[48px] xl:relative xl:top-auto xl:left-auto xl:mr-[100px] flex-shrink-0">
                        <div className="relative flex justify-center w-full z-10 rounded-full flex-shrink-0">
                            <Image
                                src={data.image.url}
                                alt={data.image.alt}
                                width={387}
                                height={574}
                                quality={90}
                                sizes="(max-width: 768px) 100vw, 387px"
                                className="object-cover  w-[200px] h-[260px] xl:w-[387px] xl:h-auto rounded-full"
                            />
                            <EllipseProfileBlue className="absolute top-[-6px] right-[-16px] xl:size-[460px] z-[-2]" />
                            <EllipseProfileSky className="absolute top-16 xl:size-[460px] z-[-1]" />
                        </div>
                    </div>
                    <div className="pt-48 xl:pt-0 px-5 xl:px-0 pb-10 xl:w-[572px] rounded-[15px] profile-box-shadow">
                        <H2 variant="title-section">{data.title}</H2>
                        <Markdown className="mt-4 text-[15px]" text={data.text} />
                        <Button
                            iconEnabled={false}
                            className="mt-10 pl-6 justify-center xl:max-w-fit"
                        >
                            {data.button}
                        </Button>
                    </div>
                </div>
                <div className="relative mt-[60px]">
                    <H2 variant="title-section" className="absolute top-[-6px] left-5 xl:hidden">
                        {data.title1}
                    </H2>
                    <CertificateList certificate={data.certificate} />
                </div>
            </div>
        </section>
    );
};

export default ProfileSection;
