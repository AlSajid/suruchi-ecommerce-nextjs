import Image from 'next/image'
import Link from 'next/link'

export default function productDetailsTab() {
	return (
		<section className='product__details--tab__section section--padding'>
			<div className='container'>
				<div className='row row-cols-1'>
					<div className='col'>
						<ul className='product__details--tab d-flex mb-30'>
							<li className='product__details--tab__list active' data-toggle='tab' data-target='#description'>
								Description
							</li>
							<li className='product__details--tab__list' data-toggle='tab' data-target='#reviews'>
								Product Reviews
							</li>
							<li className='product__details--tab__list' data-toggle='tab' data-target='#information'>
								Additional Info
							</li>
							<li className='product__details--tab__list' data-toggle='tab' data-target='#custom'>
								Custom Content
							</li>
						</ul>
						<div className='product__details--tab__inner border-radius-10'>
							<div className='tab_content'>
								<div id='description' className='tab_pane active show'>
									<div className='product__tab--content'>
										<div className='product__tab--content__step mb-30'>
											<h2 className='product__tab--content__title h4 mb-10'>Nam provident sequi</h2>
											<p className='product__tab--content__desc'>
												Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam provident sequi, nemo sapiente culpa nostrum rem eum perferendis quibusdam, magnam a vitae corporis! Magnam enim modi, illo harum suscipit tempore aut dolore doloribus deserunt voluptatum illum, est
												porro? Ducimus dolore accusamus impedit ipsum maiores, ea iusto temporibus numquam eaque mollitia fugiat laborum dolor tempora eligendi voluptatem quis necessitatibus nam ab?
											</p>
										</div>
										<div className='product__tab--content__step'>
											<h4 className='product__tab--content__title mb-10'>More Details</h4>
											<ul>
												<li className='product__tab--content__list'>
													<svg className='product__tab--content__list--icon' xmlns='http://www.w3.org/2000/svg' width='22.51' height='20.443' viewBox='0 0 512 512'>
														<path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M268 112l144 144-144 144M392 256H100'></path>
													</svg>
													Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, dolorum?
												</li>
												<li className='product__tab--content__list'>
													<svg className='product__tab--content__list--icon' xmlns='http://www.w3.org/2000/svg' width='22.51' height='20.443' viewBox='0 0 512 512'>
														<path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M268 112l144 144-144 144M392 256H100'></path>
													</svg>
													Magnam enim modi, illo harum suscipit tempore aut dolore?
												</li>
												<li className='product__tab--content__list'>
													<svg className='product__tab--content__list--icon' xmlns='http://www.w3.org/2000/svg' width='22.51' height='20.443' viewBox='0 0 512 512'>
														<path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M268 112l144 144-144 144M392 256H100'></path>
													</svg>
													Numquam eaque mollitia fugiat laborum dolor tempora;
												</li>
												<li className='product__tab--content__list'>
													<svg className='product__tab--content__list--icon' xmlns='http://www.w3.org/2000/svg' width='22.51' height='20.443' viewBox='0 0 512 512'>
														<path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M268 112l144 144-144 144M392 256H100'></path>
													</svg>
													Sit amet consectetur adipisicing elit. Quo delectus repellat facere maiores.
												</li>
												<li className='product__tab--content__list'>
													<svg className='product__tab--content__list--icon' xmlns='http://www.w3.org/2000/svg' width='22.51' height='20.443' viewBox='0 0 512 512'>
														<path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M268 112l144 144-144 144M392 256H100'></path>
													</svg>
													Repellendus itaque sit quia consequuntur, unde veritatis. dolorum?
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div id='reviews' className='tab_pane'>
									<div className='product__reviews'>
										<div className='product__reviews--header'>
											<h2 className='product__reviews--header__title h3 mb-20'>Customer Reviews</h2>
											<div className='reviews__ratting d-flex align-items-center'>
												<ul className='rating d-flex'>
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
												<span className='reviews__summary--caption'>Based on 2 reviews</span>
											</div>
											<Link className='actions__newreviews--btn primary__btn' href='#writereview'>
												Write A Review
											</Link>
										</div>
										<div className='reviews__comment--area'>
											<div className='reviews__comment--list d-flex'>
												<div className='reviews__comment--thumb'>
													<Image src='assets/img/other/comment-thumb1.png' alt='comment-thumb' />
												</div>
												<div className='reviews__comment--content'>
													<div className='reviews__comment--top d-flex justify-content-between'>
														<div className='reviews__comment--top__left'>
															<h3 className='reviews__comment--content__title h4'>Richard Smith</h3>
															<ul className='rating reviews__comment--rating d-flex'>
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
														<span className='reviews__comment--content__date'>February 18, 2022</span>
													</div>
													<p className='reviews__comment--content__desc'>
														Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ex repellat officiis neque. Veniam, rem nesciunt. Assumenda distinctio, autem error repellat eveniet ratione dolor facilis accusantium amet pariatur, non eius!
													</p>
												</div>
											</div>
											<div className='reviews__comment--list margin__left d-flex'>
												<div className='reviews__comment--thumb'>
													<Image src='assets/img/other/comment-thumb2.png' alt='comment-thumb' />
												</div>
												<div className='reviews__comment--content'>
													<div className='reviews__comment--top d-flex justify-content-between'>
														<div className='reviews__comment--top__left'>
															<h3 className='reviews__comment--content__title h4'>Laura Johnson</h3>
															<ul className='rating reviews__comment--rating d-flex'>
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
														<span className='reviews__comment--content__date'>February 18, 2022</span>
													</div>
													<p className='reviews__comment--content__desc'>
														Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ex repellat officiis neque. Veniam, rem nesciunt. Assumenda distinctio, autem error repellat eveniet ratione dolor facilis accusantium amet pariatur, non eius!
													</p>
												</div>
											</div>
											<div className='reviews__comment--list d-flex'>
												<div className='reviews__comment--thumb'>
													<Image src='assets/img/other/comment-thumb3.png' alt='comment-thumb' />
												</div>
												<div className='reviews__comment--content'>
													<div className='reviews__comment--top d-flex justify-content-between'>
														<div className='reviews__comment--top__left'>
															<h3 className='reviews__comment--content__title h4'>John Deo</h3>
															<ul className='rating reviews__comment--rating d-flex'>
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
														<span className='reviews__comment--content__date'>February 18, 2022</span>
													</div>
													<p className='reviews__comment--content__desc'>
														Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ex repellat officiis neque. Veniam, rem nesciunt. Assumenda distinctio, autem error repellat eveniet ratione dolor facilis accusantium amet pariatur, non eius!
													</p>
												</div>
											</div>
										</div>
										<div id='writereview' className='reviews__comment--reply__area'>
											<form action='#'>
												<h3 className='reviews__comment--reply__title mb-15'>Add a review </h3>
												<div className='reviews__ratting d-flex align-items-center mb-20'>
													<ul className='rating d-flex'>
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
												<div className='row'>
													<div className='col-12 mb-10'>
														<textarea className='reviews__comment--reply__textarea' placeholder='Your Comments....'></textarea>
													</div>
													<div className='col-lg-6 col-md-6 mb-15'>
														<label>
															<input className='reviews__comment--reply__input' placeholder='Your Name....' type='text' />
														</label>
													</div>
													<div className='col-lg-6 col-md-6 mb-15'>
														<label>
															<input className='reviews__comment--reply__input' placeholder='Your Email....' type='email' />
														</label>
													</div>
												</div>
												<button className='reviews__comment--btn text-white primary__btn' data-hover='Submit' type='submit'>
													SUBMIT
												</button>
											</form>
										</div>
									</div>
								</div>
								<div id='information' className='tab_pane'>
									<div className='product__tab--conten'>
										<div className='product__tab--content__step mb-30'>
											<h2 className='product__tab--content__title h4 mb-10'>Nam provident sequi</h2>
											<p className='product__tab--content__desc'>
												Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam provident sequi, nemo sapiente culpa nostrum rem eum perferendis quibusdam, magnam a vitae corporis! Magnam enim modi, illo harum suscipit tempore aut dolore doloribus deserunt voluptatum illum, est
												porro? Ducimus dolore accusamus impedit ipsum maiores, ea iusto temporibus numquam eaque mollitia fugiat laborum dolor tempora eligendi voluptatem quis necessitatibus nam ab?
											</p>
										</div>
									</div>
								</div>
								<div id='custom' className='tab_pane'>
									<div className='product__tab--content'>
										<div className='product__tab--content__step mb-30'>
											<h2 className='product__tab--content__title h4 mb-10'>Nam provident sequi</h2>
											<p className='product__tab--content__desc'>
												Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam provident sequi, nemo sapiente culpa nostrum rem eum perferendis quibusdam, magnam a vitae corporis! Magnam enim modi, illo harum suscipit tempore aut dolore doloribus deserunt voluptatum illum, est
												porro? Ducimus dolore accusamus impedit ipsum maiores, ea iusto temporibus numquam eaque mollitia fugiat laborum dolor tempora eligendi voluptatem quis necessitatibus nam ab?
											</p>
										</div>
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
