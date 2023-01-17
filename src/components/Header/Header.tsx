import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import cl from './Header.module.scss'
import shopingCartSVG from '../../assets/icons/ShoppingCart.svg'
import accountSVG from '../../assets/icons/User.svg'
import arrowSVG from '../../assets/icons/Arrow.svg'
const Header: FC = () => {
	const showBurgerMenu = () => {
		
	}
	return (
		<header className={cl.header}>
			<div className='container'>
				<div className={cl.header__body}>
					<Link href={'/'} className={cl.header__logo}>
						Kaze Sport
					</Link>

					<nav className={cl.header__menu}>
						<ul className={cl.header__list}>
							<li>
								<Link href='#' className={cl.header__link}>
									Лосины
								</Link>
							</li>
							<li>
								<Link href='#' className={cl.header__link}>
									Костюмы
								</Link>
							</li>
							<li>
								<Link href='#' className={cl.header__link}>
									Велосипедки
								</Link>
							</li>
							<li>
								<Link href='#' className={cl.header__link}>
									Повседневное белье
								</Link>
							</li>
							<li>
								<Link href='#' className={cl.header__link}>
									Сумки
								</Link>
							</li>
							<li>
								<Link href='#' className={cl.header__link}>
									Топы
								</Link>
							</li>
						</ul>
					</nav>
					<div className={cl.header__info}>
						<div className={cl.header__language}>
							<span>УКР</span>
							<Image
								src={arrowSVG}
								alt='link to user basket'
								width={18}
								height={18}
							/>
						</div>
						<Link href={'/'}>
							<Image
								src={shopingCartSVG}
								alt='link to user basket'
								width={28}
								height={28}
							/>
						</Link>
						<Link href={'/4'}>
							<Image
								src={accountSVG}
								alt='link to user cabiner'
								width={28}
								height={28}
								className={cl.header__info_accountSVG}
							/>
						</Link>
						<div onClick={showBurgerMenu} className={cl.header__burger}>
							<span></span>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
