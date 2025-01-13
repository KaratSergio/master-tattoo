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
import PromotionSection from '@/page-components/PromotionSection';
import ReviewsSection from '@/page-components/ReviewsSection';
import ProfileSection from '@/page-components/ProfileSection';
import SubscribeSection from '@/page-components/SubscribeSection';
import ContactsSection from '@/page-components/ContactsSection';

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
                before
                after
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
                title
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
                    number
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
            promotionSection(locale: uk) {
                agreement
                button
                buttonError
                name
                phone
                text
                text1
                title
                image {
                    alt
                    url
                }
            }
            reviewsSection(locale: uk) {
                title
                text
                reviewsList {
                    id
                    title
                    text
                    image {
                        alt
                        url
                    }
                }
            }
            profileSection(locale: uk) {
                title
                text
                button
                image {
                    alt
                    url
                }
                certificate {
                    id
                    text
                    image {
                        alt
                        url
                    }
                }
            }
            subscribeSection(locale: uk) {
                title
                text
                button1
                button2
                image {
                    alt
                    url
                }
            }
            contactsSection(locale: uk) {
                title
                telephone
                operating
                address
                email
                social
                image {
                    alt
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
            <PromotionSection data={data.promotionSection} />
            <ReviewsSection data={data.reviewsSection} />
            <ProfileSection data={data.profileSection} />
            <SubscribeSection data={data.subscribeSection} />
            <ContactsSection data={data.contactsSection} />
        </main>
    );
}
