import { Head } from 'components/head'
import { ThemeProvider } from 'next-themes'

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
      <ThemeProvider defaultTheme="system">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
