'use client'

import TopBar from './TopBar'
import Main from './Main'
import OffCanvas from './OffCanvas'
import MiniCart from './OffCanvas/MiniCart'
import StickyToolbar from './OffCanvas/StickyToolbar'
import Search from './Search'
import Bottom from './Bottom'
import { useState } from 'react'

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [isCartOpen, setIsCartOpen] = useState(false)

	return (
		<header className='header__section'>
			<TopBar />
			<Main setIsMenuOpen={setIsMenuOpen} setIsCartOpen={setIsCartOpen} />
			<Bottom />
			<OffCanvas isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
			<StickyToolbar />
			<MiniCart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
			<Search />
		</header>
	)
}
