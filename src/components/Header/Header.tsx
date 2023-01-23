import React, { FC } from 'react'
import cl from './Header.module.scss'
import { HeaderMenu, HeaderInfo, HeaderLogo } from './index'

const Header: FC = () => {
	const [showBurgerMenu, setShowBurgerMenu] = React.useState<boolean>(false)
	const toogleBurgerMenu = React.useCallback(() => {
		setShowBurgerMenu(prev => !prev)
	}, [])
	return (
		<header className={cl.header}>
			<div className='container'>
				<div className={cl.header__body}>
					<HeaderLogo />
					<HeaderMenu classNameToggle={showBurgerMenu} />
					<HeaderInfo toggleBurgerFunc={toogleBurgerMenu} />
				</div>
			</div>
		</header>
	)
}

export default Header
