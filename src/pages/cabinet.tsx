import React from 'react'
import { withAuth } from '@/hoc/RequiredAuth'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import user, { selectUserInfo } from '../redux/slices/user'
import { NextPage } from 'next'

const Cabinet: NextPage = () => {
	const dispatch = useAppDispatch()
	const userInfo = useAppSelector(selectUserInfo)

	return (
		<main className='content'>
			<div className='container'>
				<div className='page_coordinator'>
					Главная | <span>Личный кабинет</span>
				</div>
				<div className='cabinet_body'></div>
				<h1>Users cabinet</h1>
				{!userInfo || userInfo === null
					? 'no info'
					: 'this is' + userInfo.name + 'profile'}
			</div>
		</main>
	)
}

export const getServerSideProps = withAuth(async context => {
	return { props: {} }
})

export default Cabinet
