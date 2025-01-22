'use client';

import { FC } from 'react';
import { Button } from '@/components/Button';
import { DiscountSectionProps } from '@/types/discountSectionTypes';
import { useCountdown } from '@/hooks/useCountdown';

const DiscountSection: FC<DiscountSectionProps> = ({ data }) => {
    const countdown = useCountdown(22920);

    return (
        <section className="mt-[60px]">
            <div className="container">
                <div className="flex flex-col text-center items-center xl:items-start xl:pl-60 rounded-[15px] py-10 xl:py-[60px] 2xl:pt-[70px] 2xl:pb-20 px-3 bg-a_gradient discount-section-bg">
                    <div className="xl:flex xl:items-center">
                        <div className="xl:w-[280px] xl:text-start">
                            <h2 className="text-[20px] font-semibold leading-7 text-dark_a">
                                {data.title}
                            </h2>
                            <h3 className="mt-[15px] text-25px font-bold leading-8 text-dark_a">
                                {data.text}
                            </h3>
                        </div>
                        <div className="mt-5 xl:mt-0 xl:ml-8 xl:border xl:border-white xl:py-2 xl:w-[154px]">
                            <p className="text-[10px] xl:text-base text-white font-medium leading-10px">
                                {data.text1}
                            </p>
                            <p className="mt-[3px] text-[30px] text-white font-semibold leading-22px">
                                {countdown}
                            </p>
                        </div>
                    </div>
                    <Button variant="deep-blue" className="mt-[25px] xl:max-w-fit">
                        {data.button}
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default DiscountSection;
