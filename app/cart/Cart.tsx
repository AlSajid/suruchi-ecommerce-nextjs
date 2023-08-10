import Image from 'next/image'

export default function Cart() {
	return (
		<section className='cart__section section--padding'>
			<div className='container-fluid'>
				<div className='cart__section--inner'>
					<form action='#'>
						<h2 className='cart__title mb-40'>Shopping Cart</h2>
						<div className='row'>
							<div className='col-lg-8'>
								<div className='cart__table'>
									<table className='cart__table--inner'>
										<thead className='cart__table--header'>
											<tr className='cart__table--header__items'>
												<th className='cart__table--header__list'>Product</th>
												<th className='cart__table--header__list'>Price</th>
												<th className='cart__table--header__list'>Quantity</th>
												<th className='cart__table--header__list'>Total</th>
											</tr>
										</thead>
										<tbody className='cart__table--body'>
											<tr className='cart__table--body__items'>
												<td className='cart__table--body__list'>
													<div className='cart__product d-flex align-items-center'>
														<button className='cart__remove--btn' aria-label='search button' type='button'>
															<svg fill='currentColor' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='16px' height='16px'>
																<path d='M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z' />
															</svg>
														</button>
														<div className='cart__thumbnail'>
															<a href='product-details'>
																<Image className='border-radius-5' src='/images/products/product1.png' alt='cart-product' width={282} height={310} />
															</a>
														</div>
														<div className='cart__content'>
															<h4 className='cart__content--title'>
																<a href='product-details'>Fresh-whole-fish</a>
															</h4>
															<span className='cart__content--variant'>COLOR: Blue</span>
															<span className='cart__content--variant'>WEIGHT: 2 Kg</span>
														</div>
													</div>
												</td>
												<td className='cart__table--body__list'>
													<span className='cart__price'>£65.00</span>
												</td>
												<td className='cart__table--body__list'>
													<div className='quantity__box'>
														<button type='button' className='quantity__value quickview__value--quantity decrease' aria-label='quantity value' value='Decrease Value'>
															-
														</button>
														<label>
															<input type='number' className='quantity__number quickview__value--number' value='1' data-counter />
														</label>
														<button type='button' className='quantity__value quickview__value--quantity increase' aria-label='quantity value' value='Increase Value'>
															+
														</button>
													</div>
												</td>
												<td className='cart__table--body__list'>
													<span className='cart__price end'>£130.00</span>
												</td>
											</tr>
											<tr className='cart__table--body__items'>
												<td className='cart__table--body__list'>
													<div className='cart__product d-flex align-items-center'>
														<button className='cart__remove--btn' aria-label='search button' type='button'>
															<svg fill='currentColor' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='16px' height='16px'>
																<path d='M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z' />
															</svg>
														</button>
														<div className='cart__thumbnail'>
															<a href='product-details'>
																<Image className='border-radius-5' src='/images/products/product2.png' alt='cart-product' width={282} height={310} />
															</a>
														</div>
														<div className='cart__content'>
															<h4 className='cart__content--title'>
																<a href='product-details'>Vegetable-healthy</a>
															</h4>
															<span className='cart__content--variant'>COLOR: Blue</span>
															<span className='cart__content--variant'>WEIGHT: 2 Kg</span>
														</div>
													</div>
												</td>
												<td className='cart__table--body__list'>
													<span className='cart__price'>£65.00</span>
												</td>
												<td className='cart__table--body__list'>
													<div className='quantity__box'>
														<button type='button' className='quantity__value quickview__value--quantity decrease' aria-label='quantity value' value='Decrease Value'>
															-
														</button>
														<label>
															<input type='number' className='quantity__number quickview__value--number' value='1' data-counter />
														</label>
														<button type='button' className='quantity__value quickview__value--quantity increase' aria-label='quantity value' value='Increase Value'>
															+
														</button>
													</div>
												</td>
												<td className='cart__table--body__list'>
													<span className='cart__price end'>£130.00</span>
												</td>
											</tr>
											<tr className='cart__table--body__items'>
												<td className='cart__table--body__list'>
													<div className='cart__product d-flex align-items-center'>
														<button className='cart__remove--btn' aria-label='search button' type='button'>
															<svg fill='currentColor' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='16px' height='16px'>
																<path d='M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z' />
															</svg>
														</button>
														<div className='cart__thumbnail'>
															<a href='product-details'>
																<Image className='border-radius-5' src='/images/products/product3.png' alt='cart-product' width={282} height={310} />
															</a>
														</div>
														<div className='cart__content'>
															<h4 className='cart__content--title'>
																<a href='product-details'>Raw-onions-surface</a>
															</h4>
															<span className='cart__content--variant'>COLOR: Blue</span>
															<span className='cart__content--variant'>WEIGHT: 2 Kg</span>
														</div>
													</div>
												</td>
												<td className='cart__table--body__list'>
													<span className='cart__price'>£65.00</span>
												</td>
												<td className='cart__table--body__list'>
													<div className='quantity__box'>
														<button type='button' className='quantity__value quickview__value--quantity decrease' aria-label='quantity value' value='Decrease Value'>
															-
														</button>
														<label>
															<input type='number' className='quantity__number quickview__value--number' value='1' data-counter />
														</label>
														<button type='button' className='quantity__value quickview__value--quantity increase' aria-label='quantity value' value='Increase Value'>
															+
														</button>
													</div>
												</td>
												<td className='cart__table--body__list'>
													<span className='cart__price end'>£130.00</span>
												</td>
											</tr>
											<tr className='cart__table--body__items'>
												<td className='cart__table--body__list'>
													<div className='cart__product d-flex align-items-center'>
														<button className='cart__remove--btn' aria-label='search button' type='button'>
															<svg fill='currentColor' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='16px' height='16px'>
																<path d='M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z' />
															</svg>
														</button>
														<div className='cart__thumbnail'>
															<a href='product-details'>
																<Image className='border-radius-5' src='/images/products/product4.png' alt='cart-product' width={282} height={310} />
															</a>
														</div>
														<div className='cart__content'>
															<h4 className='cart__content--title'>
																<a href='product-details'>Oversize Cotton Dress</a>
															</h4>
															<span className='cart__content--variant'>COLOR: Blue</span>
															<span className='cart__content--variant'>WEIGHT: 2 Kg</span>
														</div>
													</div>
												</td>
												<td className='cart__table--body__list'>
													<span className='cart__price'>£65.00</span>
												</td>
												<td className='cart__table--body__list'>
													<div className='quantity__box'>
														<button type='button' className='quantity__value quickview__value--quantity decrease' aria-label='quantity value' value='Decrease Value'>
															-
														</button>
														<label>
															<input type='number' className='quantity__number quickview__value--number' value='1' data-counter />
														</label>
														<button type='button' className='quantity__value quickview__value--quantity increase' aria-label='quantity value' value='Increase Value'>
															+
														</button>
													</div>
												</td>
												<td className='cart__table--body__list'>
													<span className='cart__price end'>£130.00</span>
												</td>
											</tr>
										</tbody>
									</table>
									<div className='continue__shopping d-flex justify-content-between'>
										<a className='continue__shopping--link' href='shop'>
											Continue shopping
										</a>
										<button className='continue__shopping--clear' type='submit'>
											Clear Cart
										</button>
									</div>
								</div>
							</div>
							<div className='col-lg-4'>
								<div className='cart__summary border-radius-10'>
									<div className='coupon__code mb-30'>
										<h3 className='coupon__code--title'>Coupon</h3>
										<p className='coupon__code--desc'>Enter your coupon code if you have one.</p>
										<div className='coupon__code--field d-flex'>
											<label>
												<input className='coupon__code--field__input border-radius-5' placeholder='Coupon code' type='text' />
											</label>
											<button className='coupon__code--field__btn primary__btn' type='submit'>
												Apply Coupon
											</button>
										</div>
									</div>
									<div className='cart__note mb-20'>
										<h3 className='cart__note--title'>Note</h3>
										<p className='cart__note--desc'>Add special instructions for your seller...</p>
										<textarea className='cart__note--textarea border-radius-5'></textarea>
									</div>
									<div className='cart__summary--total mb-20'>
										<table className='cart__summary--total__table'>
											<tbody>
												<tr className='cart__summary--total__list'>
													<td className='cart__summary--total__title text-left'>SUBTOTAL</td>
													<td className='cart__summary--amount text-right'>$860.00</td>
												</tr>
												<tr className='cart__summary--total__list'>
													<td className='cart__summary--total__title text-left'>GRAND TOTAL</td>
													<td className='cart__summary--amount text-right'>$860.00</td>
												</tr>
											</tbody>
										</table>
									</div>
									<div className='cart__summary--footer'>
										<p className='cart__summary--footer__desc'>Shipping & taxes calculated at checkout</p>
										<ul className='d-flex justify-content-between'>
											<li>
												<button className='cart__summary--footer__btn primary__btn cart' type='submit'>
													Update Cart
												</button>
											</li>
											<li>
												<a className='cart__summary--footer__btn primary__btn checkout' href='checkout'>
													Check Out
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</section>
	)
}
