import Product from "./Product"

export default function Products() {
		const productCount = 10
		const products = new Array(productCount).fill(null)

	return (
		<section className='product__section section--padding color-scheme-2 pt-0'>
			<div className='container-fluid'>
				<div className='section__heading text-center mb-35'>
					<h2 className='section__heading--maintitle style2'>Summer Collection</h2>
				</div>
				<div className='product__section--inner'>
					<div className='row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 mb--n30'>
						{products.map((_, index) => (
							<Product key={index} title={`Product ${index}`}  />
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
