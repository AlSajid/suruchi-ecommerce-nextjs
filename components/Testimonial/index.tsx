'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export default function Testimonial() {
	return (
		<section className='testimonial__section section--padding pt-0'>
			<div className='container-fluid'>
				<div className='section__heading text-center mb-40'>
					<h2 className='section__heading--maintitle'>Our Clients Say</h2>
				</div>
				<div className='testimonial__section--inner testimonial__swiper--activation swiper'>
					<Swiper
						className='hero__slider--wrapper'
						spaceBetween={50}
						slidesPerView={3}
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
							<div className='testimonial__items text-center'>
								<div className='testimonial__items--thumbnail'>
									<Image className='testimonial__items--thumbnail__img border-radius-50' src='/images/others/testimonial-thumb1.png' alt='testimonial-img' width={80} height={80} />
								</div>
								<div className='testimonial__items--content'>
									<h3 className='testimonial__items--title'>Nike Mardson</h3>
									<span className='testimonial__items--subtitle'>fashion</span>
									<p className='testimonial__items--desc'>Lorem ipsum dolor sit amet, consectetur adipisicin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </p>
									<ul className='rating testimonial__rating d-flex justify-content-center'>
										<li className='rating__list'>
											<span className='rating__list--icon'>
												<svg className='rating__list--icon__svg' xmlns='http://www.w3.org/2000/svg' width='14.105' height='14.732' viewBox='0 0 10.105 9.732'>
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
												<svg className='rating__list--icon__svg' xmlns='http://www.w3.org/2000/svg' width='14.105' height='14.732' viewBox='0 0 10.105 9.732'>
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
												<svg className='rating__list--icon__svg' xmlns='http://www.w3.org/2000/svg' width='14.105' height='14.732' viewBox='0 0 10.105 9.732'>
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
												<svg className='rating__list--icon__svg' xmlns='http://www.w3.org/2000/svg' width='14.105' height='14.732' viewBox='0 0 10.105 9.732'>
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
												<svg className='rating__list--icon__svg' xmlns='http://www.w3.org/2000/svg' width='14.105' height='14.732' viewBox='0 0 10.105 9.732'>
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
						</SwiperSlide>
						<SwiperSlide>
							<div className='testimonial__items text-center'>
								<div className='testimonial__items--thumbnail'>
									<Image className='testimonial__items--thumbnail__img border-radius-50' src='/images/others/testimonial-thumb2.png' alt='testimonial-img' width={80} height={80} />
								</div>
								<div className='testimonial__items--content'>
									<h3 className='testimonial__items--title'>Laura Johnson</h3>
									<span className='testimonial__items--subtitle'>fashion</span>
									<p className='testimonial__items--desc'>Lorem ipsum dolor sit amet, consectetur adipisicin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </p>
									<ul className='rating testimonial__rating d-flex justify-content-center'>
										<li className='rating__list'>
											<span className='rating__list--icon'>
												<svg className='rating__list--icon__svg' xmlns='http://www.w3.org/2000/svg' width='14.105' height='14.732' viewBox='0 0 10.105 9.732'>
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
												<svg className='rating__list--icon__svg' xmlns='http://www.w3.org/2000/svg' width='14.105' height='14.732' viewBox='0 0 10.105 9.732'>
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
												<svg className='rating__list--icon__svg' xmlns='http://www.w3.org/2000/svg' width='14.105' height='14.732' viewBox='0 0 10.105 9.732'>
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
												<svg className='rating__list--icon__svg' xmlns='http://www.w3.org/2000/svg' width='14.105' height='14.732' viewBox='0 0 10.105 9.732'>
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
												<svg className='rating__list--icon__svg' xmlns='http://www.w3.org/2000/svg' width='14.105' height='14.732' viewBox='0 0 10.105 9.732'>
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
						</SwiperSlide>
						<SwiperSlide>
							<div className='testimonial__items text-center'>
								<div className='testimonial__items--thumbnail'>
									<Image className='testimonial__items--thumbnail__img border-radius-50' src='/images/others/testimonial-thumb3.png' alt='testimonial-img' width={80} height={80} />
								</div>
								<div className='testimonial__items--content'>
									<h3 className='testimonial__items--title'>Richard Smith</h3>
									<span className='testimonial__items--subtitle'>fashion</span>
									<p className='testimonial__items--desc'>Lorem ipsum dolor sit amet, consectetur adipisicin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </p>
									<ul className='rating testimonial__rating d-flex justify-content-center'>
										<li className='rating__list'>
											<span className='rating__list--icon'>
												<svg className='rating__list--icon__svg' xmlns='http://www.w3.org/2000/svg' width='14.105' height='14.732' viewBox='0 0 10.105 9.732'>
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
												<svg className='rating__list--icon__svg' xmlns='http://www.w3.org/2000/svg' width='14.105' height='14.732' viewBox='0 0 10.105 9.732'>
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
												<svg className='rating__list--icon__svg' xmlns='http://www.w3.org/2000/svg' width='14.105' height='14.732' viewBox='0 0 10.105 9.732'>
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
												<svg className='rating__list--icon__svg' xmlns='http://www.w3.org/2000/svg' width='14.105' height='14.732' viewBox='0 0 10.105 9.732'>
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
												<svg className='rating__list--icon__svg' xmlns='http://www.w3.org/2000/svg' width='14.105' height='14.732' viewBox='0 0 10.105 9.732'>
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
						</SwiperSlide>
						<SwiperSlide>
							<div className='testimonial__items text-center'>
								<div className='testimonial__items--thumbnail'>
									<Image className='testimonial__items--thumbnail__img border-radius-50' src='/images/others/testimonial-thumb4.png' alt='testimonial-img' width={80} height={80} />
								</div>
								<div className='testimonial__items--content'>
									<h3 className='testimonial__items--title'>Nike Mardson</h3>
									<span className='testimonial__items--subtitle'>fashion</span>
									<p className='testimonial__items--desc'>Lorem ipsum dolor sit amet, consectetur adipisicin elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </p>
									<ul className='rating testimonial__rating d-flex justify-content-center'>
										<li className='rating__list'>
											<span className='rating__list--icon'>
												<svg className='rating__list--icon__svg' xmlns='http://www.w3.org/2000/svg' width='14.105' height='14.732' viewBox='0 0 10.105 9.732'>
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
												<svg className='rating__list--icon__svg' xmlns='http://www.w3.org/2000/svg' width='14.105' height='14.732' viewBox='0 0 10.105 9.732'>
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
												<svg className='rating__list--icon__svg' xmlns='http://www.w3.org/2000/svg' width='14.105' height='14.732' viewBox='0 0 10.105 9.732'>
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
												<svg className='rating__list--icon__svg' xmlns='http://www.w3.org/2000/svg' width='14.105' height='14.732' viewBox='0 0 10.105 9.732'>
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
												<svg className='rating__list--icon__svg' xmlns='http://www.w3.org/2000/svg' width='14.105' height='14.732' viewBox='0 0 10.105 9.732'>
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
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</section>
	)
}
