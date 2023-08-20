import ProductCard from '@/components/ProductCard'

export default function GridView() {
		const productCount = 16
		const products = new Array(productCount).fill(null)

	return (
		<>
			<div id='product_grid' className='tab_pane active show'>
				<div className='product__section--inner product__grid--inner'>
					<div className='row row-cols-xl-4 row-cols-lg-3 row-cols-md-3 row-cols-2 mb--n30'>
						{products.map((_, index) => (
							<ProductCard key={index} title={`Product ${index}`} image='product1.png' hoverImage='product1.png' category='Jacket, Women' currentPrice={110} oldPrice={78} />
						))}
					</div>
				</div>
			</div>
		</>
	)
}
