import Image from 'next/image'

export default function Banner() {
	return (
		<section className='banner__section banner__style2 section--padding color-scheme-2'>
			<div className='section__heading text-center mb-35'>
				<h2 className='section__heading--maintitle style2'>Shop by Categories</h2>
			</div>
			<div className='container-fluid'>
				<div className='row mb--n28'>
					<div className='col-lg-4 col-md-order mb-28'>
						<div className='banner__items position__relative'>
							<a
								className='banner__items--thumbnail '
								href='shop'>
								<Image
									className='banner__items--thumbnail__img'
									src='/images/banners/banner7.png'
									alt='banner-img'
									width={490}
									height={590}
								/>
								<div className='banner__items--content style2'>
									<h3 className='banner__items--content__title style2'>
										NEW <br />
										ACCESSORIES
									</h3>
									<span className='banner__items--content__link style2'>SHOP NOW</span>
								</div>
							</a>
						</div>
					</div>
					<div className='col-lg-8'>
						<div className='banner__style2--top__sidebar d-flex'>
							<div className='banner__items position__relative mr-30 mb-28'>
								<a
									className='banner__items--thumbnail'
									href='shop'>
									<Image
										className='banner__items--thumbnail__img banner__img--max__height'
										src='/images/banners/banner8.png'
										alt='banner-img'
										width={620}
										height={280}
									/>
									<div className='banner__items--content style2'>
										<h3 className='banner__items--content__title style2'>
											NEW <br />
											ACCESSORIES
										</h3>
										<span className='banner__items--content__link style2'>SHOP NOW</span>
									</div>
								</a>
							</div>
							<div className='banner__items position__relative mb-28'>
								<a
									className='banner__items--thumbnail'
									href='shop'>
									<Image
										className='banner__items--thumbnail__img'
										src='/images/banners/banner9.png'
										alt='banner-img'
										width={360}
										height={280}
									/>
									<div className='banner__items--content style2'>
										<h3 className='banner__items--content__title style2'>
											TRENDING <br />
											NOW
										</h3>
										<span className='banner__items--content__link style2'>SHOP NOW</span>
									</div>
								</a>
							</div>
						</div>
						<div className='row row-cols-sm-2 row-cols-1'>
							<div className='col mb-28'>
								<div className='banner__items position__relative'>
									<a
										className='banner__items--thumbnail'
										href='shop'>
										<Image
											className='banner__items--thumbnail__img banner__img--max__height'
											src='/images/banners/banner10.png'
											width={490}
											height={280}
											alt='banner-img'
										/>
										<div className='banner__items--content style2'>
											<h3 className='banner__items--content__title style2'>
												TOP <br />
												SELLER
											</h3>
											<span className='banner__items--content__link style2'>SHOP NOW</span>
										</div>
									</a>
								</div>
							</div>
							<div className='col mb-28'>
								<div className='banner__items position__relative'>
									<a
										className='banner__items--thumbnail'
										href='shop'>
										<Image
											className='banner__items--thumbnail__img banner__img--max__height'
											src='/images/banners/banner11.png'
											width={491}
											height={280}
											alt='banner-img'
										/>
										<div className='banner__items--content style2 right'>
											<h3 className='banner__items--content__title style2'>
												TOP <br />
												DECORATION
											</h3>
											<span className='banner__items--content__link style2'>SHOP NOW</span>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
