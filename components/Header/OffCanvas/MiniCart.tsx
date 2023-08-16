import Image from 'next/image'
import Link from 'next/link';

export default function MiniCart({ isCartOpen, setIsCartOpen }: { isCartOpen: boolean; setIsCartOpen: Function }) {
	return (
		<div className={`offCanvas__minicart ${isCartOpen && 'active'}`}>
			<div className='minicart__header '>
				<div className='minicart__header--top d-flex justify-content-between align-items-center'>
					<h2 className='minicart__title h3'> Shopping Cart</h2>
					<button className='minicart__close--btn' aria-label='minicart close button' data-offcanvas onClick={() => setIsCartOpen(false)}>
						<svg className='minicart__close--icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
							<path fill='currentColor' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M368 368L144 144M368 144L144 368' />
						</svg>
					</button>
				</div>
				<p className='minicart__header--desc'>Clothing and fashion products are limited</p>
			</div>
			<div className='minicart__product'>
				<div className='minicart__product--items d-flex'>
					<div className='minicart__thumb'>
						<Link href='product-details'>
							<Image src='/images/products/product1.png' width={282} height={310} alt='product-img' />
						</Link>
					</div>
					<div className='minicart__text'>
						<h3 className='minicart__subtitle h4'>
							<Link href='product-details'>Oversize Cotton Dress</Link>
						</h3>
						<span className='color__variant'>
							<b>Color:</b> Beige
						</span>
						<div className='minicart__price'>
							<span className='current__price'>$125.00</span>
							<span className='old__price'>$140.00</span>
						</div>
						<div className='minicart__text--footer d-flex align-items-center'>
							<div className='quantity__box minicart__quantity'>
								<button type='button' className='quantity__value decrease' aria-label='quantity value' value='Decrease Value'>
									-
								</button>
								<label>
									<input type='number' className='quantity__number' value='1' data-counter />
								</label>
								<button type='button' className='quantity__value increase' value='Increase Value'>
									+
								</button>
							</div>
							<button className='minicart__product--remove'>Remove</button>
						</div>
					</div>
				</div>
				<div className='minicart__product--items d-flex'>
					<div className='minicart__thumb'>
						<Link href='product-details'>
							<Image src='/images/products/product2.png' width={282} height={310} alt='prduct-img' />
						</Link>
					</div>
					<div className='minicart__text'>
						<h3 className='minicart__subtitle h4'>
							<Link href='product-details'>Boxy Denim Jacket</Link>
						</h3>
						<span className='color__variant'>
							<b>Color:</b> Green
						</span>
						<div className='minicart__price'>
							<span className='current__price'>$115.00</span>
							<span className='old__price'>$130.00</span>
						</div>
						<div className='minicart__text--footer d-flex align-items-center'>
							<div className='quantity__box minicart__quantity'>
								<button type='button' className='quantity__value decrease' aria-label='quantity value' value='Decrease Value'>
									-
								</button>
								<label>
									<input type='number' className='quantity__number' value='1' data-counter />
								</label>
								<button type='button' className='quantity__value increase' aria-label='quantity value' value='Increase Value'>
									+
								</button>
							</div>
							<button className='minicart__product--remove'>Remove</button>
						</div>
					</div>
				</div>
			</div>
			<div className='minicart__amount'>
				<div className='minicart__amount_list d-flex justify-content-between'>
					<span>Sub Total:</span>
					<span>
						<b>$240.00</b>
					</span>
				</div>
				<div className='minicart__amount_list d-flex justify-content-between'>
					<span>Total:</span>
					<span>
						<b>$240.00</b>
					</span>
				</div>
			</div>
			<div className='minicart__conditions text-center'>
				<input className='minicart__conditions--input' id='accept' type='checkbox' />
				<label className='minicart__conditions--label' htmlFor='accept'>
					I agree with the
					<Link className='minicart__conditions--link' href='privacy-policy'>
						Privacy and Policy
					</Link>
				</label>
			</div>
			<div className='minicart__button d-flex justify-content-center'>
				<Link className='primary__btn minicart__button--link' href='/cart'>
					View cart
				</Link>
				<Link className='primary__btn minicart__button--link' href='checkout'>
					Checkout
				</Link>
			</div>
		</div>
	)
}
