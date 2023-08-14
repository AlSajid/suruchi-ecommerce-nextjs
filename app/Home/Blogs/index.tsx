'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation } from 'swiper/modules'
import 'swiper/css/navigation'

export default function Blogs() {
	return (
		<section className='blog__section section--padding pt-0'>
			<div className='container-fluid'>
				<div className='section__heading text-center mb-40'>
					<h2 className='section__heading--maintitle'>From The Blog</h2>
				</div>
				<div className='blog__section--inner blog__swiper--activation swiper'>
					<Swiper
						spaceBetween={50}
						loop={true}
						breakpoints={{
							768: {
								slidesPerView: 5
							},
							480: {
								slidesPerView: 4
							},
							320: {
								slidesPerView: 3
							},
							200: {
								slidesPerView: 2
							},
							0: {
								slidesPerView: 1
							}
						}}>
						<SwiperSlide>
							<div className='blog__items'>
								<div className='blog__thumbnail'>
									<a className='blog__thumbnail--link' href='blog-details'>
										<Image className='blog__thumbnail--img' src='/images/blogs/blog1.png' alt='blog-img' width={360} height={313} />
									</a>
								</div>
								<div className='blog__content'>
									<span className='blog__content--meta'>February 03, 2022</span>
									<h3 className='blog__content--title'>
										<a href='blog-details'>Fashion Trends In 2021 Styles, Colors, Accessories</a>
									</h3>
									<a className='blog__content--btn primary__btn' href='blog-details'>
										Read more
									</a>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='blog__items'>
								<div className='blog__thumbnail'>
									<a className='blog__thumbnail--link' href='blog-details'>
										<Image className='blog__thumbnail--img' src='/images/blogs/blog2.png' alt='blog-img' width={360} height={313} />
									</a>
								</div>
								<div className='blog__content'>
									<span className='blog__content--meta'>February 03, 2022</span>
									<h3 className='blog__content--title'>
										<a href='blog-details'>Meet the Woman Behind Cool Ethical Label Refor </a>
									</h3>
									<a className='blog__content--btn primary__btn' href='blog-details'>
										Read more
									</a>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='blog__items'>
								<div className='blog__thumbnail'>
									<a className='blog__thumbnail--link' href='blog-details'>
										<Image className='blog__thumbnail--img' src='/images/blogs/blog3.png' alt='blog-img' width={360} height={313} />
									</a>
								</div>
								<div className='blog__content'>
									<span className='blog__content--meta'>February 03, 2022</span>
									<h3 className='blog__content--title'>
										<a href='blog-details'>Lauryn Hill Could Make Tulle Skirt and Cowboy</a>
									</h3>
									<a className='blog__content--btn primary__btn' href='blog-details'>
										Read more
									</a>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='blog__items'>
								<div className='blog__thumbnail'>
									<a className='blog__thumbnail--link' href='blog-details'>
										<Image className='blog__thumbnail--img' src='/images/blogs/blog4.png' alt='blog-img' width={360} height={313} />
									</a>
								</div>
								<div className='blog__content'>
									<span className='blog__content--meta'>February 03, 2022</span>
									<h3 className='blog__content--title'>
										<a href='blog-details'>Fashion Trends In 2021 Styles, Colors, Accessories</a>
									</h3>
									<a className='blog__content--btn primary__btn' href='blog-details'>
										Read more
									</a>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='blog__items'>
								<div className='blog__thumbnail'>
									<a className='blog__thumbnail--link' href='blog-details'>
										<Image className='blog__thumbnail--img' src='/images/blogs/blog2.png' alt='blog-img' width={360} height={313} />
									</a>
								</div>
								<div className='blog__content'>
									<span className='blog__content--meta'>February 03, 2022</span>
									<h3 className='blog__content--title'>
										<a href='blog-details'>Lauryn Hill Could Make Tulle Skirt and Cowboy</a>
									</h3>
									<a className='blog__content--btn primary__btn' href='blog-details'>
										Read more
									</a>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</section>
	)
}
