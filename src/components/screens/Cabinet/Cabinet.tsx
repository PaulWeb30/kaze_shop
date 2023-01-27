import React, { HTMLInputTypeAttribute } from 'react'
import { withAuth } from '@/hoc/RequiredAuth'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { selectUserInfo } from '../../../redux/slices/user'
import { NextPage } from 'next'
import cl from '../../../styles/cabinet.module.scss'
import Link from 'next/link'
import CabinetTabs from '@/components/screens/Cabinet/CabinetTabs'
import ChangeUserInfo from '@/components/ChangeUserInfo/ChangeUserInfo'
const Cabinet: NextPage = () => {
	const [selectedTab, setSelectedTab] = React.useState<number | null>(1)
	const dispatch = useAppDispatch()
	const userInfo = useAppSelector(selectUserInfo)
	const toggleTab = React.useCallback(
		(e: React.MouseEvent<HTMLButtonElement>) => {
			const tabIndex = (e.target as HTMLButtonElement).getAttribute(
				'data-tabindex'
			)
			const tabNumber = tabIndex || 1
			setSelectedTab(+tabNumber)
		},
		[selectedTab]
	)
	return (
		<main className='content'>
			<div className='container'>
				<div className='page_coordinator'>
					<Link href='#'>Главная</Link> | <Link href='#'>Личный кабинет</Link>
				</div>
				<CabinetTabs toggleTab={toggleTab} />
				<div className={cl.cabinet_tabcontent}>
					{selectedTab === 1 ? <ChangeUserInfo /> : '312313123123'}
				</div>
			</div>
		</main>
	)
}

export const getServerSideProps = withAuth(async context => {
	return { props: {} }
})

export default Cabinet
