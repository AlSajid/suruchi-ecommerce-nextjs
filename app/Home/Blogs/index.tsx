'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import Link from 'next/link'

export default function Blogs() {
	return (
		<section className='blog__section section--padding pt-0'>
			<div className='container-fluid'>
				<div className='section__heading text-center mb-40'>
					<h2 className='section__heading--maintitle'>From The Blog</h2>
				</div>
				<div className='blog__section--inner blog__swiper--activation swiper'>
					<Swiper
						navigation={true}
						modules={[Navigation]}
						slidesPerView={4}
						spaceBetween={30}
						loop={true}
						breakpoints={{
							1200: {
								slidesPerView: 4
							},
							992: {
								slidesPerView: 3
							},
							768: {
								slidesPerView: 3,
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
							<div className='blog__items'>
								<div className='blog__thumbnail'>
									<Link className='blog__thumbnail--link' href='blog-details'>
										<Image className='blog__thumbnail--img' src='/images/blogs/blog1.png' alt='blog-img' width={360} height={313} />
									</Link>
								</div>
								<div className='blog__content'>
									<span className='blog__content--meta'>February 03, 2022</span>
									<h3 className='blog__content--title'>
										<Link href='blog-details'>Fashion Trends In 2021 Styles, Colors, Accessories</Link>
									</h3>
									<Link className='blog__content--btn primary__btn' href='blog-details'>
										Read more
									</Link>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='blog__items'>
								<div className='blog__thumbnail'>
									<Link className='blog__thumbnail--link' href='blog-details'>
										<Image className='blog__thumbnail--img' src='/images/blogs/blog2.png' alt='blog-img' width={360} height={313} />
									</Link>
								</div>
								<div className='blog__content'>
									<span className='blog__content--meta'>February 03, 2022</span>
									<h3 className='blog__content--title'>
										<Link href='blog-details'>Meet the Woman Behind Cool Ethical Label Refor </Link>
									</h3>
									<Link className='blog__content--btn primary__btn' href='blog-details'>
										Read more
									</Link>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='blog__items'>
								<div className='blog__thumbnail'>
									<Link className='blog__thumbnail--link' href='blog-details'>
										<Image className='blog__thumbnail--img' src='/images/blogs/blog3.png' alt='blog-img' width={360} height={313} />
									</Link>
								</div>
								<div className='blog__content'>
									<span className='blog__content--meta'>February 03, 2022</span>
									<h3 className='blog__content--title'>
										<Link href='blog-details'>Lauryn Hill Could Make Tulle Skirt and Cowboy</Link>
									</h3>
									<Link className='blog__content--btn primary__btn' href='blog-details'>
										Read more
									</Link>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='blog__items'>
								<div className='blog__thumbnail'>
									<Link className='blog__thumbnail--link' href='blog-details'>
										<Image className='blog__thumbnail--img' src='/images/blogs/blog4.png' alt='blog-img' width={360} height={313} />
									</Link>
								</div>
								<div className='blog__content'>
									<span className='blog__content--meta'>February 03, 2022</span>
									<h3 className='blog__content--title'>
										<Link href='blog-details'>Fashion Trends In 2021 Styles, Colors, Accessories</Link>
									</h3>
									<Link className='blog__content--btn primary__btn' href='blog-details'>
										Read more
									</Link>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='blog__items'>
								<div className='blog__thumbnail'>
									<Link className='blog__thumbnail--link' href='blog-details'>
										<Image className='blog__thumbnail--img' src='/images/blogs/blog2.png' alt='blog-img' width={360} height={313} />
									</Link>
								</div>
								<div className='blog__content'>
									<span className='blog__content--meta'>February 03, 2022</span>
									<h3 className='blog__content--title'>
										<Link href='blog-details'>Lauryn Hill Could Make Tulle Skirt and Cowboy</Link>
									</h3>
									<Link className='blog__content--btn primary__btn' href='blog-details'>
										Read more
									</Link>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</section>
	)
}
