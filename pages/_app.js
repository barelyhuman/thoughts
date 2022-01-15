import { Head } from 'components/head'

import '../styles/globals.css'
import '../styles/code.css'
import { useEffect } from 'react'
import lolight from 'lolight'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    lolight('.code')
  }, [])
  return (
    <>
      <Head />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
