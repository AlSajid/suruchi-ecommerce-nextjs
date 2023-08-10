import Breadcrumb from '@/components/Breadcrumb'
import Shipping from '@/components/Shipping'
import Login from './Login'

export default function Page() {
	return (
		<main className='main__content_wrapper'>
			<Breadcrumb title='Account Page' />
			<Login />
			<Shipping />
		</main>
	)
}
