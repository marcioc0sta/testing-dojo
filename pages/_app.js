import React from 'react'

import GlobalStyle from '~/components/GlobalStyles'

function Tasky({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default Tasky
