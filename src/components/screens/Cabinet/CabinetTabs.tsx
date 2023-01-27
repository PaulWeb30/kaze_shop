import React, { FC } from 'react'
import cl from '../../../styles/cabinet.module.scss'
import Link from 'next/link'
const CabinetTabs: FC = () => {
	return (
		<div className={cl.cabinet_tabs}>
			<Link href='/change_data' className={cl.cabinet_tablink}>
				<span className={`${cl.cabinet_icon} ${cl.cabinet_icon_pencil}`}></span>
				Изменить данные
			</Link>
			<Link href='#' className={cl.cabinet_tablink}>
				<span className={`${cl.cabinet_icon} ${cl.cabinet_icon_change}`}></span>
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
				<span className={`${cl.cabinet_icon} ${cl.cabinet_icon_eye}`}></span>
				Вы смотрели раньше
			</Link>
			<Link href='#' className={cl.cabinet_tablink}>
				<span className={`${cl.cabinet_icon} ${cl.cabinet_icon_logout}`}></span>
				Выход
			</Link>
		</div>
	)
}

export default CabinetTabs
