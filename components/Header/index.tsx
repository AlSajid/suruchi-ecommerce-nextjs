import Image from 'next/image'
import TopBar from './TopBar'
import Main from './Main'
import OffCanvas from './OffCanvas'
import MiniCart from './OffCanvas/MiniCart'
import StickyToolbar from './OffCanvas/StickyToolbar'
import Search from './Search'

export default function Header() {
	return (
		<header className='header__section'>
			<TopBar />
			<Main />

			<div className='header__bottom'>
				<div className='container-fluid'>
					<div className='header__bottom--inner position__relative d-none d-lg-flex justify-content-between align-items-center'>
						<div className='header__menu'>
							<nav className='header__menu--navigation'>
								<ul className='d-flex'>
									<li className='header__menu--items'>
										<a className='header__menu--link' href='/'>
											Home
											<svg className='menu__arrowdown--icon' xmlns='http://www.w3.org/2000/svg' width='12' height='7.41' viewBox='0 0 12 7.41'>
												<path d='M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z' transform='translate(-6 -8.59)' fill='currentColor' opacity='0.7' />
											</svg>
										</a>
										<ul className='header__sub--menu'>
											<li className='header__sub--menu__items'>
												<a href='/' className='header__sub--menu__link'>
													Home One
												</a>
											</li>
											<li className='header__sub--menu__items'>
												<a href='index-2' className='header__sub--menu__link'>
													Home Two
												</a>
											</li>
											<li className='header__sub--menu__items'>
												<a href='index-3' className='header__sub--menu__link'>
													Home Three
												</a>
											</li>
										</ul>
									</li>
									<li className='header__menu--items mega__menu--items'>
										<a className='header__menu--link' href='shop'>
											Shop
											<svg className='menu__arrowdown--icon' xmlns='http://www.w3.org/2000/svg' width='12' height='7.41' viewBox='0 0 12 7.41'>
												<path d='M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z' transform='translate(-6 -8.59)' fill='currentColor' opacity='0.7' />
											</svg>
										</a>
										<ul className='header__mega--menu d-flex'>
											<li className='header__mega--menu__li'>
												<span className='header__mega--subtitle'>Column One</span>
												<ul className='header__mega--sub__menu'>
													<li className='header__mega--sub__menu_li'>
														<a className='header__mega--sub__menu--title' href='shop'>
															Shop Left Sidebar
														</a>
													</li>
													<li className='header__mega--sub__menu_li'>
														<a className='header__mega--sub__menu--title' href='shop-right-sidebar'>
															Shop Right Sidebar
														</a>
													</li>
													<li className='header__mega--sub__menu_li'>
														<a className='header__mega--sub__menu--title' href='shop-grid'>
															Shop Grid
														</a>
													</li>
													<li className='header__mega--sub__menu_li'>
														<a className='header__mega--sub__menu--title' href='shop-grid-list'>
															Shop Grid List
														</a>
													</li>
													<li className='header__mega--sub__menu_li'>
														<a className='header__mega--sub__menu--title' href='shop-list'>
															Shop List
														</a>
													</li>
												</ul>
											</li>
											<li className='header__mega--menu__li'>
												<span className='header__mega--subtitle'>Column Two</span>
												<ul className='header__mega--sub__menu'>
													<li className='header__mega--sub__menu_li'>
														<a className='header__mega--sub__menu--title' href='product-details'>
															Product Details
														</a>
													</li>
													<li className='header__mega--sub__menu_li'>
														<a className='header__mega--sub__menu--title' href='product-video'>
															Video Product
														</a>
													</li>
													<li className='header__mega--sub__menu_li'>
														<a className='header__mega--sub__menu--title' href='product-details'>
															Variable Product
														</a>
													</li>
													<li className='header__mega--sub__menu_li'>
														<a className='header__mega--sub__menu--title' href='product-left-sidebar'>
															Product Left Sidebar
														</a>
													</li>
													<li className='header__mega--sub__menu_li'>
														<a className='header__mega--sub__menu--title' href='product-gallery'>
															Product Gallery
														</a>
													</li>
												</ul>
											</li>
											<li className='header__mega--menu__li'>
												<span className='header__mega--subtitle'>Column Three</span>
												<ul className='header__mega--sub__menu'>
													<li className='header__mega--sub__menu_li'>
														<a className='header__mega--sub__menu--title' href='my-account'>
															My Account
														</a>
													</li>
													<li className='header__mega--sub__menu_li'>
														<a className='header__mega--sub__menu--title' href='my-account-2'>
															My Account 2
														</a>
													</li>
													<li className='header__mega--sub__menu_li'>
														<a className='header__mega--sub__menu--title' href='404'>
															404 Page
														</a>
													</li>
													<li className='header__mega--sub__menu_li'>
														<a className='header__mega--sub__menu--title' href='/login'>
															Login Page
														</a>
													</li>
													<li className='header__mega--sub__menu_li'>
														<a className='header__mega--sub__menu--title' href='faq'>
															Faq Page
														</a>
													</li>
												</ul>
											</li>
											<li className='header__mega--menu__li'>
												<span className='header__mega--subtitle'>Column Four</span>
												<ul className='header__mega--sub__menu'>
													<li className='header__mega--sub__menu_li'>
														<a className='header__mega--sub__menu--title' href='compare'>
															Compare Pages
														</a>
													</li>
													<li className='header__mega--sub__menu_li'>
														<a className='header__mega--sub__menu--title' href='checkout'>
															Checkout page
														</a>
													</li>
													<li className='header__mega--sub__menu_li'>
														<a className='header__mega--sub__menu--title' href='checkout-2'>
															Checkout Style 2
														</a>
													</li>
													<li className='header__mega--sub__menu_li'>
														<a className='header__mega--sub__menu--title' href='checkout-3'>
															Checkout Style 3
														</a>
													</li>
													<li className='header__mega--sub__menu_li'>
														<a className='header__mega--sub__menu--title' href='checkout-4'>
															Checkout Style 4
														</a>
													</li>
												</ul>
											</li>
										</ul>
									</li>
									<li className='header__menu--items'>
										<a className='header__menu--link' href='about'>
											About US
										</a>
									</li>
									<li className='header__menu--items'>
										<a className='header__menu--link' href='blog'>
											Blog
											<svg className='menu__arrowdown--icon' xmlns='http://www.w3.org/2000/svg' width='12' height='7.41' viewBox='0 0 12 7.41'>
												<path d='M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z' transform='translate(-6 -8.59)' fill='currentColor' opacity='0.7' />
											</svg>
										</a>
										<ul className='header__sub--menu'>
											<li className='header__sub--menu__items'>
												<a href='blog' className='header__sub--menu__link'>
													Blog Grid
												</a>
											</li>
											<li className='header__sub--menu__items'>
												<a href='blog-details' className='header__sub--menu__link'>
													Blog Details
												</a>
											</li>
											<li className='header__sub--menu__items'>
												<a href='blog-left-sidebar' className='header__sub--menu__link'>
													Blog Left Sidebar
												</a>
											</li>
											<li className='header__sub--menu__items'>
												<a href='blog-right-sidebar' className='header__sub--menu__link'>
													Blog Right Sidebar
												</a>
											</li>
										</ul>
									</li>
									<li className='header__menu--items d-none d-xl-block'>
										<a className='header__menu--link' href='shop'>
											Categories
										</a>
									</li>
									<li className='header__menu--items'>
										<a className='header__menu--link' href='#'>
											Pages
											<svg className='menu__arrowdown--icon' xmlns='http://www.w3.org/2000/svg' width='12' height='7.41' viewBox='0 0 12 7.41'>
												<path d='M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z' transform='translate(-6 -8.59)' fill='currentColor' opacity='0.7' />
											</svg>
										</a>
										<ul className='header__sub--menu'>
											<li className='header__sub--menu__items'>
												<a href='about' className='header__sub--menu__link'>
													About Us
												</a>
											</li>
											<li className='header__sub--menu__items'>
												<a href='contact' className='header__sub--menu__link'>
													Contact Us
												</a>
											</li>
											<li className='header__sub--menu__items'>
												<a href='/cart' className='header__sub--menu__link'>
													Cart Page
												</a>
											</li>
											<li className='header__sub--menu__items'>
												<a href='/portfolio' className='header__sub--menu__link'>
													Portfolio Page
												</a>
											</li>
											<li className='header__sub--menu__items'>
												<a href='/wishlist' className='header__sub--menu__link'>
													Wishlist Page
												</a>
											</li>
											<li className='header__sub--menu__items'>
												<a href='/login' className='header__sub--menu__link'>
													Login Page
												</a>
											</li>
											<li className='header__sub--menu__items'>
												<a href='404' className='header__sub--menu__link'>
													Error Page
												</a>
											</li>
										</ul>
									</li>
									<li className='header__menu--items'>
										<a className='header__menu--link' href='contact'>
											Contact
										</a>
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

			<OffCanvas />
			<StickyToolbar />
			<MiniCart />
			<Search />
		</header>
	)
}
