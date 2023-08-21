import Testimonial from '@/components/Testimonial'
import Blogs from '../Home/Blogs'
import Slider from '../Home/Slider'
import Banners from './Banners'
import Shipping from './Shipping'
import NewProducts from '../Home/NewProducts'
import Deals from './Deals'
import Banners2 from './Banners2'
import NewCollections from './NewCollections'

export default function Homepage3() {
	return (
		<main className='main__content_wrapper'>
			<Slider />
			<Shipping />
			<Banners />
			<NewProducts />
         <Deals />
			<NewCollections />
         <Banners2/>
			<Testimonial />
			<Blogs />
		</main>
	)
}
