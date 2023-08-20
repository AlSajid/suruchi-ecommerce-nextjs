import ContentWrapper from '@/components/ContentWrapper'
import Pagination from '@/components/Pagination'
import Blog from './Blog'

export default function Blogs() {
	const blogCount = 6
	const blogs = new Array(blogCount).fill(null)

	return (
		<ContentWrapper title='Blogs Grid'>
			<section className='blog__section section--padding'>
				<div className='container'>
					<div className='section__heading text-center mb-50'>
						<h2 className='section__heading--maintitle'>From The Blog</h2>
					</div>

					<div className='blog__section--inner'>
						<div className='row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-sm-u-2 row-cols-1 mb--n30'>
							{blogs.map((_, index) => (
								<Blog key={index} />
							))}
						</div>
						<Pagination />
					</div>
				</div>
			</section>
		</ContentWrapper>
	)
}
