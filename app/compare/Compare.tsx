import Image from 'next/image'

export default function Compare() {
	return (
		<section className='compare__section section--padding'>
			<div className='container'>
				<div className='row row-cols-1'>
					<div className='col'>
						<div className='section__heading text-center mb-40'>
							<h2 className='section__heading--maintitle h3'>COMPARE PRODUCT PAGE STYLE</h2>
						</div>
						<div className='compare__section--inner table-responsive'>
							<table className='compare__table'>
								<thead className='compare__table--header'>
									<tr className='compare__table--items'>
										<td className='compare__table--items__child text-center'>
											<button type='button' className='compare__remove'>
												<svg xmlns='http://www.w3.org/2000/svg' width='24.105' height='24.732' viewBox='0 0 512 512'>
													<path fill='currentColor' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32' d='M368 368L144 144M368 144L144 368'></path>
												</svg>
											</button>
											<h3 className='compare__product--title h4'>Cotton Dress</h3>
											<Image className='compare__product--thumb' src='/images/products/product1.png' alt='compare-image' width={282} height={310} />
										</td>
										<td className='compare__table--items__child text-center'>
											<button type='button' className='compare__remove'>
												<svg xmlns='http://www.w3.org/2000/svg' width='24.105' height='24.732' viewBox='0 0 512 512'>
													<path fill='currentColor' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32' d='M368 368L144 144M368 144L144 368'></path>
												</svg>
											</button>
											<h3 className='compare__product--title h4'>Edna Dress</h3>
											<Image className='compare__product--thumb' src='/images/products/product2.png' alt='compare-image' width={282} height={310} />
										</td>
										<td className='compare__table--items__child text-center'>
											<button type='button' className='compare__remove'>
												<svg xmlns='http://www.w3.org/2000/svg' width='24.105' height='24.732' viewBox='0 0 512 512'>
													<path fill='currentColor' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32' d='M368 368L144 144M368 144L144 368'></path>
												</svg>
											</button>
											<h3 className='compare__product--title h4'>Edna Dress</h3>
											<Image className='compare__product--thumb' src='/images/products/product3.png' alt='compare-image' width={282} height={310} />
										</td>
										<td className='compare__table--items__child text-center'>
											<button type='button' className='compare__remove'>
												<svg xmlns='http://www.w3.org/2000/svg' width='24.105' height='24.732' viewBox='0 0 512 512'>
													<path fill='currentColor' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32' d='M368 368L144 144M368 144L144 368'></path>
												</svg>
											</button>
											<h3 className='compare__product--title h4'>Edna Dress</h3>
											<Image className='compare__product--thumb' src='/images/products/product4.png' alt='compare-image' width={282} height={310} />
										</td>
										<td className='compare__table--items__child text-center'>
											<button type='button' className='compare__remove'>
												<svg xmlns='http://www.w3.org/2000/svg' width='24.105' height='24.732' viewBox='0 0 512 512'>
													<path fill='currentColor' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='32' d='M368 368L144 144M368 144L144 368'></path>
												</svg>
											</button>
											<h3 className='compare__product--title h4'>Edna Dress</h3>
											<Image className='compare__product--thumb' src='/images/products/product5.png' alt='compare-image' width={282} height={310} />
										</td>
									</tr>
								</thead>
								<tbody className='compare__table--body'>
									<tr className='compare__table--items'>
										<td className='compare__table--items__child text-center'>
											<span className='compare__product--price'>$89,00</span>
										</td>
										<td className='compare__table--items__child text-center'>
											<span className='compare__product--price'>$89,00</span>
										</td>
										<td className='compare__table--items__child text-center'>
											<span className='compare__product--price'>$89,00</span>
										</td>
										<td className='compare__table--items__child text-center'>
											<span className='compare__product--price'>$89,00</span>
										</td>
										<td className='compare__table--items__child text-center'>
											<span className='compare__product--price'>$89,00</span>
										</td>
									</tr>
									<tr className='compare__table--items'>
										<th className='compare__table--items__child--header'>Product Description</th>
										<th className='compare__table--items__child--header'>Product Description</th>
										<th className='compare__table--items__child--header'>Product Description</th>
										<th className='compare__table--items__child--header'>Product Description</th>
										<th className='compare__table--items__child--header'>Product Description</th>
									</tr>
									<tr className='compare__table--items'>
										<td className='compare__table--items__child text-center'>
											<p className='compare__description'>Lorem ipsum dolor sit, amet elit. Iusto excepturi fugiat vitae the are commodi nihil saepe itaque! name Corporis, quaerat layout.</p>
										</td>
										<td className='compare__table--items__child text-center'>
											<p className='compare__description'>Lorem ipsum dolor sit, amet elit. Iusto excepturi fugiat vitae the are commodi nihil saepe itaque! name Corporis, quaerat layout.</p>
										</td>
										<td className='compare__table--items__child text-center'>
											<p className='compare__description'>Lorem ipsum dolor sit, amet elit. Iusto excepturi fugiat vitae the are commodi nihil saepe itaque! name Corporis, quaerat layout.</p>
										</td>
										<td className='compare__table--items__child text-center'>
											<p className='compare__description'>Lorem ipsum dolor sit, amet elit. Iusto excepturi fugiat vitae the are commodi nihil saepe itaque! name Corporis, quaerat layout.</p>
										</td>
										<td className='compare__table--items__child text-center'>
											<p className='compare__description'>Lorem ipsum dolor sit, amet elit. Iusto excepturi fugiat vitae the are commodi nihil saepe itaque! name Corporis, quaerat layout.</p>
										</td>
									</tr>
									<tr className='compare__table--items'>
										<th className='compare__table--items__child--header'>Availability</th>
										<th className='compare__table--items__child--header'>Availability</th>
										<th className='compare__table--items__child--header'>Availability</th>
										<th className='compare__table--items__child--header'>Availability</th>
										<th className='compare__table--items__child--header'>Availability</th>
									</tr>
									<tr className='compare__table--items'>
										<td className='compare__table--items__child text-center'>
											<p className='compare__instock text__secondary'>In stock</p>
										</td>
										<td className='compare__table--items__child text-center'>
											<p className='compare__instock text__secondary'>In stock</p>
										</td>
										<td className='compare__table--items__child text-center'>
											<p className='compare__instock text__secondary'>In stock</p>
										</td>
										<td className='compare__table--items__child text-center'>
											<p className='compare__instock text__secondary'>In stock</p>
										</td>
										<td className='compare__table--items__child text-center'>
											<p className='compare__instock text__secondary'>In stock</p>
										</td>
									</tr>
									<tr className='compare__table--items'>
										<td className='compare__table--items__child text-center'>
											<a className='compare__cart--btn primary__btn' href='cart'>
												Add to Cart
											</a>
										</td>
										<td className='compare__table--items__child text-center'>
											<a className='compare__cart--btn primary__btn' href='cart'>
												Add to Cart
											</a>
										</td>
										<td className='compare__table--items__child text-center'>
											<a className='compare__cart--btn primary__btn' href='cart'>
												Add to Cart
											</a>
										</td>
										<td className='compare__table--items__child text-center'>
											<a className='compare__cart--btn primary__btn' href='cart'>
												Add to Cart
											</a>
										</td>
										<td className='compare__table--items__child text-center'>
											<a className='compare__cart--btn primary__btn' href='cart'>
												Add to Cart
											</a>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
