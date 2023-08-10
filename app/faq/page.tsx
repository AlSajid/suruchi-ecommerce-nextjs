import Breadcrumb from '@/components/Breadcrumb'
import FAQ from './FAQ'
import Shipping from '@/components/Shipping'

export default function Page() {
	return (
		<main className='main__content_wrapper'>
			<Breadcrumb title='Frequently' />
			<FAQ />
			<Shipping />
		</main>
	)
}
