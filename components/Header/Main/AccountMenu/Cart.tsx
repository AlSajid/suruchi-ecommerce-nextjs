import CartIcon from '@/components/SVGs/Cart'

export default function Cart() {
	return (
		<li className='header__account--items'>
			<a className='header__account--btn minicart__open--btn' href='#' data-offcanvas>
				<CartIcon />
				<span className='header__account--btn__text'>My cart</span>
				<span className='items__count'>02</span>
			</a>
		</li>
	)
}
