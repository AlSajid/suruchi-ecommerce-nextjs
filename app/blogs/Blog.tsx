import Pagination from '@/components/Pagination'
import Image from 'next/image'
import Link from 'next/link'

export default function Blog() {
	return (
		<div className='col mb-30'>
			<div className='blog__items'>
				<div className='blog__thumbnail'>
					<Link className='blog__thumbnail--link' href='blog-details'>
						<Image className='blog__thumbnail--img' src='/images/blogs/blog1.png' alt='blog-img' width={360} height={313} />
					</Link>
				</div>
				<div className='blog__content'>
					<span className='blog__content--meta'>February 03, 2022</span>
					<h3 className='blog__content--title'>
						<Link href='blog-details'>Fashion Trends In 2021 Styles, Colors, Accessories</Link>
					</h3>
					<Link className='blog__content--btn primary__btn' href='blog-details'>
						Read more
					</Link>
				</div>
			</div>
		</div>
	)
}
