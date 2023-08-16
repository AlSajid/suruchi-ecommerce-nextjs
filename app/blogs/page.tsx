import Breadcrumb from '@/components/Breadcrumb'
import Blogs from './Blog'
import Shipping from '@/components/Shipping'

export default function Blog() {
	return (
		<main className='main__content_wrapper'>
			<Breadcrumb title='Blog Details' />
			<Blogs />
			<Shipping />
		</main>
	)
}
