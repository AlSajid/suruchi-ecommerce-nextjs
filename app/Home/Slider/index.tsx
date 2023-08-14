'use client'

import Image from 'next/image'
import 'swiper/css/navigation'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

export default function Slider() {
	return (
		<section className='hero__slider--section'>
			<div className='hero__slider--inner hero__slider--activation swiper'>
				<Swiper className='hero__slider--wrapper' loop={true} modules={[Navigation]} spaceBetween={50} slidesPerView={1} navigation={true}>
					<SwiperSlide>
						<div className='hero__slider--items home1__slider--bg'>
							<div className='container-fluid'>
								<div className='hero__slider--items__inner'>
									<div className='row row-cols-1'>
										<div className='col'>
											<div className='slider__content'>
												<p className='slider__content--desc desc1 mb-15'>
													<Image className='slider__text--shape__icon' src='/images/icons/text-shape-icon.png' alt='text-shape-icon' width={25} height={21} /> New Collection
												</p>
												<h2 className='slider__content--maintitle h1'>
													The Great Fashion <br />
													Collection 2022
												</h2>
												<p className='slider__content--desc desc2 d-sm-2-none mb-40'>
													Up To 40% Off Final Sale Items. <br />
													Caught in the Moment!
												</p>
												<a className='slider__btn primary__btn' href='shop'>
													Show Collection
													<svg className='primary__btn--arrow__icon' xmlns='http://www.w3.org/2000/svg' width='20.2' height='12.2' viewBox='0 0 6.2 6.2'>
														<path d='M7.1,4l-.546.546L8.716,6.713H4v.775H8.716L6.554,9.654,7.1,10.2,9.233,8.067,10.2,7.1Z' transform='translate(-4 -4)' fill='currentColor'></path>
													</svg>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='hero__slider--items home1__slider--bg two'>
							<div className='container-fluid'>
								<div className='row'>
									<div className='col'>
										<div className='hero__slider--items__inner'>
											<div className='slider__content'>
												<p className='slider__content--desc desc1 mb-15'>
													<Image className='slider__text--shape__icon' src='/images/icons/text-shape-icon.png' alt='text-shape-icon' width={25} height={21} /> New Collection
												</p>
												<h2 className='slider__content--maintitle h1'>
													The Great Fashion <br />
													Collection 2022
												</h2>
												<p className='slider__content--desc desc2 d-sm-2-none mb-40 '>
													Up To 40% Off Final Sale Items. <br />
													Caught in the Moment!
												</p>
												<a className='primary__btn slider__btn' href='shop'>
													Show Collection
													<svg className='slider__btn--arrow__icon' xmlns='http://www.w3.org/2000/svg' width='20.2' height='12.2' viewBox='0 0 6.2 6.2'>
														<path d='M7.1,4l-.546.546L8.716,6.713H4v.775H8.716L6.554,9.654,7.1,10.2,9.233,8.067,10.2,7.1Z' transform='translate(-4 -4)' fill='currentColor'></path>
													</svg>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='hero__slider--items home1__slider--bg three'>
							<div className='container-fluid'>
								<div className='row'>
									<div className='col-lg-6 offset-lg-6'>
										<div className='hero__slider--items__inner'>
											<div className='slider__content text-center'>
												<p className='slider__content--desc desc1 mb-15'>
													<Image className='slider__text--shape__icon' src='/images/icons/text-shape-icon.png' alt='text-shape-icon' width={25} height={21} />
													New Collection
												</p>
												<h2 className='slider__content--maintitle h1'>
													The Great Fashion <br />
													Collection 2022
												</h2>
												<p className='slider__content--desc desc2 d-sm-2-none mb-40'>
													Up To 40% Off Final Sale Items. <br />
													Caught in the Moment!
												</p>
												<a className='primary__btn slider__btn' href='shop'>
													Show Collection
													<svg className='slider__btn--arrow__icon' xmlns='http://www.w3.org/2000/svg' width='20.2' height='12.2' viewBox='0 0 6.2 6.2'>
														<path d='M7.1,4l-.546.546L8.716,6.713H4v.775H8.716L6.554,9.654,7.1,10.2,9.233,8.067,10.2,7.1Z' transform='translate(-4 -4)' fill='currentColor'></path>
													</svg>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	)
}
