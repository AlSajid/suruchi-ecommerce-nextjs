export default function Search() {
	return (
		<div className='header__search--widget header__sticky--none d-none d-lg-block'>
			<form className='d-flex header__search--form' action='#'>
				{/* category selector */}
				<div className='header__select--categories select'>
					<select className='header__select--inner'>
						<option selected value='1'>
							All Categories
						</option>
						<option value='2'>Accessories</option>
						<option value='3'>Accessories & More</option>
						<option value='4'>Camera & Video </option>
						<option value='5'>Butters & Eggs </option>
					</select>
				</div>

				{/* search box */}
				<div className='header__search--box'>
					<label>
						<input className='header__search--input' placeholder='Keyword here...' type='text' />
					</label>
					<button className='header__search--button bg__secondary text-white' type='submit' aria-label='search button'>
						<svg className='header__search--button__svg' xmlns='http://www.w3.org/2000/svg' width='27.51' height='26.443' viewBox='0 0 512 512'>
							<path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' fill='none' stroke='currentColor' strokeMiterlimit='10' strokeWidth='32'></path>
							<path fill='none' stroke='currentColor' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='32' d='M338.29 338.29L448 448'></path>
						</svg>
					</button>
				</div>
			</form>
		</div>
	)
}
