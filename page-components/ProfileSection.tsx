import { FC } from 'react';
import Image from 'next/image';
import { Button } from '@/components/Button';
import { ProfileSectionProps } from '@/types/profileSectionTypes';

const ProfileSection: FC<ProfileSectionProps> = ({ data }) => {
    return (
        <section>
            <div className="container">
                <Image
                    src={data.image.url}
                    alt={data.image.alt}
                    width={387}
                    height={574}
                    quality={90}
                    sizes="(max-width: 768px) 100vw, 387px"
                    className="object-cover"
                />
                <h2>{data.title}</h2>
                <p>{data.text}</p>
                <Button>{data.button}</Button>
            </div>

            <ul>
                {data.certificate.map(document => (
                    <li key={document.id}>
                        <p>{document.text}</p>
                        <Image
                            src={document.image.url}
                            alt={document.image.alt}
                            width={335}
                            height={231}
                            quality={90}
                            sizes="(max-width: 768px) 100vw, 387px"
                            className="object-cover"
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ProfileSection;
