import type { Metadata } from 'next';
import { Montserrat, Roboto_Mono } from 'next/font/google';
import './globals.css';
import { Locale } from '@/i18n.config';
import { getClient } from '@/utils/apollo-client';
import { gql } from '@apollo/client';
import Header from '@/page-components/Header';
import Footer from '@/page-components/Footer';

export async function generateMetadata({
    params,
}: {
    params: { lang: Locale };
}): Promise<Metadata> {
    const { lang } = await params;

    const query = gql`
        query SiteData {
            _site(locale: uk) {
                globalSeo {
                    siteName
                    fallbackSeo {
                        description
                    }
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

    return {
        title: data?._site?.globalSeo?.siteName,
        description: data?._site?.globalSeo?.fallbackSeo?.description,
        icons: [
            // {
            //     rel: 'icon',
            //     type: 'image/png',
            //     sizes: '32x32',
            //     url: `${process.env.HOSTNAME}/favicon/favicon-32x32.png`,
            // },
            // {
            //     rel: 'icon',
            //     type: 'image/png',
            //     sizes: '16x16',
            //     url: `${process.env.HOSTNAME}/favicon/favicon-16x16.png`,
            // },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '96x96',
                url: `${process.env.HOSTNAME}/favicon/favicon-96x96.png`,
            },
            // {
            //     rel: 'apple-touch-icon',
            //     sizes: '180x180',
            //     url: `${process.env.HOSTNAME}/favicon/apple-touch-icon.png`,
            // },
        ],
        openGraph: {
            title: data?._site?.globalSeo?.siteName,
            url: `${process.env.HOSTNAME}/${lang}`,
            siteName: data?._site?.globalSeo?.siteName,
            images: [
                {
                    url: `favicon/web-app-manifest-512x512`,
                    width: 512,
                    height: 512,
                },
                {
                    url: `favicon/web-app-manifest-192x192`,
                    width: 192,
                    height: 192,
                    alt: '',
                },
            ],
            locale: lang,
            type: 'website',
        },
    };
}

const montserrat = Montserrat({ subsets: ['latin'], display: 'swap' });

const roboto_mono = Roboto_Mono({
    subsets: ['latin', 'cyrillic'],
    weight: ['500', '700'],
    display: 'swap',
    variable: '--font-roboto_mono',
});

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: { lang: Locale };
}>) {
    const { lang } = await params;

    const query = gql`
        query MainPage($locale: SiteLocale!) {
            navMenu(locale: $locale) {
                logo {
                    alt
                    url
                }
                authorName
                pages {
                    id
                    title
                    url
                }
            }
            footer(locale: uk) {
                nameAuthor
                button
                phone
                profession
                text1
                text2
                text3
                logo {
                    alt
                    url
                }
                social {
                    id
                    url
                    iconImg {
                        alt
                        url
                    }
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
        <html lang={lang} className="h-full">
            <body className={`${montserrat.className} ${roboto_mono.variable}`}>
                <Header data={data.navMenu} lang={lang} />
                {children}
                <Footer data={data.footer} />
            </body>
        </html>
    );
}
