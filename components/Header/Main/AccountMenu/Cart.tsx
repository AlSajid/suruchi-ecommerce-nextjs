import CartIcon from '@/components/SVGs/Cart'
import HeaderButton from '@/components/Header/Button'

export default function Cart({ setIsCartOpen }: { setIsCartOpen: Function }) {
	return (
		<li className='header__account--items' onClick={() => setIsCartOpen(true)}>
			<HeaderButton icon={<CartIcon />} title='My Cart' href=''>
				<span className='items__count'>02</span>
			</HeaderButton>
		</li>
	)
}

{
	/* <Link className='header__account--btn ' href='#' data-offcanvas>
				<CartIcon />
				<span className='header__account--btn__text'>My cart</span>
				<span className='items__count'>02</span>
			</Link> */
}
