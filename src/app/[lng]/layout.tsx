import '../../styles/globals.scss'

import Header from "@/components/Layouts/Header/Header";
import Footer from "@/components/Layouts/Footer/Footer";
import Head from 'next/head'
import {languages} from "@/app/i18n/settings";
import {dir} from "i18next";
import React from "react";


export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}
export default async function RootLayout({children, params: {lng}
}: {
  children: React.ReactNode
  params: {lng: string}
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
    <Head>
      <title>My page title</title>
    </Head>
      <body >
      <main>
              <Header lng={lng}/>
      {children}
        <Footer lng={lng}/>
      </main>
      </body>
    </html>
  )
}
