import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { persistor, store } from '@/store/store'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { Layout } from '@/components/Layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </PersistGate>
    </Provider>
  )
}
