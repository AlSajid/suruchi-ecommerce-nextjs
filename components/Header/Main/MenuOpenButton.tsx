import MenuOpenButtonIcon from '@/components/SVGs/MenuOpenButton'
import Link from 'next/link'

export default function MenuOpenButton({ setIsMenuOpen }: { setIsMenuOpen: Function }) {
	return (
		<div className='offcanvas__header--menu__open' onClick={() => setIsMenuOpen(true)}>
			<Link className='offcanvas__header--menu__open--btn' href='#' data-offcanvas>
				<MenuOpenButtonIcon />
				<span className='visually-hidden'>Menu Open</span>
			</Link>
		</div>
	)
}
