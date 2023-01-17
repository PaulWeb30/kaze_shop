import '@/styles/reset.scss'
import '@/styles/common.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}
