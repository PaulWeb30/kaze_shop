import React from 'react'
import { withAuth } from '@/hoc/RequiredAuth'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { selectUserInfo } from '../redux/slices/user'
import { NextPage } from 'next'
import Image from 'next/image'
import noteSvg from '../assets/icons/NotePencil.svg'
import lockSvg from '../assets/icons/LockKey.svg'
import receiptSvg from '../assets/icons/Receipt.svg'
import markedSvg from '../assets/icons/BookmarkSimple.svg'
import cl from '../styles/cabinet.module.scss'
const Cabinet: NextPage = () => {
	const dispatch = useAppDispatch()
	const userInfo = useAppSelector(selectUserInfo)

	return (
		<main className='content'>
			<div className='container'>
				<div className='page_coordinator'>
					Главная | <span>Личный кабинет</span>
				</div>
				<div className={cl.cabinet_tabs}>
					<button className={cl.cabinet_tablink}>
						<span></span>Изменить данные
					</button>
					<button className={cl.cabinet_tablink}>
						<span></span>
						Изменить данные
					</button>
					<button className={cl.cabinet_tablink}>
						<span></span>Second tab
					</button>
				</div>
				<div className={cl.cabinet_tabcontent}>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
						dignissim maximus enim, nec dictum diam pellentesque nec. Nulla
						facilisis, massa ut egestas bibendum, ex libero varius nisl, a
						aliquet dui ante sed purus. Donec vitae ullamcorper lacus, ut
						vehicula metus. Duis molestie ipsum quis nisl ultrices feugiat. Nam
						at purus ut ligula ultrices aliquet vitae nec eros. Aenean
						condimentum tellus eu urna tincidunt volutpat. Nunc bibendum quam ut
						congue dignissim. Aliquam congue velit at tortor consequat cursus ut
						ut diam. Fusce iaculis auctor purus.
					</p>
				</div>
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
