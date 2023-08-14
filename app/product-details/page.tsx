import Breadcrumb from '@/components/Breadcrumb'
import ProductDetails from './productDetails'
import Products from '@/components/Products'

export default function Page() {
	return (
		<main className='main__content_wrapper'>
			<Breadcrumb title='Product Details' />
			<ProductDetails />
			<Products title='You may also like' />
		</main>
	)
}
