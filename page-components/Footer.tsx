import { FC } from 'react';
import Image from 'next/image';
import { FooterProps } from '@/types/footerTypes';
import { Button } from '@/components/Button';
import SocialLinkList from '@/components/forFooter/SocialLinkList';

const Footer: FC<FooterProps> = ({ data }) => {
    return (
        <footer className="bg-dark w-full text-white">
            <div className="container py-10 xl:flex xl:items-center xl:justify-between">
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
                <Button
                    variant="sky-white"
                    className="my-10 justify-center pl-5 xl:px-10 xl:max-w-fit"
                >
                    {data.button}
                </Button>
                <div>
                    <p className="text-center text-[20px] font-bold">{data.phone}</p>
                    <SocialLinkList social={data.social} />
                </div>
            </div>
            <div className="w-full flex flex-col xl:flex-row xl:justify-between xl:items-center text-center xl:text-start border-t-2 border-b-none border-t-white pt-[50px] mt-[50px] xl:pb-10">
                <div className="xl:pl-[70px] 2xl:pl-[135px]">
                    <p>{data.text1}</p>
                    <p className="text-dark_gray text-[15px]">{data.text2}</p>
                </div>
                <p className="text-dark_gray mt-10 xl:mt-0 text-[13px] xl:w-[380px] 2xl:w-[445px] xl:pr-[70px] 2xl:pr-[135px]">
                    {data.text3}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
