import Slider from './Home/Slider'
import Banners1 from './Home/Banners1'
import NewProducts from './Home/NewProducts'
import Deals from './Home/Deals'
import BestSeller from './Home/BestSeller'
import Banners2 from './Home/Banners2'
import Testimonial from '../components/Testimonial'
import Blogs from './Home/Blogs'
import Banner from './Home/Banner'
import Newsletter from '@/components/Newsletter'

export default function Home() {
	return (
		<main className='main__content_wrapper'>
			<Slider />
			<Banners1 />
			<NewProducts />
			<Deals />
			<BestSeller />
			<Banners2 />
			<Testimonial />
			<Banner />
			<Blogs />
			<Newsletter />
		</main>
	)
}
