export default function PriceFilter() {
	return (
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
	)
}
