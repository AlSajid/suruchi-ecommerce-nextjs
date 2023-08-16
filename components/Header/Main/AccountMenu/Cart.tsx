import CartIcon from '@/components/SVGs/Cart'
import Link from 'next/link'

export default function Cart({ setIsCartOpen }: { setIsCartOpen: Function }) {
	return (
		<li className='header__account--items' onClick={() => setIsCartOpen(true)}>
			<Link className='header__account--btn minicart__open--btn' href='#' data-offcanvas>
				<CartIcon />
				<span className='header__account--btn__text'>My cart</span>
				<span className='items__count'>02</span>
			</Link>
		</li>
	)
}
