'use client'

import Image from 'next/image'
import Link from 'next/link'
import Rating from '../Rating/Rating'
import AddToCartIcon from '../SVGs/AddToCart'
import FavoriteIcon from '../SVGs/Favorite'
import { useState } from 'react'
import QuickView from './QuickView/QuickView'
import QuickViewIcon from '../SVGs/QuickView'

export default function ProductCard({ title, image, hoverImage, category, currentPrice, oldPrice }: { title: string; image: string; hoverImage: string; category: string; currentPrice: number; oldPrice: number }) {
	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	return (
		<>
			<QuickView open={open} handleClose={handleClose} />
			<div className='col mb-30'>
				<div className='product__items '>
					{/* product thumbnail */}
					<div className='product__items--thumbnail'>
						<Link
							className='product__items--link'
							href='product-details'>
							<Image
								className='product__items--img product__primary--img'
								src={`/images/products/${image}`}
								width={282}
								height={310}
								alt='product-img'
							/>
							<Image
								className='product__items--img product__secondary--img'
								src={`/images/products/${image}`}
								width={282}
								height={310}
								alt='product-img'
							/>
						</Link>
						<div className='product__badge'>
							<span className='product__badge--items sale'>Sale</span>
						</div>
					</div>

					{/* product content */}
					<div className='product__items--content'>
						{/* category */}
						<span className='product__items--content__subtitle'>{category}</span>
						<h3 className='product__items--content__title h4'>
							<Link href='product-details'>{title}</Link>
						</h3>

						{/* pricing */}
						<div className='product__items--price'>
							<span className='current__price'>${currentPrice}</span>
							<span className='price__divided'></span>
							<span className='old__price'>${oldPrice}</span>
						</div>

						<Rating rate={5} />

						{/* actions */}
						<ul className='product__items--action d-flex'>
							<li className='product__items--action__list'>
								<Link
									className='product__items--action__btn add__to--cart'
									href='/cart'>
									<AddToCartIcon />
									<span className='add__to--cart__text'> + Add to cart</span>
								</Link>
							</li>

							<li className='product__items--action__list'>
								<Link
									className='product__items--action__btn'
									href='/wishlist'>
									<FavoriteIcon />
									<span className='visually-hidden'>Wishlist</span>
								</Link>
							</li>

							<li
								className='product__items--action__list'
								onClick={handleOpen}>
								<span className='product__items--action__btn'>
									<QuickViewIcon />
									<span className='visually-hidden'>Quick View</span>
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}
