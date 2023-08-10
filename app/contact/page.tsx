import Breadcrumb from '@/components/Breadcrumb'
import Contact from './Contact'
import ContactMap from './ContactMap'
import BrandLogo from '@/components/BrandLogo'
import Shipping from '@/components/Shipping'

export default function Page() {
	return (
		<main className='main__content_wrapper'>
			<Breadcrumb title='Contact Us' />
			<Contact />
			<ContactMap />
			<BrandLogo />
			<Shipping />
		</main>
	)
}
