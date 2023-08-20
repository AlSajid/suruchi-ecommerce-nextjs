'use client'

import GridView from './products/GridView'
import { useState } from 'react'
import ListView from './products/ListView'
import Aside from './aside'
import ShopHeader from './ShopHeader'
import Link from 'next/link'

export default function Shop() {
	const [gridView, setGridView] = useState(true)

	return (
		<section className='shop__section section--padding'>
			<div className='container-fluid'>
				<ShopHeader setGridView={setGridView} gridView={gridView} />

				<div className='row'>
					<Aside />

					<div className='col-xl-9 col-lg-8'>
						<div className='shop__product--wrapper'>
							<div className='tab_content'>
								{gridView ? <GridView /> : <ListView />}
								<div className='pagination__area bg__gray--color'>
									<nav className='pagination justify-content-center'>
										<ul className='pagination__wrapper d-flex align-items-center justify-content-center'>
											<li className='pagination__list'>
												<Link href='shop' className='pagination__item--arrow  link '>
													<svg xmlns='http:/www.w3.org/2000/svg' width='22.51' height='20.443' viewBox='0 0 512 512'>
														<path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' />
													</svg>
													<span className='visually-hidden'>pagination arrow</span>
												</Link>
											</li>
											<li className='pagination__list'>
												<span className='pagination__item pagination__item--current'>1</span>
											</li>
											<li className='pagination__list'>
												<Link href='shop' className='pagination__item link'>
													2
												</Link>
											</li>
											<li className='pagination__list'>
												<Link href='shop' className='pagination__item link'>
													3
												</Link>
											</li>
											<li className='pagination__list'>
												<Link href='shop' className='pagination__item link'>
													4
												</Link>
											</li>
											<li className='pagination__list'>
												<Link href='shop' className='pagination__item--arrow  link '>
													<svg xmlns='http:/www.w3.org/2000/svg' width='22.51' height='20.443' viewBox='0 0 512 512'>
														<path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M268 112l144 144-144 144M392 256H100' />
													</svg>
													<span className='visually-hidden'>pagination arrow</span>
												</Link>
											</li>
										</ul>
									</nav>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
