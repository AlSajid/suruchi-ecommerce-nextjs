import Breadcrumb from '@/components/Breadcrumb'
import Checkout from './Checkout'
import Shipping from '@/components/Shipping'

export default function Page() {
	return (
		<main className='main__content_wrapper'>
			<Breadcrumb title='Account' />
			<Checkout />
			<Shipping />
		</main>
	)
}