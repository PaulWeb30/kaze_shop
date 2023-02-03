import React from 'react'
import Spinner from '@/components/Spinner/Spinner'
const SpinnerLayout: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [spinnerShow, setSpinnerShow] = React.useState<boolean>(true)
	React.useEffect(() => {
		setTimeout(() => {
			setSpinnerShow(false)
		}, 1500)
	}, [])
	return <>{spinnerShow ? <Spinner /> : children}</>
}

export default SpinnerLayout
