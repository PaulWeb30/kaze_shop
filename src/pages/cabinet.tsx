import Cabinet from '@/components/screens/Cabinet/Cabinet'
import SpinnerLayout from '@/layouts/SpinnerLayout'
import { NextPage } from 'next'
const CabinetPage: NextPage = () => {
	return (
		<SpinnerLayout>
			<Cabinet />
		</SpinnerLayout>
	)
}

export default CabinetPage
