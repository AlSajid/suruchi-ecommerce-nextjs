import Image from 'next/image'

export default function GridProducts() {
	return (
		<section className='product__section section--padding color-scheme-2 pt-0'>
			<div className='container-fluid'>
				<div className='row row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb--n30'>
					<div className='col mb-30'>
						<div className='banner__items position__relative'>
							<a
								className='banner__items--thumbnail width-100 '
								href='shop'>
								<Image
									className='banner__items--thumbnail__img width-100'
									src='/images/banners/banner14.png'
									alt='banner-img'
									width={355}
									height={482}
								/>
								<div className='banner__items--content__style3'>
									<span className='banner__items--content__style3--subtitle text-white'>Women&apos;s Collection</span>
									<h2 className='banner__items--content__style3--title text-white h3'> Min.40-70% Off</h2>
								</div>
							</a>
						</div>
					</div>
					<div className='col mb-30'>
						<div className='product__grid--wrapper'>
							<div className='product__grid--heading mb-30'>
								<h2 className='product__grid--heading__maintitle position__relative'>Featured</h2>
							</div>
							<div className='product__grid--inner'>
								<div className='product__items product__items--grid d-flex align-items-center'>
									<div className='product__items--grid__thumbnail position__relative'>
										<a
											className='product__items--link'
											href='product-details'>
											<Image
												className='product__items--img product__primary--img'
												src='/images/products/small-product1.png'
												alt='product-img'
												width={100}
												height={120}
											/>
											<Image
												className='product__items--img product__secondary--img'
												src='/images/products/small-product2.png'
												alt='product-img'
												width={100}
												height={120}
											/>
										</a>
									</div>
									<div className='product__items--grid__content'>
										<h3 className='product__items--content__title h4'>
											<a href='product-details'>Women Fish Cut Cloth</a>
										</h3>
										<div className='product__items--price'>
											<span className='current__price'>$110</span>
											<span className='price__divided'></span>
											<span className='old__price'>$78</span>
										</div>
										<ul className='rating product__rating d-flex'>
											<li className='rating__list'>
												<span className='rating__list--icon'>
													<svg
														className='rating__list--icon__svg'
														xmlns='http://www.w3.org/2000/svg'
														width='14.105'
														height='14.732'
														viewBox='0 0 10.105 9.732'>
														<path
															data-name='star - Copy'
															d='M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z'
															transform='translate(0 -0.018)'
															fill='currentColor'></path>
													</svg>
												</span>
											</li>
											<li className='rating__list'>
												<span className='rating__list--icon'>
													<svg
														className='rating__list--icon__svg'
														xmlns='http://www.w3.org/2000/svg'
														width='14.105'
														height='14.732'
														viewBox='0 0 10.105 9.732'>
														<path
															data-name='star - Copy'
															d='M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z'
															transform='translate(0 -0.018)'
															fill='currentColor'></path>
													</svg>
												</span>
											</li>
											<li className='rating__list'>
												<span className='rating__list--icon'>
													<svg
														className='rating__list--icon__svg'
														xmlns='http://www.w3.org/2000/svg'
														width='14.105'
														height='14.732'
														viewBox='0 0 10.105 9.732'>
														<path
															data-name='star - Copy'
															d='M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z'
															transform='translate(0 -0.018)'
															fill='currentColor'></path>
													</svg>
												</span>
											</li>
											<li className='rating__list'>
												<span className='rating__list--icon'>
													<svg
														className='rating__list--icon__svg'
														xmlns='http://www.w3.org/2000/svg'
														width='14.105'
														height='14.732'
														viewBox='0 0 10.105 9.732'>
														<path
															data-name='star - Copy'
															d='M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z'
															transform='translate(0 -0.018)'
															fill='currentColor'></path>
													</svg>
												</span>
											</li>
											<li className='rating__list'>
												<span className='rating__list--icon'>
													<svg
														className='rating__list--icon__svg'
														xmlns='http://www.w3.org/2000/svg'
														width='14.105'
														height='14.732'
														viewBox='0 0 10.105 9.732'>
														<path
															data-name='star - Copy'
															d='M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z'
															transform='translate(0 -0.018)'
															fill='currentColor'></path>
													</svg>
												</span>
											</li>
										</ul>
									</div>
								</div>
								<div className='product__items product__items--grid d-flex align-items-center'>
									<div className='product__items--grid__thumbnail position__relative'>
										<a
											className='product__items--link'
											href='product-details'>
											<Image
												className='product__items--img product__primary--img'
												src='/images/products/small-product3.png'
												alt='product-img'
												width={100}
												height={120}
											/>
											<Image
												className='product__items--img product__secondary--img'
												src='/images/products/small-product4.png'
												alt='product-img'
												width={100}
												height={120}
											/>
										</a>
									</div>
									<div className='product__items--grid__content'>
										<h3 className='product__items--content__title h4'>
											<a href='product-details'>Gorgeous Granite Clock</a>
										</h3>
										<div className='product__items--price'>
											<span className='current__price'>$140</span>
											<span className='price__divided'></span>
											<span className='old__price'>$115</span>
										</div>
										<ul className='rating product__rating d-flex'>
											<li className='rating__list'>
												<span className='rating__list--icon'>
													<svg
														className='rating__list--icon__svg'
														xmlns='http://www.w3.org/2000/svg'
														width='14.105'
														height='14.732'
														viewBox='0 0 10.105 9.732'>
														<path
															data-name='star - Copy'
															d='M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z'
															transform='translate(0 -0.018)'
															fill='currentColor'></path>
													</svg>
												</span>
											</li>
											<li className='rating__list'>
												<span className='rating__list--icon'>
													<svg
														className='rating__list--icon__svg'
														xmlns='http://www.w3.org/2000/svg'
														width='14.105'
														height='14.732'
														viewBox='0 0 10.105 9.732'>
														<path
															data-name='star - Copy'
															d='M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z'
															transform='translate(0 -0.018)'
															fill='currentColor'></path>
													</svg>
												</span>
											</li>
											<li className='rating__list'>
												<span className='rating__list--icon'>
													<svg
														className='rating__list--icon__svg'
														xmlns='http://www.w3.org/2000/svg'
														width='14.105'
														height='14.732'
														viewBox='0 0 10.105 9.732'>
														<path
															data-name='star - Copy'
															d='M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z'
															transform='translate(0 -0.018)'
															fill='currentColor'></path>
													</svg>
												</span>
											</li>
											<li className='rating__list'>
												<span className='rating__list--icon'>
													<svg
														className='rating__list--icon__svg'
														xmlns='http://www.w3.org/2000/svg'
														width='14.105'
														height='14.732'
														viewBox='0 0 10.105 9.732'>
														<path
															data-name='star - Copy'
															d='M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z'
															transform='translate(0 -0.018)'
															fill='currentColor'></path>
													</svg>
												</span>
											</li>
											<li className='rating__list'>
												<span className='rating__list--icon'>
													<svg
														className='rating__list--icon__svg'
														xmlns='http://www.w3.org/2000/svg'
														width='14.105'
														height='14.732'
														viewBox='0 0 10.105 9.732'>
														<path
															data-name='star - Copy'
															d='M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z'
															transform='translate(0 -0.018)'
															fill='currentColor'></path>
													</svg>
												</span>
											</li>
										</ul>
									</div>
								</div>
								<div className='product__items product__items--grid d-flex align-items-center'>
									<div className='product__items--grid__thumbnail position__relative'>
										<a
											className='product__items--link'
											href='product-details'>
											<Image
												className='product__items--img product__primary--img'
												src='/images/products/small-product5.png'
												alt='product-img'
												width={100}
												height={120}
											/>
											<Image
												className='product__items--img product__secondary--img'
												src='/images/products/small-product6.png'
												alt='product-img'
												width={100}
												height={120}
											/>
										</a>
									</div>
									<div className='product__items--grid__content'>
										<h3 className='product__items--content__title h4'>
											<a href='product-details'>Durable Steel Knife</a>
										</h3>
										<div className='product__items--price'>
											<span className='current__price'>$160</span>
											<span className='price__divided'></span>
											<span className='old__price'>$118</span>
										</div>
										<ul className='rating product__rating d-flex'>
											<li className='rating__list'>
												<span className='rating__list--icon'>
													<svg
														className='rating__list--icon__svg'
														xmlns='http://www.w3.org/2000/svg'
														width='14.105'
														height='14.732'
														viewBox='0 0 10.105 9.732'>
														<path
															data-name='star - Copy'
															d='M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z'
															transform='translate(0 -0.018)'
															fill='currentColor'></path>
													</svg>
												</span>
											</li>
											<li className='rating__list'>
												<span className='rating__list--icon'>
													<svg
														className='rating__list--icon__svg'
														xmlns='http://www.w3.org/2000/svg'
														width='14.105'
														height='14.732'
														viewBox='0 0 10.105 9.732'>
														<path
															data-name='star - Copy'
															d='M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z'
															transform='translate(0 -0.018)'
															fill='currentColor'></path>
													</svg>
												</span>
											</li>
											<li className='rating__list'>
												<span className='rating__list--icon'>
													<svg
														className='rating__list--icon__svg'
														xmlns='http://www.w3.org/2000/svg'
														width='14.105'
														height='14.732'
														viewBox='0 0 10.105 9.732'>
														<path
															data-name='star - Copy'
															d='M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z'
															transform='translate(0 -0.018)'
															fill='currentColor'></path>
													</svg>
												</span>
											</li>
											<li className='rating__list'>
												<span className='rating__list--icon'>
													<svg
														className='rating__list--icon__svg'
														xmlns='http://www.w3.org/2000/svg'
														width='14.105'
														height='14.732'
														viewBox='0 0 10.105 9.732'>
														<path
															data-name='star - Copy'
															d='M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z'
															transform='translate(0 -0.018)'
															fill='currentColor'></path>
													</svg>
												</span>
											</li>
											<li className='rating__list'>
												<span className='rating__list--icon'>
													<svg
														className='rating__list--icon__svg'
														xmlns='http://www.w3.org/2000/svg'
														width='14.105'
														height='14.732'
														viewBox='0 0 10.105 9.732'>
														<path
															data-name='star - Copy'
															d='M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z'
															transform='translate(0 -0.018)'
															fill='currentColor'></path>
													</svg>
												</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='col mb-30'>
						<div className='banner__items position__relative'>
							<a
								className='banner__items--thumbnail md-width-100'
								href='shop'>
								<Image
									className='banner__items--thumbnail__img md-width-100'
									src='/images/banners/banner15.png'
									alt='banner-img'
									width={358}
									height={497}
								/>
								<div className='banner__items--content__style3'>
									<span className='banner__items--content__style3--subtitle text-white'>Wmen &apos;s Collection</span>
									<h2 className='banner__items--content__style3--title text-white h3'> Min.40-70% Off</h2>
								</div>
							</a>
						</div>
					</div>
					<div className='col mb-30'>
						<div className='product__grid--wrapper'>
							<div className='product__grid--heading mb-30'>
								<h2 className='product__grid--heading__maintitle position__relative'>Bestsellers</h2>
							</div>
							<div className='product__grid--inner'>
								<div className='product__items product__items--grid d-flex align-items-center'>
									<div className='product__items--grid__thumbnail position__relative'>
										<a
											className='product__items--link'
											href='product-details'>
											<Image
												className='product__items--img product__primary--img'
												src='/images/products/small-product2.png'
												alt='product-img'
												width={100}
												height={120}
											/>
											<Image
												className='product__items--img product__secondary--img'
												src='/images/products/small-product1.png'
												alt='product-img'
												width={100}
												height={120}
											/>
										</a>
									</div>
									<div className='product__items--grid__content'>
										<h3 className='product__items--content__title h4'>
											<a href='product-details'>Women White T-Shirt</a>
										</h3>
										<div className='product__items--price'>
											<span className='current__price'>$110</span>
											<span className='price__divided'></span>
											<span className='old__price'>$78</span>
										</div>
										<ul className='rating product__rating d-flex'>
											<li className='rating__list'>
												<span className='rating__list--icon'>
													<svg
														className='rating__list--icon__svg'
														xmlns='http://www.w3.org/2000/svg'
														width='14.105'
														height='14.732'
														viewBox='0 0 10.105 9.732'>
														<path
															data-name='star - Copy'
															d='M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z'
															transform='translate(0 -0.018)'
															fill='currentColor'></path>
													</svg>
												</span>
											</li>
											<li className='rating__list'>
												<span className='rating__list--icon'>
													<svg
														className='rating__list--icon__svg'
														xmlns='http://www.w3.org/2000/svg'
														width='14.105'
														height='14.732'
														viewBox='0 0 10.105 9.732'>
														<path
															data-name='star - Copy'
															d='M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z'
															transform='translate(0 -0.018)'
															fill='currentColor'></path>
													</svg>
												</span>
											</li>
											<li className='rating__list'>
												<span className='rating__list--icon'>
													<svg
														className='rating__list--icon__svg'
														xmlns='http://www.w3.org/2000/svg'
														width='14.105'
														height='14.732'
														viewBox='0 0 10.105 9.732'>
														<path
															data-name='star - Copy'
															d='M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z'
															transform='translate(0 -0.018)'
															fill='currentColor'></path>
													</svg>
												</span>
											</li>
											<li className='rating__list'>
												<span className='rating__list--icon'>
													<svg
														className='rating__list--icon__svg'
														xmlns='http://www.w3.org/2000/svg'
														width='14.105'
														height='14.732'
														viewBox='0 0 10.105 9.732'>
														<path
															data-name='star - Copy'
															d='M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z'
															transform='translate(0 -0.018)'
															fill='currentColor'></path>
													</svg>
												</span>
											</li>
											<li className='rating__list'>
												<span className='rating__list--icon'>
													<svg
														className='rating__list--icon__svg'
														xmlns='http://www.w3.org/2000/svg'
														width='14.105'
														height='14.732'
														viewBox='0 0 10.105 9.732'>
														<path
															data-name='star - Copy'
															d='M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z'
															transform='translate(0 -0.018)'
															fill='currentColor'></path>
													</svg>
												</span>
											</li>
										</ul>
									</div>
								</div>
								<div className='product__items product__items--grid d-flex align-items-center'>
									<div className='product__items--grid__thumbnail position__relative'>
										<a
											className='product__items--link'
											href='product-details'>
											<Image
												className='product__items--img product__primary--img'
												src='/images/products/small-product4.png'
												alt='product-img'
												width={100}
												height={120}
											/>
											<Image
												className='product__items--img product__secondary--img'
												src='/images/products/small-product3.png'
												alt='product-img'
												width={100}
												height={120}
											/>
										</a>
									</div>
									<div className='product__items--grid__content'>
										<h3 className='product__items--content__title h4'>
											<a href='product-details'>Women Modern Bags</a>
										</h3>
										<div className='product__items--price'>
											<span className='current__price'>$140</span>
											<span className='price__divided'></span>
											<span className='old__price'>$115</span>
										</div>
										<ul className='rating product__rating d-flex'>
											<li className='rating__list'>
												<span className='rating__list--icon'>
													<svg
														className='rating__list--icon__svg'
														xmlns='http://www.w3.org/2000/svg'
														width='14.105'
														height='14.732'
														viewBox='0 0 10.105 9.732'>
														<path
															data-name='star - Copy'
															d='M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z'
															transform='translate(0 -0.018)'
															fill='currentColor'></path>
													</svg>
												</span>
											</li>
											<li className='rating__list'>
												<span className='rating__list--icon'>
													<svg
														className='rating__list--icon__svg'
														xmlns='http://www.w3.org/2000/svg'
														width='14.105'
														height='14.732'
														viewBox='0 0 10.105 9.732'>
														<path
															data-name='star - Copy'
															d='M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z'
															transform='translate(0 -0.018)'
															fill='currentColor'></path>
													</svg>
												</span>
											</li>
											<li className='rating__list'>
												<span className='rating__list--icon'>
													<svg
														className='rating__list--icon__svg'
														xmlns='http://www.w3.org/2000/svg'
														width='14.105'
														height='14.732'
														viewBox='0 0 10.105 9.732'>
														<path
															data-name='star - Copy'
															d='M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z'
															transform='translate(0 -0.018)'
															fill='currentColor'></path>
													</svg>
												</span>
											</li>
											<li className='rating__list'>
												<span className='rating__list--icon'>
													<svg
														className='rating__list--icon__svg'
														xmlns='http://www.w3.org/2000/svg'
														width='14.105'
														height='14.732'
														viewBox='0 0 10.105 9.732'>
														<path
															data-name='star - Copy'
															d='M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z'
															transform='translate(0 -0.018)'
															fill='currentColor'></path>
													</svg>
												</span>
											</li>
											<li className='rating__list'>
												<span className='rating__list--icon'>
													<svg
														className='rating__list--icon__svg'
														xmlns='http://www.w3.org/2000/svg'
														width='14.105'
														height='14.732'
														viewBox='0 0 10.105 9.732'>
														<path
															data-name='star - Copy'
															d='M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z'
															transform='translate(0 -0.018)'
															fill='currentColor'></path>
													</svg>
												</span>
											</li>
										</ul>
									</div>
								</div>
								<div className='product__items product__items--grid d-flex align-items-center'>
									<div className='product__items--grid__thumbnail position__relative'>
										<a
											className='product__items--link'
											href='product-details'>
											<Image
												className='product__items--img product__primary--img'
												src='/images/products/small-product6.png'
												alt='product-img'
												width={100}
												height={120}
											/>
											<Image
												className='product__items--img product__secondary--img'
												src='/images/products/small-product5.png'
												alt='product-img'
												width={100}
												height={120}
											/>
										</a>
									</div>
									<div className='product__items--grid__content'>
										<h3 className='product__items--content__title h4'>
											<a href='product-details'>Smart Blazar for Men</a>
										</h3>
										<div className='product__items--price'>
											<span className='current__price'>$160</span>
											<span className='price__divided'></span>
											<span className='old__price'>$118</span>
										</div>
										<ul className='rating product__rating d-flex'>
											<li className='rating__list'>
												<span className='rating__list--icon'>
													<svg
														className='rating__list--icon__svg'
														xmlns='http://www.w3.org/2000/svg'
														width='14.105'
														height='14.732'
														viewBox='0 0 10.105 9.732'>
														<path
															data-name='star - Copy'
															d='M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z'
															transform='translate(0 -0.018)'
															fill='currentColor'></path>
													</svg>
												</span>
											</li>
											<li className='rating__list'>
												<span className='rating__list--icon'>
													<svg
														className='rating__list--icon__svg'
														xmlns='http://www.w3.org/2000/svg'
														width='14.105'
														height='14.732'
														viewBox='0 0 10.105 9.732'>
														<path
															data-name='star - Copy'
															d='M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z'
															transform='translate(0 -0.018)'
															fill='currentColor'></path>
													</svg>
												</span>
											</li>
											<li className='rating__list'>
												<span className='rating__list--icon'>
													<svg
														className='rating__list--icon__svg'
														xmlns='http://www.w3.org/2000/svg'
														width='14.105'
														height='14.732'
														viewBox='0 0 10.105 9.732'>
														<path
															data-name='star - Copy'
															d='M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z'
															transform='translate(0 -0.018)'
															fill='currentColor'></path>
													</svg>
												</span>
											</li>
											<li className='rating__list'>
												<span className='rating__list--icon'>
													<svg
														className='rating__list--icon__svg'
														xmlns='http://www.w3.org/2000/svg'
														width='14.105'
														height='14.732'
														viewBox='0 0 10.105 9.732'>
														<path
															data-name='star - Copy'
															d='M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z'
															transform='translate(0 -0.018)'
															fill='currentColor'></path>
													</svg>
												</span>
											</li>
											<li className='rating__list'>
												<span className='rating__list--icon'>
													<svg
														className='rating__list--icon__svg'
														xmlns='http://www.w3.org/2000/svg'
														width='14.105'
														height='14.732'
														viewBox='0 0 10.105 9.732'>
														<path
															data-name='star - Copy'
															d='M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z'
															transform='translate(0 -0.018)'
															fill='currentColor'></path>
													</svg>
												</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
