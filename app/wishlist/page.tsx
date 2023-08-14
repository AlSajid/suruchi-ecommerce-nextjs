import BrandLogo from '../../components/BrandLogo'
import Breadcrumb from '../../components/Breadcrumb'
import Cart from './Cart'
import Products from '../../components/Products'
import Shipping from '../../components/Shipping'

export default function Wishlist() {
	return (
		<main className='main__content_wrapper'>
			<Breadcrumb title='Wishlist' />
			<Cart />
			<Products title='New Products' />
			<BrandLogo />
			<Shipping />
		</main>
	)
}
