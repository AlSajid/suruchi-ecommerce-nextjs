import FavoriteIcon from '@/components/SVGs/Favorite'
import HeaderButton from '@/components/Header/Button'

export default function Favorites() {
	return (
		<li className='header__account--items d-none d-lg-block'>
			<HeaderButton icon={<FavoriteIcon />} title='Wish List' href='/wishlist'>
				<span className='items__count wishlist'>02</span>
			</HeaderButton>
		</li>
	)
}
