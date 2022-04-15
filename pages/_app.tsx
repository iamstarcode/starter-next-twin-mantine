import { AppProps } from 'next/app'
import DefaultLayout from '../layouts/default'
import GlobalStyles from './../styles/GlobalStyles'
import { MantineProvider } from '@mantine/styles'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <DefaultLayout>
        <GlobalStyles />
       <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </DefaultLayout>

  )
}
   

export default App
