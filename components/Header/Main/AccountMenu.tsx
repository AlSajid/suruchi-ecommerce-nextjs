import AccountIcon from '@/components/SVGs/Account'
import CartIcon from '@/components/SVGs/Cart'
import FavoriteIcon from '@/components/SVGs/Favorite'

export default function AccountMenu() {
	return (
		<div className='header__account header__sticky--none'>
			<ul className='d-flex'>
				<li className='header__account--items'>
					<a className='header__account--btn' href='my-account.html'>
						<AccountIcon />
						<span className='header__account--btn__text'>My Account</span>
					</a>
				</li>
				<li className='header__account--items d-none d-lg-block'>
					<a className='header__account--btn' href='wishlist.html'>
						<FavoriteIcon />
						<span className='header__account--btn__text'>Wish List</span>
						<span className='items__count wishlist'>02</span>
					</a>
				</li>
				<li className='header__account--items'>
					<a className='header__account--btn minicart__open--btn' href='javascript:void(0)' data-offcanvas>
						<CartIcon />
						<span className='header__account--btn__text'>My cart</span>
						<span className='items__count'>02</span>
					</a>
				</li>
			</ul>
		</div>
	)
}
