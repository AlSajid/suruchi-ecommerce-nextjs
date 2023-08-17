import Image from "next/image";
import Link from "next/link";

export default function TopRatedProducts() {
	return (
		<div className='single__widget widget__bg'>
			<h2 className='widget__title h3'>Top Rated Product</h2>
			<div className='product__grid--inner'>
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
						<ul className='rating product__rating d-flex'>
							<li className='rating__list'>
								<span className='rating__list--icon'>
									<svg className='rating__list--icon__svg' xmlns='http:/www.w3.org/2000/svg' width='14.105' height='14.732' viewBox='0 0 10.105 9.732'>
										<path
											data-name='star - Copy'
											d='M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z'
											transform='translate(0 -0.018)'
											fill='currentColor'></path>
									</svg>
								</span>
							</li>
							<li className='rating__list'>
								<span className='rating__list--icon'>
									<svg className='rating__list--icon__svg' xmlns='http:/www.w3.org/2000/svg' width='14.105' height='14.732' viewBox='0 0 10.105 9.732'>
										<path
											data-name='star - Copy'
											d='M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z'
											transform='translate(0 -0.018)'
											fill='currentColor'></path>
									</svg>
								</span>
							</li>
							<li className='rating__list'>
								<span className='rating__list--icon'>
									<svg className='rating__list--icon__svg' xmlns='http:/www.w3.org/2000/svg' width='14.105' height='14.732' viewBox='0 0 10.105 9.732'>
										<path
											data-name='star - Copy'
											d='M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z'
											transform='translate(0 -0.018)'
											fill='currentColor'></path>
									</svg>
								</span>
							</li>
							<li className='rating__list'>
								<span className='rating__list--icon'>
									<svg className='rating__list--icon__svg' xmlns='http:/www.w3.org/2000/svg' width='14.105' height='14.732' viewBox='0 0 10.105 9.732'>
										<path
											data-name='star - Copy'
											d='M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z'
											transform='translate(0 -0.018)'
											fill='currentColor'></path>
									</svg>
								</span>
							</li>
							<li className='rating__list'>
								<span className='rating__list--icon'>
									<svg className='rating__list--icon__svg' xmlns='http:/www.w3.org/2000/svg' width='14.105' height='14.732' viewBox='0 0 10.105 9.732'>
										<path
											data-name='star - Copy'
											d='M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z'
											transform='translate(0 -0.018)'
											fill='currentColor'></path>
									</svg>
								</span>
							</li>
						</ul>
					</div>
				</div>
				<div className='product__items product__items--grid d-flex align-items-center'>
					<div className='product__items--grid__thumbnail position__relative'>
						<Link className='product__items--link' href='product-details'>
							<Image className='product__items--img product__primary--img' src='/images/products/small-product3.png' alt='product-img' width={100} height={120} />
							<Image className='product__items--img product__secondary--img' src='/images/products/small-product4.png' alt='product-img' width={100} height={120} />
						</Link>
					</div>
					<div className='product__items--grid__content'>
						<h3 className='product__items--content__title h4'>
							<Link href='product-details'>Gorgeous Granite is</Link>
						</h3>
						<div className='product__items--price'>
							<span className='current__price'>$140</span>
							<span className='price__divided'></span>
							<span className='old__price'>$115</span>
						</div>
						<ul className='rating product__rating d-flex'>
							<li className='rating__list'>
								<span className='rating__list--icon'>
									<svg className='rating__list--icon__svg' xmlns='http:/www.w3.org/2000/svg' width='14.105' height='14.732' viewBox='0 0 10.105 9.732'>
										<path
											data-name='star - Copy'
											d='M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z'
											transform='translate(0 -0.018)'
											fill='currentColor'></path>
									</svg>
								</span>
							</li>
							<li className='rating__list'>
								<span className='rating__list--icon'>
									<svg className='rating__list--icon__svg' xmlns='http:/www.w3.org/2000/svg' width='14.105' height='14.732' viewBox='0 0 10.105 9.732'>
										<path
											data-name='star - Copy'
											d='M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z'
											transform='translate(0 -0.018)'
											fill='currentColor'></path>
									</svg>
								</span>
							</li>
							<li className='rating__list'>
								<span className='rating__list--icon'>
									<svg className='rating__list--icon__svg' xmlns='http:/www.w3.org/2000/svg' width='14.105' height='14.732' viewBox='0 0 10.105 9.732'>
										<path
											data-name='star - Copy'
											d='M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z'
											transform='translate(0 -0.018)'
											fill='currentColor'></path>
									</svg>
								</span>
							</li>
							<li className='rating__list'>
								<span className='rating__list--icon'>
									<svg className='rating__list--icon__svg' xmlns='http:/www.w3.org/2000/svg' width='14.105' height='14.732' viewBox='0 0 10.105 9.732'>
										<path
											data-name='star - Copy'
											d='M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z'
											transform='translate(0 -0.018)'
											fill='currentColor'></path>
									</svg>
								</span>
							</li>
							<li className='rating__list'>
								<span className='rating__list--icon'>
									<svg className='rating__list--icon__svg' xmlns='http:/www.w3.org/2000/svg' width='14.105' height='14.732' viewBox='0 0 10.105 9.732'>
										<path
											data-name='star - Copy'
											d='M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z'
											transform='translate(0 -0.018)'
											fill='currentColor'></path>
									</svg>
								</span>
							</li>
						</ul>
					</div>
				</div>
				<div className='product__items product__items--grid d-flex align-items-center'>
					<div className='product__items--grid__thumbnail position__relative'>
						<Link className='product__items--link' href='product-details'>
							<Image className='product__items--img product__primary--img' src='/images/products/small-product5.png' alt='product-img' width={100} height={120} />
							<Image className='product__items--img product__secondary--img' src='/images/products/small-product6.png' alt='product-img' width={100} height={120} />
						</Link>
					</div>
					<div className='product__items--grid__content'>
						<h4 className='product__items--content__title'>
							<Link href='product-details'>Durable A Steel </Link>
						</h4>
						<div className='product__items--price'>
							<span className='current__price'>$160</span>
							<span className='price__divided'></span>
							<span className='old__price'>$118</span>
						</div>
						<ul className='rating product__rating d-flex'>
							<li className='rating__list'>
								<span className='rating__list--icon'>
									<svg className='rating__list--icon__svg' xmlns='http:/www.w3.org/2000/svg' width='14.105' height='14.732' viewBox='0 0 10.105 9.732'>
										<path
											data-name='star - Copy'
											d='M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z'
											transform='translate(0 -0.018)'
											fill='currentColor'></path>
									</svg>
								</span>
							</li>
							<li className='rating__list'>
								<span className='rating__list--icon'>
									<svg className='rating__list--icon__svg' xmlns='http:/www.w3.org/2000/svg' width='14.105' height='14.732' viewBox='0 0 10.105 9.732'>
										<path
											data-name='star - Copy'
											d='M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z'
											transform='translate(0 -0.018)'
											fill='currentColor'></path>
									</svg>
								</span>
							</li>
							<li className='rating__list'>
								<span className='rating__list--icon'>
									<svg className='rating__list--icon__svg' xmlns='http:/www.w3.org/2000/svg' width='14.105' height='14.732' viewBox='0 0 10.105 9.732'>
										<path
											data-name='star - Copy'
											d='M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z'
											transform='translate(0 -0.018)'
											fill='currentColor'></path>
									</svg>
								</span>
							</li>
							<li className='rating__list'>
								<span className='rating__list--icon'>
									<svg className='rating__list--icon__svg' xmlns='http:/www.w3.org/2000/svg' width='14.105' height='14.732' viewBox='0 0 10.105 9.732'>
										<path
											data-name='star - Copy'
											d='M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z'
											transform='translate(0 -0.018)'
											fill='currentColor'></path>
									</svg>
								</span>
							</li>
							<li className='rating__list'>
								<span className='rating__list--icon'>
									<svg className='rating__list--icon__svg' xmlns='http:/www.w3.org/2000/svg' width='14.105' height='14.732' viewBox='0 0 10.105 9.732'>
										<path
											data-name='star - Copy'
											d='M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z'
											transform='translate(0 -0.018)'
											fill='currentColor'></path>
									</svg>
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
