import Image from 'next/image'
import Link from 'next/link'

export default function Bottom() {
	return (
		<div className='header__bottom'>
			<div className='container-fluid'>
				<div className='header__bottom--inner position__relative d-none d-lg-flex justify-content-between align-items-center'>
					<div className='header__menu'>
						<nav className='header__menu--navigation'>
							<ul className='d-flex'>
								<li className='header__menu--items'>
									<Link className='header__menu--link' href='/'>
										Home
									</Link>
								</li>
								<li className='header__menu--items'>
									<Link className='header__menu--link' href='shop'>
										Shop
									</Link>
								</li>
								<li className='header__menu--items'>
									<Link className='header__menu--link' href='about'>
										About US
									</Link>
								</li>
								<li className='header__menu--items'>
									<Link className='header__menu--link' href='blogs'>
										Blogs
									</Link>
								</li>
								<li className='header__menu--items d-none d-xl-block'>
									<Link className='header__menu--link' href='shop'>
										Categories
									</Link>
								</li>
								<li className='header__menu--items'>
									<Link className='header__menu--link' href='#'>
										Pages
										<svg className='menu__arrowdown--icon' xmlns='http://www.w3.org/2000/svg' width='12' height='7.41' viewBox='0 0 12 7.41'>
											<path d='M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z' transform='translate(-6 -8.59)' fill='currentColor' opacity='0.7' />
										</svg>
									</Link>
									<ul className='header__sub--menu'>
										<li className='header__sub--menu__items'>
											<Link href='about' className='header__sub--menu__link'>
												About Us
											</Link>
										</li>
										<li className='header__sub--menu__items'>
											<Link href='contact' className='header__sub--menu__link'>
												Contact Us
											</Link>
										</li>
										<li className='header__sub--menu__items'>
											<Link href='/cart' className='header__sub--menu__link'>
												Cart Page
											</Link>
										</li>
										<li className='header__sub--menu__items'>
											<Link href='/portfolio' className='header__sub--menu__link'>
												Portfolio Page
											</Link>
										</li>
										<li className='header__sub--menu__items'>
											<Link href='/wishlist' className='header__sub--menu__link'>
												Wishlist Page
											</Link>
										</li>
										<li className='header__sub--menu__items'>
											<Link href='/login' className='header__sub--menu__link'>
												Login Page
											</Link>
										</li>
										<li className='header__sub--menu__items'>
											<Link href='404' className='header__sub--menu__link'>
												Error Page
											</Link>
										</li>
									</ul>
								</li>
								<li className='header__menu--items'>
									<Link className='header__menu--link' href='contact'>
										Contact
									</Link>
								</li>
							</ul>
						</nav>
					</div>
					<p className='header__discount--text'>
						<Image className='header__discount--icon__img' src='/images/icons/lamp.png' alt='lamp-img' width={29} height={29} />
						Special up to 60% Off all item
					</p>
				</div>
			</div>
		</div>
	)
}
