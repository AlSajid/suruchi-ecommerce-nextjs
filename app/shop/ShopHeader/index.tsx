export default function ShopHeader({ gridView, setGridView }: { gridView: boolean; setGridView: any }) {
	return (
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
						<button className={`product__grid--column__buttons--icons  ${gridView ? 'active' : ''}`} onClick={() => setGridView(true)}>
							<svg xmlns='http:/www.w3.org/2000/svg' width='13' height='13' viewBox='0 0 9 9'>
								<g transform='translate(-1360 -479)'>
									<rect id='Rectangle_5725' data-name='Rectangle 5725' width='4' height='4' transform='translate(1360 479)' fill='currentColor' />
									<rect id='Rectangle_5727' data-name='Rectangle 5727' width='4' height='4' transform='translate(1360 484)' fill='currentColor' />
									<rect id='Rectangle_5726' data-name='Rectangle 5726' width='4' height='4' transform='translate(1365 479)' fill='currentColor' />
									<rect id='Rectangle_5728' data-name='Rectangle 5728' width='4' height='4' transform='translate(1365 484)' fill='currentColor' />
								</g>
							</svg>
						</button>
						<button className={`product__grid--column__buttons--icons ${gridView ? '' : 'active'}`} onClick={() => setGridView(false)}>
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
	)
}
