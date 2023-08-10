import Breadcrumb from '@/components/Breadcrumb'
import Checkout from './Checkout'

export default function Page() {
	return (
		<main className='main__content_wrapper'>
			<Breadcrumb title='Account' />
			<Checkout />
		</main>
	)
}
