import Slider from '../Home/Slider'
import Banner from './Banner'
import Products from './Products'
import GridProducts from './GridProducts'
import BrandLogo from './BrandLogo'
import ShopCard from './ShopCard'
import Testimonial from './testimonial'
import Contact from './Contact'
import Blog from './Blog'
import Banner2 from './Banner2'

export default function Homepage2() {
	return (
		<main className='main__content_wrapper'>
			<Slider />
			<Banner />
			<Products />
			<Banner2 />
			<GridProducts />
			<BrandLogo />
			<ShopCard />
			<Testimonial />
			<Contact />
			<Blog />
		</main>
	)
}
