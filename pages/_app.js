import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return(
    <div className={`${inter.className}`}>
      <Head>
        <title>Pomodoro - Timer</title>
      </Head>
      <ChakraProvider>
        <Component {...pageProps} />
       </ChakraProvider>
    </div>
  )
}
