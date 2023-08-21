'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css/pagination'
import 'swiper/css'

export default function Testimonial() {
	return (
		<section className='testimonial__section testimonial__bg position__relative section--padding color-scheme-2'>
			<div className='container'>
				<div className='testimonial__bg--inner testimonial__activation--column1 swiper'>
					<Swiper
						className='hero__slider--wrapper'
						loop={true}
						slidesPerView={1}
						spaceBetween={30}
						modules={[Pagination]}
						pagination={{
							clickable: true
						}}>
						<SwiperSlide>
							<div className='testimonial__items--style2 testimonial__items text-center'>
								<div className='testimonial__items--style2__thumbnail mb-10'>
									<Image
										className='testimonial__items--style2__thumbnail--img border-radius-50'
										src='/images/others/testimonial-thumb1.png'
										alt='testimonial-img'
										width={80}
										height={80}
									/>
								</div>
								<div className='testimonial__items--content'>
									<h2 className='testimonial__items--title text-white h3'>Richard Anderson</h2>
									<span className='testimonial__items--subtitle text-white'>Nevada, USA</span>
									<p className='testimonial__items--desc style2 text-white'>Lorem ipsum dolor sit amet, consectetur adipisicin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </p>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='testimonial__items--style2 testimonial__items text-center'>
								<div className='testimonial__items--style2__thumbnail mb-10'>
									<Image
										className='testimonial__items--style2__thumbnail--img border-radius-50'
										src='/images/others/testimonial-thumb2.png'
										alt='testimonial-img'
										width={80}
										height={80}
									/>
								</div>
								<div className='testimonial__items--content'>
									<h2 className='testimonial__items--title text-white h3'>Nike Mardson</h2>
									<span className='testimonial__items--subtitle text-white'>fashion</span>
									<p className='testimonial__items--desc style2 text-white'>Lorem ipsum dolor sit amet, consectetur adipisicin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </p>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='testimonial__items--style2 testimonial__items text-center'>
								<div className='testimonial__items--style2__thumbnail mb-10'>
									<Image
										className='testimonial__items--style2__thumbnail--img border-radius-50'
										src='/images/others/testimonial-thumb3.png'
										alt='testimonial-img'
										width={80}
										height={80}
									/>
								</div>
								<div className='testimonial__items--content'>
									<h2 className='testimonial__items--title text-white h3'>Nike Mardson</h2>
									<span className='testimonial__items--subtitle text-white'>fashion</span>
									<p className='testimonial__items--desc style2 text-white'>Lorem ipsum dolor sit amet, consectetur adipisicin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </p>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
					<div className='testimonial__pagination style2 swiper-pagination'></div>
				</div>
			</div>
		</section>
	)
}
