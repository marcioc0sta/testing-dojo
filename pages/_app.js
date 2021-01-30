import React from 'react'

import GlobalStyle from '~/components/GlobalStyles'

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default App
