import Head from 'next/head'

import '../styles/styles.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>NextJs</title>
        <meta name="description" description="NextJs course" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
