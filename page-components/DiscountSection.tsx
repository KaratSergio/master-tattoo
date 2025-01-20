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
                <div className="flex flex-col text-center items-center rounded-[15px]  py-10 px-3 bg-a_gradient">
                    <h2 className="text-[20px] font-semibold leading-7 text-dark_a">
                        {data.title}
                    </h2>
                    <h3 className="mt-[15px] text-25px font-bold leading-8 text-dark_a">
                        {data.text}
                    </h3>
                    <div className="mt-5">
                        <p className="text-[10px] text-white font-medium leading-10px">
                            {data.text1}
                        </p>
                        <p className="mt-[3px] text-[30px] text-white font-semibold leading-22px">
                            {countdown}
                        </p>
                    </div>
                    <Button variant="deep-blue" className="mt-[25px]">
                        {data.button}
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default DiscountSection;
