import '@/css/fonts.css'
import '@/css/app.css'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
