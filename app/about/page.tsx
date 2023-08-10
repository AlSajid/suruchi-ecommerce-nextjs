import Breadcrumb from '@/components/Breadcrumb'
import Testimonial from '@/components/Testimonial'
import About from './About'
import CounterUpBanner from './CouterUpBanner'
import TeamMembers from './TeamMembers'
import Shipping from '@/components/Shipping'
import BrandLogo from '@/components/BrandLogo'

export default function Page() {
	return (
		<main className='main__content_wrapper'>
			<Breadcrumb title='About' />
			<About />
			<CounterUpBanner />
			<TeamMembers />
			<Testimonial />
			<Shipping />
			<BrandLogo />
		</main>
	)
}
