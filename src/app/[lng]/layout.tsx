import '../styles/globals.scss'

import Header from "@/components/Layouts/Header/Header";
import Footer from "@/components/Layouts/Footer/Footer";
import Head from 'next/head'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <Head>
      <title>My page title</title>
      {/*<link rel="preconnect" href="https://fonts.googleapis.com" />*/}
      {/*<link rel="preconnect" href="https://fonts.gstatic.com" />*/}
      {/*<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap" rel="stylesheet" />*/}
    </Head>
      <body >
      <main>
        {/*<Footer/>*/}
              <Header/>
      {children}
        <Footer/>
      </main>
      </body>
    </html>
  )
}
