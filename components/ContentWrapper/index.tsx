import Breadcrumb from '../Breadcrumb'
import Shipping from '../Shipping';

export default function ContentWrapper({ title, children }: { title: string; children: React.ReactNode }) {
	return (
		<main className='main__content_wrapper'>
			<Breadcrumb title={title} />
			{children}
			<Shipping />
		</main>
	)
}
