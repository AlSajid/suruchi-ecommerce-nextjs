import Image from 'next/image'

export default function Banners1() {
	return (
		<section className='banner__section section--padding'>
			<div className='container-fluid'>
				<div className='row mb--n28'>
					<div className='col-lg-5 col-md-order mb-28'>
						<div className='banner__items'>
							<a className='banner__items--thumbnail position__relative' href='shop.html'>
								<Image
									className='banner__items--thumbnail__img'
									src='assets/img/banner/banner1.png'
									alt='banner-img'
								/>
								<div className='banner__items--content'>
									<span className='banner__items--content__subtitle'>17% Discount</span>
									<h2 className='banner__items--content__title h3'>
										Spring Collection <br />
										Style To
									</h2>
									<span className='banner__items--content__link'>
										View Discounts
										<svg
											className='banner__items--content__arrow--icon'
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
					<div className='col-lg-7 mb-28'>
						<div className='row row-cols-lg-2 row-cols-sm-2 row-cols-1'>
							<div className='col mb-28'>
								<div className='banner__items'>
									<a
										className='banner__items--thumbnail position__relative'
										href='shop.html'>
										<Image
											className='banner__items--thumbnail__img'
											src='assets/img/banner/banner2.png'
											alt='banner-img'
										/>
										<div className='banner__items--content'>
											<span className='banner__items--content__subtitle text__secondary'>
												Shop Women
											</span>
											<h2 className='banner__items--content__title h3'>
												Up to 70% Off & <br />
												Free Shipping
											</h2>
											<span className='banner__items--content__link'>
												View Discounts
												<svg
													className='banner__items--content__arrow--icon'
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
							<div className='col mb-28'>
								<div className='banner__items'>
									<a
										className='banner__items--thumbnail position__relative'
										href='shop.html'>
										<Image
											className='banner__items--thumbnail__img'
											src='assets/img/banner/banner3.png'
											alt='banner-img'
										/>
										<div className='banner__items--content'>
											<span className='banner__items--content__subtitle'>
												Shop Women
											</span>
											<h2 className='banner__items--content__title h3'>
												Free Shipping Over <br />
												Order $120
											</h2>
											<span className='banner__items--content__link'>
												View Discounts
												<svg
													className='banner__items--content__arrow--icon'
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
						<div className='banner__items'>
							<a className='banner__items--thumbnail position__relative' href='shop.html'>
								<Image
									className='banner__items--thumbnail__img banner__img--max__height'
									src='assets/img/banner/banner4.png'
									alt='banner-img'
								/>
								<div className='banner__items--content'>
									<span className='banner__items--content__subtitle'>25% Discount</span>
									<h2 className='banner__items--content__title h3'>
										Leather Saddle <br />
										Bag Style
									</h2>
									<span className='banner__items--content__link'>
										View Discounts
										<svg
											className='banner__items--content__arrow--icon'
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
