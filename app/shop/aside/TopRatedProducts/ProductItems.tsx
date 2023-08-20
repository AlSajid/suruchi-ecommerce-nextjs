import Rating from '@/components/Rating/Rating'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductItems() {
	return (
		<div className='product__items product__items--grid d-flex align-items-center'>
			<div className='product__items--grid__thumbnail position__relative'>
				<Link className='product__items--link' href='product-details'>
					<Image className='product__items--img product__primary--img' src='/images/products/small-product1.png' alt='product-img' width={100} height={120} />
					<Image className='product__items--img product__secondary--img' src='/images/products/small-product2.png' alt='product-img' width={100} height={120} />
				</Link>
			</div>
			<div className='product__items--grid__content'>
				<h3 className='product__items--content__title h4'>
					<Link href='product-details'>Women Fish Cut</Link>
				</h3>
				<div className='product__items--price'>
					<span className='current__price'>$110</span>
					<span className='price__divided'></span>
					<span className='old__price'>$78</span>
				</div>
				<Rating rate={4} />
			</div>
		</div>
	)
}
