
import Head from 'next/head'
import Image from 'next/image'

const DefaultLayout = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>Next Starter</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" cross-origin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <div
        tw="antialiased container mx-auto max-w-7xl mt-0"
      >
        <main  tw="p-4 md:p-16">
          {children}
        </main>

      </div>

    
    </>
  )
}

export default DefaultLayout
