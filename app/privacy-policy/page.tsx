import Breadcrumb from '@/components/Breadcrumb'
import Shipping from '@/components/Shipping'
import PrivacyPolicy from './privacy-policy'

export default function Page() {
	return (
		<main className='main__content_wrapper'>
			<Breadcrumb title='Privacy Policy' />
			<PrivacyPolicy />
			<Shipping />
		</main>
	)
}
