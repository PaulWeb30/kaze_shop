import React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import CabinetTabs from '@/components/screens/Cabinet/CabinetTabs'
const Cabinet: NextPage = () => {
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
