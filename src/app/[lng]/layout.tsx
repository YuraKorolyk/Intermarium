import '../../styles/globals.scss'

import Header from "@/components/Layouts/Header/Header";
import Footer from "@/components/Layouts/Footer/Footer";
import Head from 'next/head'
import {languages} from "@/app/i18n/settings";
import {dir} from "i18next";
import React from "react";
import Script from "next/script";
import ArrowToTop from "@/components/ArrowToTop/ArrowToTop";

export async function generateStaticParams() {
  return languages.map((lng) => ({lng}))
}

export const metadata = {
  title: 'Intermarium Law Firm / Юридична Компанія Інтермаріум'
}
export default async function RootLayout({
                                           children, params: {lng}
                                         }: {
  children: React.ReactNode
  params: { lng: string }
}) {
  const desc = lng === 'en' ? "Intermarium Law Firm - Ukrainian law firm, specialising in immigration law, corporate law and due diligence. Legal support of investors and businessmen in Ukraine." : "Юридична Компанія Інтермаріум -  спеціалізується на імміграції іноземців в Україну, корпоративному праві та перевірці нерухомості та об’єктів інвестування."
  return (
    <html lang={lng} dir={dir(lng)}>
    <Head>
      {/*<link rel="icon" href="../../../public/assets/icons/favicon/favicon.ico" type="image/x-icon"/>*/}
      {/*<link rel="shortcut icon" href="../../../public/assets/icons/favicon/favicon.ico" type="image/x-icon"/>*/}
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      {/*<title>Intermarium Law Firm / Юридична Компанія Інтермаріум</title>*/}
      <meta name="description">x
        {desc}
      </meta>
    </Head>
    <Script id="GoogleTagManager">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-KPM5FN4R');
      `}
    </Script>
    <Script id="Pixel">
      {`
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '1258095921546445');
      fbq('track', 'PageView');
      `}
    </Script>
    <body>
    <noscript>
      <img height="1" width="1" style={{display: "none"}}
           src="https://www.facebook.com/tr?id=1258095921546445&ev=PageView&noscript=1"
      />
    </noscript>
    <noscript>
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KPM5FN4R"
              height="0" width="0"
              style={{display: "none", visibility: "hidden"}}
      >
      </iframe>
    </noscript>

    <main>
      <ArrowToTop/>
      <Header lng={lng}/>
      {children}
      <Footer lng={lng}/>
    </main>
    </body>
    </html>
  )
}
