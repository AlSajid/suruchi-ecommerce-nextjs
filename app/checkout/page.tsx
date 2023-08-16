import Image from 'next/image'
import Link from 'next/link'

export default function Checkout() {
	return (
		<div className='checkout__page--area'>
			<div className='container'>
				<div className='checkout__page--inner d-flex'>
					<div className='main checkout__mian'>
						<header className='main__header checkout__mian--header mb-30'>
							<h1 className='main__logo--title'>
								<Link className='logo logo__left mb-20' href='index'>
									<Image src='/images/logo/nav-log.png' alt='logo' width={157} height={36} />
								</Link>
							</h1>
							<details className='order__summary--mobile__version'>
								<summary className='order__summary--toggle border-radius-5'>
									<span className='order__summary--toggle__inner'>
										<span className='order__summary--toggle__icon'>
											<svg width='20' height='19' xmlns='http://www.w3.org/2000/svg'>
												<path
													d='M17.178 13.088H5.453c-.454 0-.91-.364-.91-.818L3.727 1.818H0V0h4.544c.455 0 .91.364.91.818l.09 1.272h13.45c.274 0 .547.09.73.364.18.182.27.454.18.727l-1.817 9.18c-.09.455-.455.728-.91.728zM6.27 11.27h10.09l1.454-7.362H5.634l.637 7.362zm.092 7.715c1.004 0 1.818-.813 1.818-1.817s-.814-1.818-1.818-1.818-1.818.814-1.818 1.818.814 1.817 1.818 1.817zm9.18 0c1.004 0 1.817-.813 1.817-1.817s-.814-1.818-1.818-1.818-1.818.814-1.818 1.818.814 1.817 1.818 1.817z'
													fill='currentColor'></path>
											</svg>
										</span>
										<span className='order__summary--toggle__text show'>
											<span>Show order summary</span>
											<svg width='11' height='6' xmlns='http://www.w3.org/2000/svg' className='order-summary-toggle__dropdown' fill='currentColor'>
												<path d='M.504 1.813l4.358 3.845.496.438.496-.438 4.642-4.096L9.504.438 4.862 4.534h.992L1.496.69.504 1.812z'></path>
											</svg>
										</span>
										<span className='order__summary--final__price'>$227.70</span>
									</span>
								</summary>
								<div className='order__summary--section'>
									<div className='cart__table checkout__product--table'>
										<table className='summary__table'>
											<tbody className='summary__table--body'>
												<tr className=' summary__table--items'>
													<td className=' summary__table--list'>
														<div className='product__image two  d-flex align-items-center'>
															<div className='product__thumbnail border-radius-5'>
																<Link href='product-details'>
																	<Image className='border-radius-5' src='/images/products/small-product7.png' alt='cart-product' width={90} height={98} />
																</Link>
																<span className='product__thumbnail--quantity'>1</span>
															</div>
															<div className='product__description'>
																<h3 className='product__description--name h4'>
																	<Link href='product-details'>Fresh-whole-fish</Link>
																</h3>
																<span className='product__description--variant'>COLOR: Blue</span>
															</div>
														</div>
													</td>
													<td className=' summary__table--list'>
														<span className='cart__price'>£65.00</span>
													</td>
												</tr>
												<tr className='summary__table--items'>
													<td className=' summary__table--list'>
														<div className='cart__product d-flex align-items-center'>
															<div className='product__thumbnail border-radius-5'>
																<Link href='product-details'>
																	<Image className='border-radius-5' src='/images/products/small-product2.png' alt='cart-product' width={100} height={120} />
																</Link>
																<span className='product__thumbnail--quantity'>1</span>
															</div>
															<div className='product__description'>
																<h3 className='product__description--name h4'>
																	<Link href='product-details'>Vegetable-healthy</Link>
																</h3>
																<span className='product__description--variant'>COLOR: Green</span>
															</div>
														</div>
													</td>
													<td className=' summary__table--list'>
														<span className='cart__price'>£82.00</span>
													</td>
												</tr>
												<tr className=' summary__table--items'>
													<td className=' summary__table--list'>
														<div className='cart__product d-flex align-items-center'>
															<div className='product__thumbnail border-radius-5'>
																<Link href='product-details'>
																	<Image className='border-radius-5' src='/images/products/small-product4.png' alt='cart-product' width={100} height={120} />
																</Link>
																<span className='product__thumbnail--quantity'>1</span>
															</div>
															<div className='product__description'>
																<h3 className='product__description--name h4'>
																	<Link href='product-details'>Raw-onions-surface</Link>
																</h3>
																<span className='product__description--variant'>COLOR: White</span>
															</div>
														</div>
													</td>
													<td className=' summary__table--list'>
														<span className='cart__price'>£78.00</span>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
									<div className='checkout__discount--code'>
										<form className='d-flex' action='#'>
											<label>
												<input className='checkout__discount--code__input--field border-radius-5' placeholder='Gift card or discount code' type='text' />
											</label>
											<button className='checkout__discount--code__btn primary__btn border-radius-5' type='submit'>
												Apply
											</button>
										</form>
									</div>
									<div className='checkout__total'>
										<table className='checkout__total--table'>
											<tbody className='checkout__total--body'>
												<tr className='checkout__total--items'>
													<td className='checkout__total--title text-left'>Subtotal </td>
													<td className='checkout__total--amount text-right'>$860.00</td>
												</tr>
												<tr className='checkout__total--items'>
													<td className='checkout__total--title text-left'>Shipping</td>
													<td className='checkout__total--calculated__text text-right'>Calculated at next step</td>
												</tr>
											</tbody>
											<tfoot className='checkout__total--footer'>
												<tr className='checkout__total--footer__items'>
													<td className='checkout__total--footer__title checkout__total--footer__list text-left'>Total </td>
													<td className='checkout__total--footer__amount checkout__total--footer__list text-right'>$860.00</td>
												</tr>
											</tfoot>
										</table>
									</div>
								</div>
							</details>
							<nav>
								<ol className='breadcrumb checkout__breadcrumb d-flex'>
									<li className='breadcrumb__item breadcrumb__item--completed d-flex align-items-center'>
										<Link className='breadcrumb__link' href='cart'>
											Cart
										</Link>
										<svg className='readcrumb__chevron-icon' xmlns='http://www.w3.org/2000/svg' width='17.007' height='16.831' viewBox='0 0 512 512'>
											<path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144'></path>
										</svg>
									</li>

									<li className='breadcrumb__item breadcrumb__item--current d-flex align-items-center'>
										<span className='breadcrumb__text current'>Information</span>
										<svg className='readcrumb__chevron-icon' xmlns='http://www.w3.org/2000/svg' width='17.007' height='16.831' viewBox='0 0 512 512'>
											<path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144'></path>
										</svg>
									</li>
									<li className='breadcrumb__item breadcrumb__item--blank d-flex align-items-center'>
										<span className='breadcrumb__text'>Shipping</span>
										<svg className='readcrumb__chevron-icon' xmlns='http://www.w3.org/2000/svg' width='17.007' height='16.831' viewBox='0 0 512 512'>
											<path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144'></path>
										</svg>
									</li>
									<li className='breadcrumb__item breadcrumb__item--blank'>
										<span className='breadcrumb__text'>Payment</span>
									</li>
								</ol>
							</nav>
						</header>
						<main className='main__content_wrapper'>
							<form action='#'>
								<div className='checkout__content--step section__contact--information'>
									<div className='section__header checkout__section--header d-flex align-items-center justify-content-between mb-25'>
										<h2 className='section__header--title h3'>Contact information</h2>
										<p className='layout__flex--item'>
											Already have an account?
											<Link className='layout__flex--item__link' href='login'>
												Log in
											</Link>
										</p>
									</div>
									<div className='customer__information'>
										<div className='checkout__email--phone mb-12'>
											<label>
												<input className='checkout__input--field border-radius-5' placeholder='Email or mobile phone mumber' type='text' />
											</label>
										</div>
										<div className='checkout__checkbox'>
											<input className='checkout__checkbox--input' id='check1' type='checkbox' />
											<span className='checkout__checkbox--checkmark'></span>
											<label className='checkout__checkbox--label' htmlFor='check1'>
												Email me with news and offers
											</label>
										</div>
									</div>
								</div>
								<div className='checkout__content--step section__shipping--address'>
									<div className='section__header mb-25'>
										<h3 className='section__header--title'>Shipping address</h3>
									</div>
									<div className='section__shipping--address__content'>
										<div className='row'>
											<div className='col-lg-6 mb-12'>
												<div className='checkout__input--list '>
													<label>
														<input className='checkout__input--field border-radius-5' placeholder='First name (optional)' type='text' />
													</label>
												</div>
											</div>
											<div className='col-lg-6 mb-12'>
												<div className='checkout__input--list'>
													<label>
														<input className='checkout__input--field border-radius-5' placeholder='Last name' type='text' />
													</label>
												</div>
											</div>
											<div className='col-12 mb-12'>
												<div className='checkout__input--list'>
													<label>
														<input className='checkout__input--field border-radius-5' placeholder='Company (optional)' type='text' />
													</label>
												</div>
											</div>
											<div className='col-12 mb-12'>
												<div className='checkout__input--list'>
													<label>
														<input className='checkout__input--field border-radius-5' placeholder='Address1' type='text' />
													</label>
												</div>
											</div>
											<div className='col-12 mb-12'>
												<div className='checkout__input--list'>
													<label>
														<input className='checkout__input--field border-radius-5' placeholder='Apartment, suite, etc. (optional)' type='text' />
													</label>
												</div>
											</div>
											<div className='col-12 mb-12'>
												<div className='checkout__input--list'>
													<label>
														<input className='checkout__input--field border-radius-5' placeholder='City' type='text' />
													</label>
												</div>
											</div>
											<div className='col-lg-6 mb-12'>
												<div className='checkout__input--list checkout__input--select select'>
													<label className='checkout__select--label' htmlFor='country'>
														Country/region
													</label>
													<select className='checkout__input--select__field border-radius-5' id='country'>
														<option value='1'>India</option>
														<option value='2'>United States</option>
														<option value='3'>Netherlands</option>
														<option value='4'>Afghanistan</option>
														<option value='5'>Islands</option>
														<option value='6'>Albania</option>
														<option value='7'>Antigua Barbuda</option>
													</select>
												</div>
											</div>
											<div className='col-lg-6 mb-12'>
												<div className='checkout__input--list'>
													<label>
														<input className='checkout__input--field border-radius-5' placeholder='Postal code' type='text' />
													</label>
												</div>
											</div>
										</div>
										<div className='checkout__checkbox'>
											<input className='checkout__checkbox--input' id='check2' type='checkbox' />
											<span className='checkout__checkbox--checkmark'></span>
											<label className='checkout__checkbox--label' htmlFor='check2'>
												Save this information for next time
											</label>
										</div>
									</div>
								</div>
								<div className='checkout__content--step__footer d-flex align-items-center'>
									<Link className='continue__shipping--btn primary__btn border-radius-5' href='checkout-2'>
										Continue To Shipping
									</Link>
									<Link className='previous__link--content' href='cart'>
										Return to cart
									</Link>
								</div>
							</form>
						</main>
						<footer className='main__footer checkout__footer'>
							<p className='copyright__content'>
								Copyright © 2022{' '}
								<Link className='copyright__content--link text__primary' href='index'>
									Suruchi
								</Link>{' '}
								. All Rights Reserved.Design By Suruchi
							</p>
						</footer>
					</div>
					<aside className='checkout__sidebar sidebar'>
						<div className='cart__table checkout__product--table'>
							<table className='cart__table--inner'>
								<tbody className='cart__table--body'>
									<tr className='cart__table--body__items'>
										<td className='cart__table--body__list'>
											<div className='product__image two  d-flex align-items-center'>
												<div className='product__thumbnail border-radius-5'>
													<Link href='product-details'>
														<Image className='border-radius-5' src='/images/products/small-product7.png' alt='cart-product' width={90} height={98} />
													</Link>
													<span className='product__thumbnail--quantity'>1</span>
												</div>
												<div className='product__description'>
													<h3 className='product__description--name h4'>
														<Link href='product-details'>Fresh-whole-fish</Link>
													</h3>
													<span className='product__description--variant'>COLOR: Blue</span>
												</div>
											</div>
										</td>
										<td className='cart__table--body__list'>
											<span className='cart__price'>£65.00</span>
										</td>
									</tr>
									<tr className='cart__table--body__items'>
										<td className='cart__table--body__list'>
											<div className='cart__product d-flex align-items-center'>
												<div className='product__thumbnail border-radius-5'>
													<Link href='product-details'>
														<Image className='border-radius-5' src='/images/products/small-product2.png' alt='cart-product' width={100} height={120} />
													</Link>
													<span className='product__thumbnail--quantity'>1</span>
												</div>
												<div className='product__description'>
													<h3 className='product__description--name h4'>
														<Link href='product-details'>Vegetable-healthy</Link>
													</h3>
													<span className='product__description--variant'>COLOR: Green</span>
												</div>
											</div>
										</td>
										<td className='cart__table--body__list'>
											<span className='cart__price'>£82.00</span>
										</td>
									</tr>
									<tr className='cart__table--body__items'>
										<td className='cart__table--body__list'>
											<div className='cart__product d-flex align-items-center'>
												<div className='product__thumbnail border-radius-5'>
													<Link href='product-details'>
														<Image className='border-radius-5' src='/images/products/small-product4.png' alt='cart-product' width={100} height={120} />
													</Link>
													<span className='product__thumbnail--quantity'>1</span>
												</div>
												<div className='product__description'>
													<h3 className='product__description--name h4'>
														<Link href='product-details'>Raw-onions-surface</Link>
													</h3>
													<span className='product__description--variant'>COLOR: White</span>
												</div>
											</div>
										</td>
										<td className='cart__table--body__list'>
											<span className='cart__price'>£78.00</span>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className='checkout__discount--code'>
							<form className='d-flex' action='#'>
								<label>
									<input className='checkout__discount--code__input--field border-radius-5' placeholder='Gift card or discount code' type='text' />
								</label>
								<button className='checkout__discount--code__btn primary__btn border-radius-5' type='submit'>
									Apply
								</button>
							</form>
						</div>
						<div className='checkout__total'>
							<table className='checkout__total--table'>
								<tbody className='checkout__total--body'>
									<tr className='checkout__total--items'>
										<td className='checkout__total--title text-left'>Subtotal </td>
										<td className='checkout__total--amount text-right'>$860.00</td>
									</tr>
									<tr className='checkout__total--items'>
										<td className='checkout__total--title text-left'>Shipping</td>
										<td className='checkout__total--calculated__text text-right'>Calculated at next step</td>
									</tr>
								</tbody>
								<tfoot className='checkout__total--footer'>
									<tr className='checkout__total--footer__items'>
										<td className='checkout__total--footer__title checkout__total--footer__list text-left'>Total </td>
										<td className='checkout__total--footer__amount checkout__total--footer__list text-right'>$860.00</td>
									</tr>
								</tfoot>
							</table>
						</div>
					</aside>
				</div>
			</div>
		</div>
	)
}
