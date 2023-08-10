import CategorySelector from './CategorySelector'
import SearchBox from './SearchBox'

export default function Search() {
	return (
		<div className='header__search--widget header__sticky--none d-none d-lg-block'>
			<form className='d-flex header__search--form' action='#'>
				<CategorySelector />
				<SearchBox />
			</form>
		</div>
	)
}
