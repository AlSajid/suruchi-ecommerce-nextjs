import Breadcrumb from '@/components/Breadcrumb'
import Shipping from '@/components/Shipping'
import Shop from './Shop'

export default function Page() {
	return (
		<main className='main__content_wrapper'>
			<Breadcrumb title='Shop' />
			<Shop />
			<Shipping />
		</main>
	)
}
