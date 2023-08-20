import TopRatedProducts from './TopRatedProducts'
import BrandFilter from './BrandFilter'
import CategoryFilter from './CategoryFilter'
import TypeFilter from './TypeFilter'
import PriceFilter from './PriceFilter'

export default function Aside() {
	return (
		
			<div className='shop__sidebar--widget widget__area d-none d-lg-block'>
				<CategoryFilter />
				<TypeFilter />
				<PriceFilter />
				<TopRatedProducts />
				<BrandFilter />
			</div>

	)
}
