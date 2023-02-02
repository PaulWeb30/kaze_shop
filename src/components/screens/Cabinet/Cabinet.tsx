import React, { FC } from 'react'
import { Api } from '@/services'
import { useAppDispatch } from '@/redux/hooks'
import { useRouter } from 'next/router'
import { addUserInfo } from '@/redux/slices/user'
import Link from 'next/link'
import CabinetTabs from '@/components/screens/Cabinet/CabinetTabs'
const Cabinet: FC = () => {
	const dispatch = useAppDispatch()
	const router = useRouter()
	React.useEffect(() => {
		const fetchUserData = async () => {
			try {
				const data = await Api().user.getMe()
				if (data.user) {
					dispatch(addUserInfo(data.user))
				}
			} catch (e) {
				router.push('/404')
			}
		}
		fetchUserData()
	}, [])
	return (
		<main className='content'>
			<div className='container'>
				<div className='page_coordinator'>
					<Link href='#'>Главная</Link> | <span>Личный кабинет</span>
				</div>
				<CabinetTabs />
			</div>
		</main>
	)
}

export default Cabinet
