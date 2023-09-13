import '../../styles/globals.scss'

import Header from "@/components/Layouts/Header/Header";
import Footer from "@/components/Layouts/Footer/Footer";
import Head from 'next/head'
import {languages} from "@/app/i18n/settings";
import {dir} from "i18next";
import React from "react";
import Script from "next/script";

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
      <title>My page title</title>
    </Head>
    <body>
    <main>
      <Header lng={lng}/>
      {children}
      <Footer lng={lng}/>
    </main>
    <Script id="init-code">
      {`
        window.LEELOO = function(){
        window.LEELOO_INIT = { id: '64f75ae9fcef99d45d48a795' };
        var js = document.createElement('script');
        js.src = 'https://app.leeloo.ai/init.js';
        js.async = true;
        document.getElementsByTagName('head')[0].appendChild(js);
      }; LEELOO();
        console.log('script works fine!')
      `}
    </Script>
    <Script id="form-code">
      {`
        window.LEELOO_LEADGENTOOLS = (window.LEELOO_LEADGENTOOLS || []).concat('83fp7e');
      `}
    </Script>
    </body>
    </html>
  )
}
