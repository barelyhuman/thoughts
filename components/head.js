import React from 'react'
import NextHead from 'next/head'
import pt from 'prop-types'

export const Head = ({children}) => {
	return (
		<NextHead>
			<title>Thoughts by Reaper</title>
			<meta name="title" content="Thoughts by Reaper" />
			<meta name="description" content="Exactly what the title says" />

			<link
				rel="alternate"
				type="application/rss+xml"
				title="RSS Feed for reaper.im"
				href="/rss.xml"
			/>

			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://thoughts.reaper.im/" />
			<meta property="og:title" content="Thoughts by Reaper" />
			<meta property="og:description" content="Exactly what the title says" />
			<meta property="og:image" content="https://thoughts.reaper.im/og.png" />

			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content="https://thoughts.reaper.im/" />
			<meta property="twitter:title" content="Thoughts by Reaper" />
			<meta
				property="twitter:description"
				content="Exactly what the title says"
			/>
			<meta
				property="twitter:image"
				content="https://thoughts.reaper.im/og.png"
			/>

			{children}
		</NextHead>
	)
}

Head.propTypes = {
	children: pt.any,
}
