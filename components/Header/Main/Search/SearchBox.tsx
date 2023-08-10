import SearchIcon from '@/components/SVGs/Search'

export default function SearchBox() {
	return (
		<div className='header__search--box'>
			<label>
				<input className='header__search--input' placeholder='Keyword here...' type='text' />
			</label>
			<button className='header__search--button bg__secondary text-white' type='submit' aria-label='search button'>
				<SearchIcon />
			</button>
		</div>
	)
}
