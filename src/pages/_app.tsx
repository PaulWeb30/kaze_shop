import '@/styles/reset.scss'
import '@/styles/common.scss'
import type { AppProps } from 'next/app'
import Layout from '@/layouts/MainLayout'
export default function App({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}
