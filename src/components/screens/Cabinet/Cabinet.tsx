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
		// <main className=ame='content'>
		// 	<div className='container'>
		// 		<div className='page_coordinator'>
		// 			<Link href='#'>Главная</Link> | <Link href='#'>Личный кабинет</Link>
		// 		</div>
		// 		<CabinetTabs toggleTab={toggleTab} />
		// 		<div className={cl.cabinet_tabcontent}>
		// 			{selectedTab === 1 ? <ChangeUserInfo /> : '312313123123'}
		// 		</div>
		// 	</div>
		// </main>
		<div className='tabs'>
			<input id='tab1' type='radio' name='tabs' checked />
			<label htmlFor='tab1'>вкладка 1</label>
			<div className='tab-content' id='content1'>
				<p>
					1) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
					nihil repellat delectus dicta expedita similique laudantium. Doloribus
					adipisci ipsum unde?
				</p>
			</div>
			<input id='tab2' type='radio' name='tabs' />
			<label htmlFor='tab2'>вкладка 2</label>
			<div className='tab-content' id='content2'>
				<p>
					2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
					nihil repellat delectus dicta expedita similique laudantium. Doloribus
					adipisci ipsum unde?
				</p>
			</div>
			<input id='tab3' type='radio' name='tabs' />
			<label htmlFor='tab3'>вкладка 3</label>
			<div className='tab-content' id='content3'>
				<p>
					3) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
					nihil repellat delectus dicta expedita similique laudantium. Doloribus
					adipisci ipsum unde?
				</p>
			</div>
			<input id='tab4' type='radio' name='tabs' />
			<label htmlFor='tab4'>вкладка 4</label>
			<div className='tab-content' id='content4'>
				<p>
					4) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
					nihil repellat delectus dicta expedita similique laudantium. Doloribus
					adipisci ipsum unde?
				</p>
			</div>
		</div>
	)
}

export const getServerSideProps = withAuth(async context => {
	return { props: {} }
})

export default Cabinet
