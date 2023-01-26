import React from 'react'
import { withAuth } from '@/hoc/RequiredAuth'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { selectUserInfo } from '../redux/slices/user'
import { NextPage } from 'next'
import SpinnerLayout from '@/layouts/SpinnerLayout'
import Link from 'next/link'
import cl from '../styles/cabinet.module.scss'
const Cabinet: NextPage = () => {
	const dispatch = useAppDispatch()
	const userInfo = useAppSelector(selectUserInfo)

	return (
		<SpinnerLayout>
			<main className='content'>
				<div className='container'>
					<div className='page_coordinator'>
						Главная | <Link href='#'>Личный кабинет</Link>
					</div>
					<div className={cl.cabinet_tabs}>
						<Link href='#' className={cl.cabinet_tablink}>
							<span
								className={`${cl.cabinet_icon} ${cl.cabinet_icon_pencil}`}
							></span>
							Изменить данные
						</Link>
						<Link href='#' className={cl.cabinet_tablink}>
							<span
								className={`${cl.cabinet_icon} ${cl.cabinet_icon_change}`}
							></span>
							Изменить пароль
						</Link>
						<Link href='#' className={cl.cabinet_tablink}>
							<span
								className={`${cl.cabinet_icon} ${cl.cabinet_icon_history}`}
							></span>
							История заказов
						</Link>
						<Link href='#' className={cl.cabinet_tablink}>
							<span
								className={`${cl.cabinet_icon} ${cl.cabinet_icon_bookmarks}`}
							></span>
							Закладки
						</Link>
						<Link href='#' className={cl.cabinet_tablink}>
							<span
								className={`${cl.cabinet_icon} ${cl.cabinet_icon_baskets}`}
							></span>
							Собранные корзины
						</Link>
						<Link href='#' className={cl.cabinet_tablink}>
							<span
								className={`${cl.cabinet_icon} ${cl.cabinet_icon_eye}`}
							></span>
							Вы смотрели раньше
						</Link>
						<Link href='#' className={cl.cabinet_tablink}>
							<span
								className={`${cl.cabinet_icon} ${cl.cabinet_icon_logout}`}
							></span>
							Выход
						</Link>
					</div>
					{/* <div className={cl.cabinet_tabcontent}>
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
				</div> */}
				</div>
			</main>
		</SpinnerLayout>
	)
}

export const getServerSideProps = withAuth(async context => {
	return { props: {} }
})

export default Cabinet
