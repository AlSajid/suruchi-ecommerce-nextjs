import ProductItems from './ProductItems'

export default function TopRatedProducts() {
	const productCount = 3
	const products = new Array(productCount).fill(null)

	return (
		<div className='single__widget widget__bg'>
			<h2 className='widget__title h3'>Top Rated Product</h2>
			<div className='product__grid--inner'>
				{products.map((_, index) => (
					<ProductItems key={index} />
				))}
			</div>
		</div>
	)
}
