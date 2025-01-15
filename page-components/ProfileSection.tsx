import { FC } from 'react';
import Image from 'next/image';
import { H2 } from '@/components/typography/H2';
import { Button } from '@/components/Button';
import { Markdown } from '@/components/Markdown';
import { ProfileSectionProps } from '@/types/profileSectionTypes';
import CertificateList from '@/components/forProfileSection/CertificateList';

import { EllipseProfileSky } from '@/components/icons/ellipse/EllipseProfileSky';
import { EllipseProfileBlue } from '@/components/icons/ellipse/EllipseProfileBlue';

const ProfileSection: FC<ProfileSectionProps> = ({ data }) => {
    return (
        <section>
            <div className="container relative mt-[140px]">
                <div className="absolute top-[-100px] left-[88px]">
                    <div className="relative flex justify-center w-full z-10 rounded-full flex-shrink-0">
                        <Image
                            src={data.image.url}
                            alt={data.image.alt}
                            width={387}
                            height={574}
                            quality={90}
                            sizes="(max-width: 768px) 100vw, 387px"
                            className="object-cover  w-[200px] h-[260px] rounded-full"
                        />
                        <EllipseProfileBlue className="absolute top-[-6px] right-[-16px]  z-[-2]" />
                        <EllipseProfileSky className="absolute top-16  z-[-1]" />
                    </div>
                </div>
                <div className="pt-48 px-5 pb-10 rounded-[15px] low-box-shadow">
                    <H2 variant="title-section">{data.title}</H2>
                    <Markdown text={data.text} />
                    <Button className="mt-10">{data.button}</Button>
                </div>
            </div>

            <div className="relative mt-[60px]">
                <H2 variant="title-section" className="absolute top-[-6px] left-5">
                    {data.title1}
                </H2>
                <CertificateList certificate={data.certificate} />
            </div>
        </section>
    );
};

export default ProfileSection;
