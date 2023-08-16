'use client'

import Search from './Search'
import AccountMenu from './AccountMenu'
import Logo from './Logo'
import StickyMenu from './StickyMenu'
import StickyAccount from './StickyAccount'
import MenuOpenButton from './MenuOpenButton'
import { useEffect, useState } from 'react'

export default function Main({ setIsMenuOpen, setIsCartOpen }: { setIsMenuOpen: Function; setIsCartOpen: Function }) {
	const [isSticky, setIsSticky] = useState<boolean>(false)

	const handleScroll = (): void => {
		if (window.scrollY >= 300) {
			setIsSticky(true)
		} else {
			setIsSticky(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<div className={`main__header header__sticky ${isSticky ? 'sticky' : ''}`}>
			<div className='container-fluid'>
				<div className='main__header--inner position__relative d-flex justify-content-between align-items-center'>
					<MenuOpenButton setIsMenuOpen={setIsMenuOpen} />
					<Logo />
					{isSticky ? (
						<>
							<StickyMenu />
							<StickyAccount setIsCartOpen={setIsCartOpen} />
						</>
					) : (
						<>
							<Search />
							<AccountMenu setIsCartOpen={setIsCartOpen} />
						</>
					)}
				</div>
			</div>
		</div>
	)
}
