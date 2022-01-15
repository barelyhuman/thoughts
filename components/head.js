import NextHead from 'next/head'

export function Head({ children }) {
  return (
    <>
      <NextHead>
        <title>Thoughts by Reaper</title>
        <meta name="title" content="Thoughts by Reaper" />
        <meta name="description" content="Exactly what the title says" />

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
    </>
  )
}
