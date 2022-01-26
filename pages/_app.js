import React, {useEffect} from 'react'
import {Head} from 'components/head'
import {ThemeProvider} from 'next-themes'

import '../styles/globals.css'
import '../styles/code.css'
import lolight from 'lolight'
import pt from 'prop-types'

const MyApp = ({Component, pageProps}) => {
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

MyApp.propTypes = {
	Component: pt.any,
	pageProps: pt.any,
}

export default MyApp
