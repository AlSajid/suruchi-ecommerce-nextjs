import Breadcrumb from '@/components/Breadcrumb'
import Shipping from '@/components/Shipping'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
	return (
		<main className='main__content_wrapper'>
			<Breadcrumb title='Error 404' />
			<section className='error__section section--padding'>
				<div className='container'>
					<div className='row row-cols-1'>
						<div className='col'>
							<div className='error__content text-center'>
								<Image className='error__content--img mb-50' src='/images/others/404-thumb.png' alt='error-img' width={791} height={672} />
								<h2 className='error__content--title'>Opps ! We,ar Not Found This Page </h2>
								<p className='error__content--desc'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi animi aliquid minima assumenda.</p>
								<Link className='error__content--btn primary__btn' href='/'>
									Back To Home
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Shipping />
		</main>
	)
}
