import '@/styles/reset.scss'
import '@/styles/common.scss'
import type { AppProps } from 'next/app'
import Layout from '@/layouts/MainLayout'
import { wrapper } from '../redux/store'
function App({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default wrapper.withRedux(App)
