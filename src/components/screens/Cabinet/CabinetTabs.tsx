import React, { FC } from 'react'
import cl from '../../../styles/cabinet.module.scss'
import ChangeUserInfo from '@/components/ChangeUserInfo/ChangeUserInfo'
import ChangeUserPassword from '@/components/ChangeUserPassword/ChangeUserPassword'
const CabinetTabs: FC<{
	toggleTab: React.MouseEventHandler<HTMLButtonElement>
}> = ({ toggleTab }) => {
	return (
		<div className={cl.cabinet_tabs}>
			<div className={cl.cabinet_tab}>
				<button
					data-tabindex={1}
					onClick={toggleTab}
					className={cl.cabinet_tablink}
				>
					<span
						className={`${cl.cabinet_icon} ${cl.cabinet_icon_pencil}`}
					></span>
					Изменить данные
				</button>
				{/* <ChangeUserInfo /> */}
			</div>
			<div className={cl.cabinet_tab}>
				<button
					data-tabindex={2}
					onClick={toggleTab}
					className={cl.cabinet_tablink}
				>
					<span
						className={`${cl.cabinet_icon} ${cl.cabinet_icon_change}`}
					></span>
					Изменить пароль
				</button>
				<ChangeUserPassword />
			</div>
			<div className={cl.cabinet_tab}>
				<button className={cl.cabinet_tablink}>
					<span
						className={`${cl.cabinet_icon} ${cl.cabinet_icon_history}`}
					></span>
					История заказов
				</button>
			</div>
			<div className={cl.cabinet_tab}>
				<button className={cl.cabinet_tablink}>
					<span
						className={`${cl.cabinet_icon} ${cl.cabinet_icon_bookmarks}`}
					></span>
					Закладки
				</button>
			</div>
			<div className={cl.cabinet_tab}>
				<button className={cl.cabinet_tablink}>
					<span
						className={`${cl.cabinet_icon} ${cl.cabinet_icon_baskets}`}
					></span>
					Собранные корзины
				</button>
			</div>
			<div className={cl.cabinet_tab}>
				<button className={cl.cabinet_tablink}>
					<span className={`${cl.cabinet_icon} ${cl.cabinet_icon_eye}`}></span>
					Вы смотрели раньше
				</button>
			</div>
			<div className={cl.cabinet_tab}>
				<button className={cl.cabinet_tablink}>
					<span
						className={`${cl.cabinet_icon} ${cl.cabinet_icon_logout}`}
					></span>
					Выход
				</button>
			</div>
		</div>
	)
}

export default CabinetTabs
