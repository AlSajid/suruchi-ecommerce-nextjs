export default function TypeFilter() {
	return (
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
	)
}
