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

export default async function RootLayout({
                                           children, params: {lng}
                                         }: {
  children: React.ReactNode
  params: { lng: string }
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
    <Head>
      <title>Intermarium Law Firm</title>
      <link rel="apple-touch-icon" sizes="180x180" href="../../../public/assets/icons/favicon/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="../../../public/assets/icons/favicon/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="../../../public/assets/icons/favicon/favicon-16x16.png"/>
      <link rel="manifest" href="../../../public/assets/icons/favicon/site.webmanifest"/>
      <link rel="mask-icon" href="../../../public/assets/icons/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
      <meta name="msapplication-TileColor" content="#da532c"/>
      <meta name="theme-color" content="#ffffff"/>
    </Head>
    <body>
    <main>
      <ArrowToTop/>
      <Header lng={lng}/>
      {children}
      <Footer lng={lng}/>
    </main>
    {/*<Script id="init-code">*/}
    {/*  {`*/}
    {/*    window.LEELOO = function(){*/}
    {/*    window.LEELOO_INIT = { id: '64f75ae9fcef99d45d48a795' };*/}
    {/*    var js = document.createElement('script');*/}
    {/*    js.src = 'https://app.leeloo.ai/init.js';*/}
    {/*    js.async = true;*/}
    {/*    document.getElementsByTagName('head')[0].appendChild(js);*/}
    {/*  }; LEELOO();*/}
    {/*  `}*/}
    {/*</Script >*/}
    </body>
    </html>
  )
}
