import BrandLogo from '@/components/BrandLogo'
import Products from '@/components/Products'
import Shipping from '@/components/Shipping'
import Breadcrumb from '@/components/Breadcrumb'
import Cart from './Cart'

export default function Page() {
	return (
		<main className='main__content_wrapper'>
			<Breadcrumb title='Shopping Cart' />
			<Cart />
			<Products title='New Products' />
			<BrandLogo />
			<Shipping />
		</main>
	)
}
