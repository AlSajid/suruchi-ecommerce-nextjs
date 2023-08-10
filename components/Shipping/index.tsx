import Image from 'next/image'

export default function Shipping() {
	return (
		<section className='shipping__section2 shipping__style3 section--padding'>
			<div className='container'>
				<div className='shipping__section2--inner shipping__style3--inner d-flex justify-content-between'>
					<div className='shipping__items2 d-flex align-items-center'>
						<div className='shipping__items2--icon'>
							<Image src='/images/others/shipping1.png' alt='' width={51} height={38} />
						</div>
						<div className='shipping__items2--content'>
							<h2 className='shipping__items2--content__title h3'>Shipping</h2>
							<p className='shipping__items2--content__desc'>From handpicked sellers</p>
						</div>
					</div>
					<div className='shipping__items2 d-flex align-items-center'>
						<div className='shipping__items2--icon'>
							<Image src='/images/others/shipping2.png' alt='' width={49} height={47} />
						</div>
						<div className='shipping__items2--content'>
							<h2 className='shipping__items2--content__title h3'>Payment</h2>
							<p className='shipping__items2--content__desc'>From handpicked sellers</p>
						</div>
					</div>
					<div className='shipping__items2 d-flex align-items-center'>
						<div className='shipping__items2--icon'>
							<Image src='/images/others/shipping3.png' alt='' width={50} height={50} />
						</div>
						<div className='shipping__items2--content'>
							<h2 className='shipping__items2--content__title h3'>Return</h2>
							<p className='shipping__items2--content__desc'>From handpicked sellers</p>
						</div>
					</div>
					<div className='shipping__items2 d-flex align-items-center'>
						<div className='shipping__items2--icon'>
							<Image src='/images/others/shipping4.png' alt='' width={51} height={50} />
						</div>
						<div className='shipping__items2--content'>
							<h2 className='shipping__items2--content__title h3'>Support</h2>
							<p className='shipping__items2--content__desc'>From handpicked sellers</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
