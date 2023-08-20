import ProductCard from '@/components/ProductCard'

export default function Products() {
	const productCount = 10
	const products = new Array(productCount).fill(null)

	return (
		<div className='product__section--inner'>
			<div className='row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 mb--n30'>
				{products.map((_, index) => (
					<ProductCard key={index} title={`Product ${index}`} image='product1.png' hoverImage='product1.png' category='Jacket, Women' currentPrice={110} oldPrice={78} />
				))}
			</div>
		</div>
	)
}
