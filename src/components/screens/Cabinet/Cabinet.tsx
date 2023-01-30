import React from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { selectUserInfo } from '../../../redux/slices/user'
import { NextPage } from 'next'
import cl from '../../../styles/cabinet.module.scss'
import Link from 'next/link'
import CabinetTabs from '@/components/screens/Cabinet/CabinetTabs'
import ChangeUserInfo from '@/components/ChangeUserInfo/ChangeUserInfo'
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
				{/* <div className={cl.cabinet_tabcontent}>
					{selectedTab === 1 ? <ChangeUserInfo /> : '312313123123'}
				</div> */}
			</div>
		</main>
	)
}

export default Cabinet
