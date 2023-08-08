import Image from 'next/image'

export default function Banner() {
	return (
		<section className='banner__section section--padding pt-0'>
			<div className='container-fluid'>
				<div className='row row-cols-1'>
					<div className='col'>
						<div className='banner__section--inner position__relative'>
							<a className='banner__items--thumbnail display-block' href='shop.html'>
								<Image
									className='banner__items--thumbnail__img banner__img--height__md display-block'
									src='/images/banners/banner-bg2.png'
									alt='banner-img'
									width={1531}
									height={400}
								/>
								<div className='banner__content--style2'>
									<h2 className='banner__content--style2__title text-white'>
										Need Winter Boots?{' '}
									</h2>
									<p className='banner__content--style2__desc'>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
										eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
										minim veniam, quis nostrud exercitation{' '}
									</p>
									<span className='primary__btn'>
										Shop Now
										<svg
											className='primary__btn--arrow__icon'
											xmlns='http://www.w3.org/2000/svg'
											width='20.2'
											height='12.2'
											viewBox='0 0 6.2 6.2'>
											<path
												d='M7.1,4l-.546.546L8.716,6.713H4v.775H8.716L6.554,9.654,7.1,10.2,9.233,8.067,10.2,7.1Z'
												transform='translate(-4 -4)'
												fill='currentColor'></path>
										</svg>
									</span>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
