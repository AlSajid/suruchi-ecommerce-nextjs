import SearchIcon from '../SVGs/Search'

export default function Search() {
	return (
		<div className='predictive__search--box '>
			<div className='predictive__search--box__inner'>
				<h2 className='predictive__search--title'>Search Products</h2>
				<form className='predictive__search--form' action='#'>
					<label>
						<input className='predictive__search--input' placeholder='Search Here' type='text' />
					</label>
					<button className='predictive__search--button' aria-label='search button' type='submit'>
						<SearchIcon />
					</button>
				</form>
			</div>
			<button className='predictive__search--close__btn' aria-label='search close button' data-offcanvas>
				<svg className='predictive__search--close__icon' xmlns='http://www.w3.org/2000/svg' width='40.51' height='30.443' viewBox='0 0 512 512'>
					<path fill='currentColor' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M368 368L144 144M368 144L144 368' />
				</svg>
			</button>
		</div>
	)
}
