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
  const desc = lng === 'en' ? "Intermarium Law Firm - Ukrainian law firm, specialising in immigration law, corporate law and due diligence. Legal support of investors and businessmen in Ukraine." : "Юридична Компанія Інтермаріум -  спеціалізується на імміграції іноземців в Україну, корпоративному праві та перевірці нерухомості та об’єктів інвестування."
  return (
    <html lang={lng} dir={dir(lng)}>
    <Head>
      <title>Intermarium Law Firm / Юридична Компанія Інтермаріум</title>
      <meta name="description">
        {desc}
      </meta>
    </Head>

    <body>
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
