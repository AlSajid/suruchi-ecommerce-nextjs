import Image from 'next/image'
import Link from 'next/link'

export default function Cart() {
	return (
		<section className='cart__section section--padding'>
			<div className='container'>
				<div className='cart__section--inner'>
					<form action='#'>
						<h2 className='cart__title mb-40'>Wishlist</h2>
						<div className='cart__table'>
							<table className='cart__table--inner'>
								<thead className='cart__table--header'>
									<tr className='cart__table--header__items'>
										<th className='cart__table--header__list'>Product</th>
										<th className='cart__table--header__list'>Price</th>
										<th className='cart__table--header__list text-center'>STOCK STATUS</th>
										<th className='cart__table--header__list text-right'>ADD TO CART</th>
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
													<Link href='product-details'>
														<Image className='border-radius-5' src='/images/products/product1.png' alt='cart-product' width={282} height={310} />
													</Link>
												</div>
												<div className='cart__content'>
													<h4 className='cart__content--title'>
														<Link href='product-details'>Fresh-whole-fish</Link>
													</h4>
													<span className='cart__content--variant'>COLOR: Blue</span>
													<span className='cart__content--variant'>WEIGHT: 2 Kg</span>
												</div>
											</div>
										</td>
										<td className='cart__table--body__list'>
											<span className='cart__price'>£65.00</span>
										</td>
										<td className='cart__table--body__list text-center'>
											<span className='in__stock text__secondary'>in stock</span>
										</td>
										<td className='cart__table--body__list text-right'>
											<Link className='wishlist__cart--btn primary__btn' href='/cart'>
												Add To Cart
											</Link>
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
													<Link href='product-details'>
														<Image className='border-radius-5' src='/images/products/product2.png' alt='cart-product' width={282} height={310} />
													</Link>
												</div>
												<div className='cart__content'>
													<h4 className='cart__content--title'>
														<Link href='product-details'>Vegetable-healthy</Link>
													</h4>
													<span className='cart__content--variant'>COLOR: Blue</span>
													<span className='cart__content--variant'>WEIGHT: 2 Kg</span>
												</div>
											</div>
										</td>
										<td className='cart__table--body__list'>
											<span className='cart__price'>£65.00</span>
										</td>
										<td className='cart__table--body__list text-center'>
											<span className='in__stock text__secondary'>in stock</span>
										</td>
										<td className='cart__table--body__list text-right'>
											<Link className='wishlist__cart--btn primary__btn' href='/cart'>
												Add To Cart
											</Link>
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
													<Link href='product-details'>
														<Image className='border-radius-5' src='/images/products/product3.png' alt='cart-product' width={282} height={310} />
													</Link>
												</div>
												<div className='cart__content'>
													<h4 className='cart__content--title'>
														<Link href='product-details'>Raw-onions-surface</Link>
													</h4>
													<span className='cart__content--variant'>COLOR: Blue</span>
													<span className='cart__content--variant'>WEIGHT: 2 Kg</span>
												</div>
											</div>
										</td>
										<td className='cart__table--body__list'>
											<span className='cart__price'>£65.00</span>
										</td>
										<td className='cart__table--body__list text-center'>
											<span className='in__stock text__secondary'>in stock</span>
										</td>
										<td className='cart__table--body__list text-right'>
											<Link className='wishlist__cart--btn primary__btn' href='/cart'>
												Add To Cart
											</Link>
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
													<Link href='product-details'>
														<Image className='border-radius-5' src='/images/products/product4.png' alt='cart-product' width={282} height={310} />
													</Link>
												</div>
												<div className='cart__content'>
													<h4 className='cart__content--title'>
														<Link href='product-details'>Oversize Cotton Dress</Link>
													</h4>
													<span className='cart__content--variant'>COLOR: Blue</span>
													<span className='cart__content--variant'>WEIGHT: 2 Kg</span>
												</div>
											</div>
										</td>
										<td className='cart__table--body__list'>
											<span className='cart__price'>£65.00</span>
										</td>
										<td className='cart__table--body__list text-center'>
											<span className='in__stock text__secondary'>in stock</span>
										</td>
										<td className='cart__table--body__list text-right'>
											<Link className='wishlist__cart--btn primary__btn' href='/cart'>
												Add To Cart
											</Link>
										</td>
									</tr>
								</tbody>
							</table>
							<div className='continue__shopping d-flex justify-content-between'>
								<Link className='continue__shopping--link' href='/'>
									Continue shopping
								</Link>
								<Link className='continue__shopping--clear' href='shop'>
									View All Products
								</Link>
							</div>
						</div>
					</form>
				</div>
			</div>
		</section>
	)
}
