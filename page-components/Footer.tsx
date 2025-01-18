import { FC } from 'react';
import Image from 'next/image';
import { FooterProps } from '@/types/footerTypes';
import { Button } from '@/components/Button';
import SocialLinkList from '@/components/forFooter/SocialLinkList';

const Footer: FC<FooterProps> = ({ data }) => {
    return (
        <footer className="bg-dark w-full text-white">
            <div className="container py-10">
                <div className="flex items-center gap-5">
                    <Image
                        src={data.logo.url}
                        alt={data.logo.alt}
                        width={98}
                        height={57}
                        quality={90}
                        sizes="(max-width: 768px) 100vw, 98px"
                        className="object-cover"
                    />
                    <div>
                        <h2 className="text-lg  font-semibold">{data.nameAuthor}</h2>
                        <p className="text-[12px]">{data.profession}</p>
                    </div>
                </div>
                <Button variant="sky-white" className="my-10 justify-center pl-5">
                    {data.button}
                </Button>
                <p className="text-center text-[20px] font-bold">{data.phone}</p>

                <SocialLinkList social={data.social} />

                <div className="w-full flex flex-col text-center border-t-2 border-t-white pt-[50px] mt-[50px]">
                    <p>{data.text1}</p>
                    <p className="text-dark_gray text-[15px]">{data.text2}</p>
                    <p className="text-dark_gray mt-10 text-[13px]">{data.text3}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
