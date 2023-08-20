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
