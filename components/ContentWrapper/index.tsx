import BrandLogo from '../BrandLogo'
import Breadcrumb from '../Breadcrumb'
import Products from '../Products'
import Shipping from '../Shipping'

export default function ContentWrapper({ title, children }: { title: string; children: React.ReactNode }) {
	return (
		<main className='main__content_wrapper'>
			<Breadcrumb title={title} />
			{children}
			<Products title='New Products' />
			<BrandLogo />
			<Shipping />
		</main>
	)
}
