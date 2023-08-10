import FavoriteIcon from '@/components/SVGs/Favorite'

export default function Favorites() {
	return (
		<li className='header__account--items d-none d-lg-block'>
			<a className='header__account--btn' href='/wishlist'>
				<FavoriteIcon />
				<span className='header__account--btn__text'>Wish List</span>
				<span className='items__count wishlist'>02</span>
			</a>
		</li>
	)
}
