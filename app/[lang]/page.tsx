import { Locale } from '@/i18n.config';
import { getClient } from '@/utils/apollo-client';
import { gql } from '@apollo/client';

import HeroSection from '@/page-components/HeroSection';
import AboutSection from '@/page-components/AboutSection';
import DiscountSection from '@/page-components/DiscountSection';
import ServicesSection from '@/page-components/ServicesSection';

export default async function Home({ params }: { params: { lang: Locale } }) {
    const { lang } = await params;

    const query = gql`
        query MyQuery($locale: SiteLocale!) {
            heroSection(locale: $locale) {
                title
                text
                heroImage {
                    alt
                    url
                }
                button
                advantages {
                    id
                    text
                    image {
                        url
                        alt
                    }
                }
            }
            aboutSection(locale: uk) {
                title
                text
                list
                image1 {
                    alt
                    url
                }
                image2 {
                    alt
                    url
                }
            }
            discountSection(locale: uk) {
                title
                text
                text1
                button
            }
            servicesSection(locale: uk) {
                serviceCard {
                    id
                    price
                    text
                    title
                    image {
                        alt
                        url
                        width
                        height
                    }
                    button
                }
            }
        }
    `;

    const { data } = await getClient().query({
        query,
        variables: { locale: lang },
        context: {
            fetchOptions: {
                next: { revalidate: 60 },
            },
        },
    });

    return (
        <main className="flex flex-col flex-grow items-center justify-between">
            <HeroSection data={data.heroSection} />
            <AboutSection data={data.aboutSection} />
            <DiscountSection data={data.discountSection} />
            <ServicesSection data={data.servicesSection} />
        </main>
    );
}
