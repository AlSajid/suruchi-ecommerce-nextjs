import Rating from '@/components/Rating/Rating'
import AddToCartIcon from '@/components/SVGs/AddToCart'
import FavoriteIcon from '@/components/SVGs/Favorite'
import Image from 'next/image'

export default function Product({ title }: { title: string }) {
	return (
		<div className='col mb-30'>
			<div className='product__items '>
				<div className='product__items--thumbnail'>
					<a
						className='product__items--link'
						href='product-details'>
						<Image
							className='product__items--img product__primary--img'
							src='/images/products/product1.png'
							alt='product-img'
							width={282}
							height={310}
						/>
						<Image
							className='product__items--img product__secondary--img'
							src='/images/products/product2.png'
							alt='product-img'
							width={282}
							height={310}
						/>
					</a>
					<div className='product__badge'>
						<span className='product__badge--items sale'>Sale</span>
					</div>
					<a
						className='product__add-to__cart--btn__style2 '
						href='cart'>
						<AddToCartIcon />
						<span className='add__to--cart__text'> + Add to cart</span>
					</a>
					<ul className='product__items--action__style2'>
						<li className='product__items--action__style2--list'>
							<a
								className='product__items--action__style2--btn'
								href='wishlist'>
								<FavoriteIcon />
								<span className='visually-hidden'>Wishlist</span>
							</a>
						</li>
						<li className='product__items--action__style2--list'>
							<a
								className='product__items--action__style2--btn'
								data-open='modal1'
								href='javascript:void(0)'>
								<svg
									className='product__items--action__btn--svg'
									xmlns='http://www.w3.org/2000/svg'
									width='22.51'
									height='20.443'
									viewBox='0 0 512 512'>
									<path
										d='M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z'
										fill='none'
										stroke='currentColor'
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='32'
									/>
									<circle
										cx='256'
										cy='256'
										r='80'
										fill='none'
										stroke='currentColor'
										stroke-miterlimit='10'
										stroke-width='32'
									/>
								</svg>
								<span className='visually-hidden'>Quick View</span>
							</a>
						</li>
					</ul>
				</div>
				<div className='product__items--content text-center'>
					<span className='product__items--content__subtitle'>Jacket, Women</span>
					<h3 className='product__items--content__title h4'>
						<a href='product-details'>{title}</a>
					</h3>
					<div className='product__items--price'>
						<span className='current__price'>$110</span>
						<span className='price__divided'></span>
						<span className='old__price'>$78</span>
					</div>
					<Rating rate={5} />
				</div>
			</div>
		</div>
	)
}
