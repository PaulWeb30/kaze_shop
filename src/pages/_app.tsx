import '@/styles/reset.scss'
import '@/styles/common.scss'
import type { AppProps } from 'next/app'
import Layout from '@/layouts/MainLayout'
import { wrapper } from '../redux/store'
import { Api } from '@/services'
import { Suspense } from 'react'
import Spinner from '@/components/Spinner/Spinner'
function App({ Component, pageProps }: AppProps) {
	return (
		<Suspense fallback={<Spinner />}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Suspense>
	)
}

// App.getInitialProps = wrapper.getInitialAppProps(
// 	store =>
// 		async ({ ctx, Component }) => {
// 			try {
// 				await Api(ctx).user.getMe()
// 			} catch (err) {
// 				if (ctx.asPath === '/cabinet' && ctx.res) {
// 					ctx.res.writeHead(302, {
// 						Location: '/403',
// 					})
// 					ctx.res.end()
// 				} else  {

// 					ctx.res.writeHead(302, {
// 						Location: '/404',
// 					})

// 					ctx.res.end()
// 				}
// 				console.log(err)
// 			}

// 			return {
// 				pageProps: Component.getInitialProps
// 					? await Component.getInitialProps({ ...ctx, store })
// 					: {},
// 			}
// 		}
// )

export default wrapper.withRedux(App)
