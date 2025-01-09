import { FC } from 'react';
import Image from 'next/image';
import { FooterProps } from '@/types/footerTypes';
import { Button } from '@/components/Button';

const Footer: FC<FooterProps> = ({ data }) => {
    return (
        <footer className="bg-dark w-full">
            <div className="container">
                <Image
                    src={data.logo.url}
                    alt={data.logo.alt}
                    width={98}
                    height={57}
                    quality={90}
                    sizes="(max-width: 768px) 100vw, 98px"
                    className="object-cover"
                />
                <h2>{data.nameAuthor}</h2>
                <p>{data.profession}</p>
                <Button>{data.button}</Button>
                <p>{data.phone}</p>
                <p>{data.text1}</p>
                <p>{data.text2}</p>
                <p>{data.text3}</p>

                <ul>
                    {data.social.map(link => (
                        <li key={link.id}>
                            <p>{link.url}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
