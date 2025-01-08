import { Locale } from '@/i18n.config';
import { getClient } from '@/utils/apollo-client';
import { gql } from '@apollo/client';

import HeroSection from '@/page-components/HeroSection';
import AboutSection from '@/page-components/AboutSection';
import DiscountSection from '@/page-components/DiscountSection';
import ServicesSection from '@/page-components/ServicesSection';
import WorkSection from '@/page-components/WorkSection';
import ToolsSection from '@/page-components/ToolsSection';
import GallerySection from '@/page-components/GallerySection';

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
            workSection(locale: uk) {
                button
                title
                titleStage
                image {
                    alt
                    url
                }
                workStage {
                    id
                    text
                    title
                    titleList
                }
                workList {
                    id
                    text
                    title
                }
            }
            toolsSection(locale: uk) {
                title
                tools {
                    id
                    title
                    text
                    image {
                        alt
                        url
                    }
                }
            }
            gallerySection(locale: uk) {
                title
                text
                gallery {
                    alt
                    id
                    url
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
            <WorkSection data={data.workSection} />
            <ToolsSection data={data.toolsSection} />
            <GallerySection data={data.gallerySection} />
        </main>
    );
}
