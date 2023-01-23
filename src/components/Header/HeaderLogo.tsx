import cl from './Header.module.scss'
import Link from 'next/link'
const HeaderLogo = () => {
	return (
		<Link href={'/'} className={cl.header__logo}>
			Kaze Sport
		</Link>
	)
}

export default HeaderLogo
