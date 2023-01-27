import React from 'react'
import { withAuth } from '@/hoc/RequiredAuth'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { selectUserInfo } from '../../../redux/slices/user'
import { NextPage } from 'next'

import Link from 'next/link'
import CabinetTabs from '@/components/screens/Cabinet/CabinetTabs'
const Cabinet: NextPage = () => {
	const dispatch = useAppDispatch()
	const userInfo = useAppSelector(selectUserInfo)

	return (
		<main className='content'>
			<div className='container'>
				<div className='page_coordinator'>
					<Link href='#'>Главная</Link> | <Link href='#'>Личный кабинет</Link>
				</div>
				<CabinetTabs />
			</div>
		</main>
	)
}

export const getServerSideProps = withAuth(async context => {
	return { props: {} }
})

export default Cabinet
