import Breadcrumb from '@/components/Breadcrumb'
import BrandLogo from '@/components/BrandLogo'
import Shipping from '@/components/Shipping'
import Portfolio from './Portfolio'

export default function Page() {
	return (
		<main className='main__content_wrapper'>
			<Breadcrumb title='Portfolio Grid' />
			<Portfolio />
			<BrandLogo />
			<Shipping />
		</main>
	)
}
