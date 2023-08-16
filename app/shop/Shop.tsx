'use client'
import Image from 'next/image'
import GridView from './products/GridView'
import { useState } from 'react'
import ListView from './products/ListView'
import Link from 'next/link'

export default function Shop() {
	const [gridView, setGridView] = useState(true)

	return (
		<section className='shop__section section--padding'>
			<div className='container-fluid'>
				<div className='shop__header bg__gray--color d-flex align-items-center justify-content-between mb-30'>
					<button className='widget__filter--btn d-flex d-lg-none align-items-center' data-offcanvas>
						<svg className='widget__filter--btn__icon' xmlns='http:/www.w3.org/2000/svg' viewBox='0 0 512 512'>
							<path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='28' d='M368 128h80M64 128h240M368 384h80M64 384h240M208 256h240M64 256h80' />
							<circle cx='336' cy='128' r='28' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='28' />
							<circle cx='176' cy='256' r='28' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='28' />
							<circle cx='336' cy='384' r='28' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='28' />
						</svg>
						<span className='widget__filter--btn__text'>Filter</span>
					</button>
					<div className='product__view--mode d-flex align-items-center'>
						<div className='product__view--mode__list product__short--by align-items-center d-none d-lg-flex'>
							<label className='product__view--label'>Prev Page :</label>
							<div className='select shop__header--select'>
								<select className='product__view--select'>
									<option selected value='1'>
										65
									</option>
									<option value='2'>40</option>
									<option value='3'>42</option>
									<option value='4'>57 </option>
									<option value='5'>60 </option>
								</select>
							</div>
						</div>
						<div className='product__view--mode__list product__short--by align-items-center d-none d-lg-flex'>
							<label className='product__view--label'>Sort By :</label>
							<div className='select shop__header--select'>
								<select className='product__view--select'>
									<option selected value='1'>
										Sort by latest
									</option>
									<option value='2'>Sort by popularity</option>
									<option value='3'>Sort by newness</option>
									<option value='4'>Sort by rating </option>
								</select>
							</div>
						</div>
						<div className='product__view--mode__list'>
							<div className='product__grid--column__buttons d-flex justify-content-center'>
								<button className={'product__grid--column__buttons--icons' + gridView ? 'active' : ''} onClick={() => setGridView(true)}>
									<svg xmlns='http:/www.w3.org/2000/svg' width='13' height='13' viewBox='0 0 9 9'>
										<g transform='translate(-1360 -479)'>
											<rect id='Rectangle_5725' data-name='Rectangle 5725' width='4' height='4' transform='translate(1360 479)' fill='currentColor' />
											<rect id='Rectangle_5727' data-name='Rectangle 5727' width='4' height='4' transform='translate(1360 484)' fill='currentColor' />
											<rect id='Rectangle_5726' data-name='Rectangle 5726' width='4' height='4' transform='translate(1365 479)' fill='currentColor' />
											<rect id='Rectangle_5728' data-name='Rectangle 5728' width='4' height='4' transform='translate(1365 484)' fill='currentColor' />
										</g>
									</svg>
								</button>
								<button className='product__grid--column__buttons--icons' onClick={() => setGridView(false)}>
									<svg xmlns='http:/www.w3.org/2000/svg' width='17' height='16' viewBox='0 0 13 8'>
										<g id='Group_14700' data-name='Group 14700' transform='translate(-1376 -478)'>
											<g transform='translate(12 -2)'>
												<g id='Group_1326' data-name='Group 1326'>
													<rect id='Rectangle_5729' data-name='Rectangle 5729' width='3' height='2' transform='translate(1364 483)' fill='currentColor' />
													<rect id='Rectangle_5730' data-name='Rectangle 5730' width='9' height='2' transform='translate(1368 483)' fill='currentColor' />
												</g>
												<g id='Group_1328' data-name='Group 1328' transform='translate(0 -3)'>
													<rect id='Rectangle_5729-2' data-name='Rectangle 5729' width='3' height='2' transform='translate(1364 483)' fill='currentColor' />
													<rect id='Rectangle_5730-2' data-name='Rectangle 5730' width='9' height='2' transform='translate(1368 483)' fill='currentColor' />
												</g>
												<g id='Group_1327' data-name='Group 1327' transform='translate(0 -1)'>
													<rect id='Rectangle_5731' data-name='Rectangle 5731' width='3' height='2' transform='translate(1364 487)' fill='currentColor' />
													<rect id='Rectangle_5732' data-name='Rectangle 5732' width='9' height='2' transform='translate(1368 487)' fill='currentColor' />
												</g>
											</g>
										</g>
									</svg>
								</button>
							</div>
						</div>
						<div className='product__view--mode__list product__view--search d-none d-lg-block'>
							<form className='product__view--search__form' action='#'>
								<label>
									<input className='product__view--search__input border-0' placeholder='Search by' type='text' />
								</label>
								<button className='product__view--search__btn' aria-label='shop button' type='submit'>
									<svg className='product__view--search__btn--svg' xmlns='http:/www.w3.org/2000/svg' width='22.51' height='20.443' viewBox='0 0 512 512'>
										<path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' fill='none' stroke='currentColor' stroke-miterlimit='10' stroke-width='32' />
										<path fill='none' stroke='currentColor' stroke-linecap='round' stroke-miterlimit='10' stroke-width='32' d='M338.29 338.29L448 448' />
									</svg>
								</button>
							</form>
						</div>
					</div>
					<p className='product__showing--count'>Showing 1–9 of 21 results</p>
				</div>
				<div className='row'>
					<div className='col-xl-3 col-lg-4'>
						<div className='shop__sidebar--widget widget__area d-none d-lg-block'>
							<div className='single__widget widget__bg'>
								<h2 className='widget__title h3'>Categories</h2>
								<ul className='widget__categories--menu'>
									<li className='widget__categories--menu__list'>
										<label className='widget__categories--menu__label d-flex align-items-center'>
											<Image className='widget__categories--menu__img' src='/images/products/small-product1.png' alt='categories-img' width={100} height={120} />
											<span className='widget__categories--menu__text'>Denim Jacket</span>
											<svg className='widget__categories--menu__arrowdown--icon' xmlns='http:/www.w3.org/2000/svg' width='12.355' height='8.394'>
												<path d='M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z' transform='translate(-6 -8.59)' fill='currentColor'></path>
											</svg>
										</label>
										<ul className='widget__categories--sub__menu'>
											<li className='widget__categories--sub__menu--list'>
												<Link className='widget__categories--sub__menu--link d-flex align-items-center' href='shop'>
													<Image className='widget__categories--sub__menu--img' src='/images/products/small-product2.png' alt='categories-img' width={100} height={120} />
													<span className='widget__categories--sub__menu--text'>Jacket, Women</span>
												</Link>
											</li>
											<li className='widget__categories--sub__menu--list'>
												<Link className='widget__categories--sub__menu--link d-flex align-items-center' href='shop'>
													<Image className='widget__categories--sub__menu--img' src='/images/products/small-product3.png' alt='categories-img' width={100} height={120} />
													<span className='widget__categories--sub__menu--text'>Woolend Jacket</span>
												</Link>
											</li>
											<li className='widget__categories--sub__menu--list'>
												<Link className='widget__categories--sub__menu--link d-flex align-items-center' href='shop'>
													<Image className='widget__categories--sub__menu--img' src='/images/products/small-product4.png' alt='categories-img' width={100} height={120} />
													<span className='widget__categories--sub__menu--text'>Western denim</span>
												</Link>
											</li>
											<li className='widget__categories--sub__menu--list'>
												<Link className='widget__categories--sub__menu--link d-flex align-items-center' href='shop'>
													<Image className='widget__categories--sub__menu--img' src='/images/products/small-product5.png' alt='categories-img' width={100} height={120} />
													<span className='widget__categories--sub__menu--text'>Mini Dresss</span>
												</Link>
											</li>
										</ul>
									</li>
									<li className='widget__categories--menu__list'>
										<label className='widget__categories--menu__label d-flex align-items-center'>
											<Image className='widget__categories--menu__img' src='/images/products/small-product2.png' alt='categories-img' width={100} height={120} />
											<span className='widget__categories--menu__text'>Oversize Cotton</span>
											<svg className='widget__categories--menu__arrowdown--icon' xmlns='http:/www.w3.org/2000/svg' width='12.355' height='8.394'>
												<path d='M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z' transform='translate(-6 -8.59)' fill='currentColor'></path>
											</svg>
										</label>
										<ul className='widget__categories--sub__menu'>
											<li className='widget__categories--sub__menu--list'>
												<Link className='widget__categories--sub__menu--link d-flex align-items-center' href='shop'>
													<Image className='widget__categories--sub__menu--img' src='/images/products/small-product2.png' alt='categories-img' width={100} height={120} />
													<span className='widget__categories--sub__menu--text'>Jacket, Women</span>
												</Link>
											</li>
											<li className='widget__categories--sub__menu--list'>
												<Link className='widget__categories--sub__menu--link d-flex align-items-center' href='shop'>
													<Image className='widget__categories--sub__menu--img' src='/images/products/small-product3.png' alt='categories-img' width={100} height={120} />
													<span className='widget__categories--sub__menu--text'>Woolend Jacket</span>
												</Link>
											</li>
											<li className='widget__categories--sub__menu--list'>
												<Link className='widget__categories--sub__menu--link d-flex align-items-center' href='shop'>
													<Image className='widget__categories--sub__menu--img' src='/images/products/small-product4.png' alt='categories-img' width={100} height={120} />
													<span className='widget__categories--sub__menu--text'>Western denim</span>
												</Link>
											</li>
											<li className='widget__categories--sub__menu--list'>
												<Link className='widget__categories--sub__menu--link d-flex align-items-center' href='shop'>
													<Image className='widget__categories--sub__menu--img' src='/images/products/small-product5.png' alt='categories-img' width={100} height={120} />
													<span className='widget__categories--sub__menu--text'>Mini Dresss</span>
												</Link>
											</li>
										</ul>
									</li>
									<li className='widget__categories--menu__list'>
										<label className='widget__categories--menu__label d-flex align-items-center'>
											<Image className='widget__categories--menu__img' src='/images/products/small-product3.png' alt='categories-img' width={100} height={120} />
											<span className='widget__categories--menu__text'>Dairy & chesse</span>
											<svg className='widget__categories--menu__arrowdown--icon' xmlns='http:/www.w3.org/2000/svg' width='12.355' height='8.394'>
												<path d='M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z' transform='translate(-6 -8.59)' fill='currentColor'></path>
											</svg>
										</label>
										<ul className='widget__categories--sub__menu'>
											<li className='widget__categories--sub__menu--list'>
												<Link className='widget__categories--sub__menu--link d-flex align-items-center' href='shop'>
													<Image className='widget__categories--sub__menu--img' src='/images/products/small-product2.png' alt='categories-img' width={100} height={120} />
													<span className='widget__categories--sub__menu--text'>Jacket, Women</span>
												</Link>
											</li>
											<li className='widget__categories--sub__menu--list'>
												<Link className='widget__categories--sub__menu--link d-flex align-items-center' href='shop'>
													<Image className='widget__categories--sub__menu--img' src='/images/products/small-product3.png' alt='categories-img' width={100} height={120} />
													<span className='widget__categories--sub__menu--text'>Woolend Jacket</span>
												</Link>
											</li>
											<li className='widget__categories--sub__menu--list'>
												<Link className='widget__categories--sub__menu--link d-flex align-items-center' href='shop'>
													<Image className='widget__categories--sub__menu--img' src='/images/products/small-product4.png' alt='categories-img' width={100} height={120} />
													<span className='widget__categories--sub__menu--text'>Western denim</span>
												</Link>
											</li>
											<li className='widget__categories--sub__menu--list'>
												<Link className='widget__categories--sub__menu--link d-flex align-items-center' href='shop'>
													<Image className='widget__categories--sub__menu--img' src='/images/products/small-product5.png' alt='categories-img' width={100} height={120} />
													<span className='widget__categories--sub__menu--text'>Mini Dresss</span>
												</Link>
											</li>
										</ul>
									</li>
									<li className='widget__categories--menu__list'>
										<label className='widget__categories--menu__label d-flex align-items-center'>
											<Image className='widget__categories--menu__img' src='/images/products/small-product4.png' alt='categories-img' width={100} height={120} />
											<span className='widget__categories--menu__text'>Shoulder Bag</span>
											<svg className='widget__categories--menu__arrowdown--icon' xmlns='http:/www.w3.org/2000/svg' width='12.355' height='8.394'>
												<path d='M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z' transform='translate(-6 -8.59)' fill='currentColor'></path>
											</svg>
										</label>
										<ul className='widget__categories--sub__menu'>
											<li className='widget__categories--sub__menu--list'>
												<Link className='widget__categories--sub__menu--link d-flex align-items-center' href='shop'>
													<Image className='widget__categories--sub__menu--img' src='/images/products/small-product2.png' alt='categories-img' width={100} height={120} />
													<span className='widget__categories--sub__menu--text'>Jacket, Women</span>
												</Link>
											</li>
											<li className='widget__categories--sub__menu--list'>
												<Link className='widget__categories--sub__menu--link d-flex align-items-center' href='shop'>
													<Image className='widget__categories--sub__menu--img' src='/images/products/small-product3.png' alt='categories-img' width={100} height={120} />
													<span className='widget__categories--sub__menu--text'>Woolend Jacket</span>
												</Link>
											</li>
											<li className='widget__categories--sub__menu--list'>
												<Link className='widget__categories--sub__menu--link d-flex align-items-center' href='shop'>
													<Image className='widget__categories--sub__menu--img' src='/images/products/small-product4.png' alt='categories-img' width={100} height={120} />
													<span className='widget__categories--sub__menu--text'>Western denim</span>
												</Link>
											</li>
											<li className='widget__categories--sub__menu--list'>
												<Link className='widget__categories--sub__menu--link d-flex align-items-center' href='shop'>
													<Image className='widget__categories--sub__menu--img' src='/images/products/small-product5.png' alt='categories-img' width={100} height={120} />
													<span className='widget__categories--sub__menu--text'>Mini Dresss</span>
												</Link>
											</li>
										</ul>
									</li>
									<li className='widget__categories--menu__list'>
										<label className='widget__categories--menu__label d-flex align-items-center'>
											<Image className='widget__categories--menu__img' src='/images/products/small-product5.png' alt='categories-img' width={100} height={120} />
											<span className='widget__categories--menu__text'>Denim Jacket</span>
											<svg className='widget__categories--menu__arrowdown--icon' xmlns='http:/www.w3.org/2000/svg' width='12.355' height='8.394'>
												<path d='M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z' transform='translate(-6 -8.59)' fill='currentColor'></path>
											</svg>
										</label>
										<ul className='widget__categories--sub__menu'>
											<li className='widget__categories--sub__menu--list'>
												<Link className='widget__categories--sub__menu--link d-flex align-items-center' href='shop'>
													<Image className='widget__categories--sub__menu--img' src='/images/products/small-product2.png' alt='categories-img' width={100} height={120} />
													<span className='widget__categories--sub__menu--text'>Jacket, Women</span>
												</Link>
											</li>
											<li className='widget__categories--sub__menu--list'>
												<Link className='widget__categories--sub__menu--link d-flex align-items-center' href='shop'>
													<Image className='widget__categories--sub__menu--img' src='/images/products/small-product3.png' alt='categories-img' width={100} height={120} />
													<span className='widget__categories--sub__menu--text'>Woolend Jacket</span>
												</Link>
											</li>
											<li className='widget__categories--sub__menu--list'>
												<Link className='widget__categories--sub__menu--link d-flex align-items-center' href='shop'>
													<Image className='widget__categories--sub__menu--img' src='/images/products/small-product4.png' alt='categories-img' width={100} height={120} />
													<span className='widget__categories--sub__menu--text'>Western denim</span>
												</Link>
											</li>
											<li className='widget__categories--sub__menu--list'>
												<Link className='widget__categories--sub__menu--link d-flex align-items-center' href='shop'>
													<Image className='widget__categories--sub__menu--img' src='/images/products/small-product5.png' alt='categories-img' width={100} height={120} />
													<span className='widget__categories--sub__menu--text'>Mini Dresss</span>
												</Link>
											</li>
										</ul>
									</li>
								</ul>
							</div>
							<div className='single__widget widget__bg'>
								<h2 className='widget__title h3'>Dietary Needs</h2>
								<ul className='widget__form--check'>
									<li className='widget__form--check__list'>
										<label className='widget__form--check__label' htmlFor='check1'>
											Denim shirt
										</label>
										<input className='widget__form--check__input' id='check1' type='checkbox' />
										<span className='widget__form--checkmark'></span>
									</li>
									<li className='widget__form--check__list'>
										<label className='widget__form--check__label' htmlFor='check2'>
											Need Winter
										</label>
										<input className='widget__form--check__input' id='check2' type='checkbox' />
										<span className='widget__form--checkmark'></span>
									</li>
									<li className='widget__form--check__list'>
										<label className='widget__form--check__label' htmlFor='check3'>
											Fashion Trends
										</label>
										<input className='widget__form--check__input' id='check3' type='checkbox' />
										<span className='widget__form--checkmark'></span>
									</li>
									<li className='widget__form--check__list'>
										<label className='widget__form--check__label' htmlFor='check4'>
											Oversize Cotton
										</label>
										<input className='widget__form--check__input' id='check4' type='checkbox' />
										<span className='widget__form--checkmark'></span>
									</li>
									<li className='widget__form--check__list'>
										<label className='widget__form--check__label' htmlFor='check5'>
											Baking material
										</label>
										<input className='widget__form--check__input' id='check5' type='checkbox' />
										<span className='widget__form--checkmark'></span>
									</li>
								</ul>
							</div>
							<div className='single__widget price__filter widget__bg'>
								<h2 className='widget__title h3'>Filter By Price</h2>
								<form className='price__filter--form' action='#'>
									<div className='price__filter--form__inner mb-15 d-flex align-items-center'>
										<div className='price__filter--group'>
											<label className='price__filter--label' htmlFor='Filter-Price-GTE2'>
												From
											</label>
											<div className='price__filter--input border-radius-5 d-flex align-items-center'>
												<span className='price__filter--currency'>$</span>
												<label>
													<input className='price__filter--input__field border-0' name='filter.v.price.gte' type='number' placeholder='0' min='0' max='250.00' />
												</label>
											</div>
										</div>
										<div className='price__divider'>
											<span>-</span>
										</div>
										<div className='price__filter--group'>
											<label className='price__filter--label' htmlFor='Filter-Price-LTE2'>
												To
											</label>
											<div className='price__filter--input border-radius-5 d-flex align-items-center'>
												<span className='price__filter--currency'>$</span>
												<label>
													<input className='price__filter--input__field border-0' name='filter.v.price.lte' type='number' min='0' placeholder='250.00' max='250.00' />
												</label>
											</div>
										</div>
									</div>
									<button className='price__filter--btn primary__btn' type='submit'>
										Filter
									</button>
								</form>
							</div>
							<div className='single__widget widget__bg'>
								<h2 className='widget__title h3'>Top Rated Product</h2>
								<div className='product__grid--inner'>
									<div className='product__items product__items--grid d-flex align-items-center'>
										<div className='product__items--grid__thumbnail position__relative'>
											<Link className='product__items--link' href='product-details'>
												<Image className='product__items--img product__primary--img' src='/images/products/small-product1.png' alt='product-img' width={100} height={120} />
												<Image className='product__items--img product__secondary--img' src='/images/products/small-product2.png' alt='product-img' width={100} height={120} />
											</Link>
										</div>
										<div className='product__items--grid__content'>
											<h3 className='product__items--content__title h4'>
												<Link href='product-details'>Women Fish Cut</Link>
											</h3>
											<div className='product__items--price'>
												<span className='current__price'>$110</span>
												<span className='price__divided'></span>
												<span className='old__price'>$78</span>
											</div>
											<ul className='rating product__rating d-flex'>
												<li className='rating__list'>
													<span className='rating__list--icon'>
														<svg className='rating__list--icon__svg' xmlns='http:/www.w3.org/2000/svg' width='14.105' height='14.732' viewBox='0 0 10.105 9.732'>
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
														<svg className='rating__list--icon__svg' xmlns='http:/www.w3.org/2000/svg' width='14.105' height='14.732' viewBox='0 0 10.105 9.732'>
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
														<svg className='rating__list--icon__svg' xmlns='http:/www.w3.org/2000/svg' width='14.105' height='14.732' viewBox='0 0 10.105 9.732'>
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
														<svg className='rating__list--icon__svg' xmlns='http:/www.w3.org/2000/svg' width='14.105' height='14.732' viewBox='0 0 10.105 9.732'>
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
														<svg className='rating__list--icon__svg' xmlns='http:/www.w3.org/2000/svg' width='14.105' height='14.732' viewBox='0 0 10.105 9.732'>
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
											<Link className='product__items--link' href='product-details'>
												<Image className='product__items--img product__primary--img' src='/images/products/small-product3.png' alt='product-img' width={100} height={120} />
												<Image className='product__items--img product__secondary--img' src='/images/products/small-product4.png' alt='product-img' width={100} height={120} />
											</Link>
										</div>
										<div className='product__items--grid__content'>
											<h3 className='product__items--content__title h4'>
												<Link href='product-details'>Gorgeous Granite is</Link>
											</h3>
											<div className='product__items--price'>
												<span className='current__price'>$140</span>
												<span className='price__divided'></span>
												<span className='old__price'>$115</span>
											</div>
											<ul className='rating product__rating d-flex'>
												<li className='rating__list'>
													<span className='rating__list--icon'>
														<svg className='rating__list--icon__svg' xmlns='http:/www.w3.org/2000/svg' width='14.105' height='14.732' viewBox='0 0 10.105 9.732'>
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
														<svg className='rating__list--icon__svg' xmlns='http:/www.w3.org/2000/svg' width='14.105' height='14.732' viewBox='0 0 10.105 9.732'>
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
														<svg className='rating__list--icon__svg' xmlns='http:/www.w3.org/2000/svg' width='14.105' height='14.732' viewBox='0 0 10.105 9.732'>
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
														<svg className='rating__list--icon__svg' xmlns='http:/www.w3.org/2000/svg' width='14.105' height='14.732' viewBox='0 0 10.105 9.732'>
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
														<svg className='rating__list--icon__svg' xmlns='http:/www.w3.org/2000/svg' width='14.105' height='14.732' viewBox='0 0 10.105 9.732'>
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
											<Link className='product__items--link' href='product-details'>
												<Image className='product__items--img product__primary--img' src='/images/products/small-product5.png' alt='product-img' width={100} height={120} />
												<Image className='product__items--img product__secondary--img' src='/images/products/small-product6.png' alt='product-img' width={100} height={120} />
											</Link>
										</div>
										<div className='product__items--grid__content'>
											<h4 className='product__items--content__title'>
												<Link href='product-details'>Durable A Steel </Link>
											</h4>
											<div className='product__items--price'>
												<span className='current__price'>$160</span>
												<span className='price__divided'></span>
												<span className='old__price'>$118</span>
											</div>
											<ul className='rating product__rating d-flex'>
												<li className='rating__list'>
													<span className='rating__list--icon'>
														<svg className='rating__list--icon__svg' xmlns='http:/www.w3.org/2000/svg' width='14.105' height='14.732' viewBox='0 0 10.105 9.732'>
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
														<svg className='rating__list--icon__svg' xmlns='http:/www.w3.org/2000/svg' width='14.105' height='14.732' viewBox='0 0 10.105 9.732'>
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
														<svg className='rating__list--icon__svg' xmlns='http:/www.w3.org/2000/svg' width='14.105' height='14.732' viewBox='0 0 10.105 9.732'>
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
														<svg className='rating__list--icon__svg' xmlns='http:/www.w3.org/2000/svg' width='14.105' height='14.732' viewBox='0 0 10.105 9.732'>
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
														<svg className='rating__list--icon__svg' xmlns='http:/www.w3.org/2000/svg' width='14.105' height='14.732' viewBox='0 0 10.105 9.732'>
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
							<div className='single__widget widget__bg'>
								<h2 className='widget__title h3'>Brands</h2>
								<ul className='widget__tagcloud'>
									<li className='widget__tagcloud--list'>
										<Link className='widget__tagcloud--link' href='shop'>
											Jacket
										</Link>
									</li>
									<li className='widget__tagcloud--list'>
										<Link className='widget__tagcloud--link' href='shop'>
											Women
										</Link>
									</li>
									<li className='widget__tagcloud--list'>
										<Link className='widget__tagcloud--link' href='shop'>
											Oversize
										</Link>
									</li>
									<li className='widget__tagcloud--list'>
										<Link className='widget__tagcloud--link' href='shop'>
											Cotton{' '}
										</Link>
									</li>
									<li className='widget__tagcloud--list'>
										<Link className='widget__tagcloud--link' href='shop'>
											Shoulder{' '}
										</Link>
									</li>
									<li className='widget__tagcloud--list'>
										<Link className='widget__tagcloud--link' href='shop'>
											Winter
										</Link>
									</li>
									<li className='widget__tagcloud--list'>
										<Link className='widget__tagcloud--link' href='shop'>
											Accessories
										</Link>
									</li>
									<li className='widget__tagcloud--list'>
										<Link className='widget__tagcloud--link' href='shop'>
											Dress{' '}
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>

					{gridView ? <GridView /> : <ListView />}
				</div>
			</div>
		</section>
	)
}
