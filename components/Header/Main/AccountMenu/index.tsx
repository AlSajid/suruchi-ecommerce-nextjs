import MyAccount from './MyAccount'
import Favorites from './Favorites'
import Cart from './Cart'

export default function AccountMenu({ setIsCartOpen }: { setIsCartOpen: Function }) {
	return (
		<div className='header__account header__sticky--none'>
			<ul className='d-flex'>
				<MyAccount />
				<Favorites />
				<Cart setIsCartOpen={setIsCartOpen} />
			</ul>
		</div>
	)
}
