import Cabinet from '@/components/screens/Cabinet/Cabinet'
import SpinnerLayout from '@/layouts/SpinnerLayout'
import { withAuth } from '@/hoc/RequiredAuth'
import { NextPage } from 'next'
const CabinetPage: NextPage = () => {
	return (
		<SpinnerLayout>
			<Cabinet />
		</SpinnerLayout>
	)
}

export const getServerSideProps = withAuth(async context => {
	return { props: {} }
})
export default CabinetPage
