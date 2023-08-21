'use client'

import Image from 'next/image'

import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export default function NewCollections() {
	return (
		<section className='new__product--section section--padding pt-0'>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-lg-4 col-md-5'>
						<div className='product__collection--content'>
							<h2 className='product__collection--content__title'>
								The New <br />
								Collection
							</h2>
							<p className='product__collection--content__desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro aut accusamus eum accusantium maxime nam repudiandae?</p>
							<a
								className='product__collection--content__btn primary__btn btn__style3'
								href='shop'>
								View More
							</a>
						</div>
					</div>
					<div className='col-lg-8 col-md-7'>
						<div className='new__product--sidebar position__relative'>
							<div className=' product__swiper--column3 swiper'>
								<Swiper
									slidesPerView={3}
									loop={true}
									spaceBetween={30}
									navigation={true}
									modules={[Navigation]}
									breakpoints={{
										1200: {
											slidesPerView: 3
										},
										992: {
											slidesPerView: 2
										},
										768: {
											slidesPerView: 2,
											spaceBetween: 30
										},
										480: {
											slidesPerView: 2,
											spaceBetween: 20
										},
										0: {
											slidesPerView: 1
										}
									}}>
									<SwiperSlide>
										<div className='new__product--items'>
											<div className='new__product--thumbnail'>
												<a
													className='new__product--thumbnail__link'
													href='shop'>
													<Image
														className='new__product--thumbnail__img'
														src='/images/products/big-product2.jpg'
														alt='product-img'
														width={580}
														height={630}
													/>
												</a>
											</div>
											<div className='new__product--content'>
												<h3 className='new__product--content__title'>
													<a href='shop'>Denim Jacket</a>
												</h3>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className='new__product--items'>
											<div className='new__product--thumbnail'>
												<a
													className='new__product--thumbnail__link'
													href='shop'>
													<Image
														className='new__product--thumbnail__img'
														src='/images/products/big-product5.jpg'
														alt='product-img'
														width={580}
														height={630}
													/>
												</a>
											</div>
											<div className='new__product--content'>
												<h3 className='new__product--content__title'>
													<a href='shop'>Shoulder Bag</a>
												</h3>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className='new__product--items'>
											<div className='new__product--thumbnail'>
												<a
													className='new__product--thumbnail__link'
													href='shop'>
													<Image
														className='new__product--thumbnail__img'
														src='/images/products/big-product4.jpg'
														alt='product-img'
														width={580}
														height={630}
													/>
												</a>
											</div>
											<div className='new__product--content'>
												<h3 className='new__product--content__title'>
													<a href='shop'>Cotton Dress</a>
												</h3>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className='new__product--items'>
											<div className='new__product--thumbnail'>
												<a
													className='new__product--thumbnail__link'
													href='shop'>
													<Image
														className='new__product--thumbnail__img'
														src='/images/products/big-product3.jpg'
														alt='product-img'
														width={580}
														height={630}
													/>
												</a>
											</div>
											<div className='new__product--content'>
												<h3 className='new__product--content__title'>
													<a href='shop'>Mini Dresss</a>
												</h3>
											</div>
										</div>
									</SwiperSlide>
								</Swiper>
								<div className='swiper__nav--btn style3 swiper-button-next'></div>
								<div className='swiper__nav--btn style3 swiper-button-prev'></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
