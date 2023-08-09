import Image from 'next/image'
// import OffCanvas from './OffCanvas'
// import MiniCart from './OffCanvas/MiniCart'
// import StickyToolbar from './OffCanvas/StickyToolbar'
// import Search from './Search'

export default function Header() {
	return (
		<header className='header__section'>
			<div className='header__topbar bg__secondary'>
				<div className='container-fluid'>
					<div className='header__topbar--inner d-flex align-items-center justify-content-between'>
						<div className='header__shipping'>
							<ul className='header__shipping--wrapper d-flex'>
								<li className='header__shipping--text text-white'>
									Welcome to Netmark online Store
								</li>
								<li className='header__shipping--text text-white d-sm-2-none'>
									<Image
										className='header__shipping--text__icon'
										src='/images/icons/bus.png'
										alt='bus-icon'
										width={19}
										height={13}
									/>{' '}
									Track Your Order
								</li>
								<li className='header__shipping--text text-white d-sm-2-none'>
									<Image
										className='header__shipping--text__icon'
										src='/images/icons/email.png'
										alt='email-icon'
										width={15}
										height={11}
									/>
									<a className='header__shipping--text__link' href='mailto:demo@gmail.com'>
										demo@gmail.com
									</a>
								</li>
							</ul>
						</div>
						<div className='language__currency d-none d-lg-block'>
							<ul className='d-flex align-items-center'>
								<li className='language__currency--list'>
									<a className='language__switcher text-white' href='#'>
										<Image
											className='language__switcher--icon__img'
											src='/images/icons/language-icon.png'
											alt='currency'
											width={15}
											height={15}
										/>
										<span>English</span>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='11.797'
											height='9.05'
											viewBox='0 0 9.797 6.05'>
											<path
												d='M14.646,8.59,10.9,12.329,7.151,8.59,6,9.741l4.9,4.9,4.9-4.9Z'
												transform='translate(-6 -8.59)'
												fill='currentColor'
												opacity='0.7'
											/>
										</svg>
									</a>
									<div className='dropdown__language'>
										<ul>
											<li className='language__items'>
												<a className='language__text' href='#'>
													France
												</a>
											</li>
											<li className='language__items'>
												<a className='language__text' href='#'>
													Russia
												</a>
											</li>
											<li className='language__items'>
												<a className='language__text' href='#'>
													Spanish
												</a>
											</li>
										</ul>
									</div>
								</li>
								<li className='language__currency--list'>
									<a className='account__currency--link text-white' href='#'>
										<Image
											src='/images/icons/usd-icon.png'
											alt='currency'
											width={12}
											height={12}
										/>
										<span>$ US Dollar</span>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='11.797'
											height='9.05'
											viewBox='0 0 9.797 6.05'>
											<path
												d='M14.646,8.59,10.9,12.329,7.151,8.59,6,9.741l4.9,4.9,4.9-4.9Z'
												transform='translate(-6 -8.59)'
												fill='currentColor'
												opacity='0.7'
											/>
										</svg>
									</a>
									<div className='dropdown__currency'>
										<ul>
											<li className='currency__items'>
												<a className='currency__text' href='#'>
													CAD
												</a>
											</li>
											<li className='currency__items'>
												<a className='currency__text' href='#'>
													CNY
												</a>
											</li>
											<li className='currency__items'>
												<a className='currency__text' href='#'>
													EUR
												</a>
											</li>
											<li className='currency__items'>
												<a className='currency__text' href='#'>
													GBP
												</a>
											</li>
										</ul>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className='main__header header__sticky'>
				<div className='container-fluid'>
					<div className='main__header--inner position__relative d-flex justify-content-between align-items-center'>
						<div className='offcanvas__header--menu__open '>
							<a
								className='offcanvas__header--menu__open--btn'
								href='javascript:void(0)'
								data-offcanvas>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='ionicon offcanvas__header--menu__open--svg'
									viewBox='0 0 512 512'>
									<path
										fill='currentColor'
										stroke='currentColor'
										strokeLinecap='round'
										strokeMiterlimit='10'
										strokeWidth='32'
										d='M80 160h352M80 256h352M80 352h352'
									/>
								</svg>
								<span className='visually-hidden'>Menu Open</span>
							</a>
						</div>
						<div className='main__logo'>
							<h1 className='main__logo--title'>
								<a className='main__logo--link' href='index.html'>
									<Image
										className='main__logo--img'
										src='/images/logo/nav-log.png'
										alt='logo-img'
										width={157}
										height={36}
									/>
								</a>
							</h1>
						</div>
						<div className='header__search--widget header__sticky--none d-none d-lg-block'>
							<form className='d-flex header__search--form' action='#'>
								<div className='header__select--categories select'>
									<select className='header__select--inner'>
										<option selected value='1'>
											All Categories
										</option>
										<option value='2'>Accessories</option>
										<option value='3'>Accessories & More</option>
										<option value='4'>Camera & Video </option>
										<option value='5'>Butters & Eggs </option>
									</select>
								</div>
								<div className='header__search--box'>
									<label>
										<input
											className='header__search--input'
											placeholder='Keyword here...'
											type='text'
										/>
									</label>
									<button
										className='header__search--button bg__secondary text-white'
										type='submit'
										aria-label='search button'>
										<svg
											className='header__search--button__svg'
											xmlns='http://www.w3.org/2000/svg'
											width='27.51'
											height='26.443'
											viewBox='0 0 512 512'>
											<path
												d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z'
												fill='none'
												stroke='currentColor'
												strokeMiterlimit='10'
												strokeWidth='32'></path>
											<path
												fill='none'
												stroke='currentColor'
												strokeLinecap='round'
												strokeMiterlimit='10'
												strokeWidth='32'
												d='M338.29 338.29L448 448'></path>
										</svg>
									</button>
								</div>
							</form>
						</div>
						<div className='header__account header__sticky--none'>
							<ul className='d-flex'>
								<li className='header__account--items'>
									<a className='header__account--btn' href='my-account.html'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='26.51'
											height='23.443'
											viewBox='0 0 512 512'>
											<path
												d='M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z'
												fill='none'
												stroke='currentColor'
												strokeLinecap='round'
												stroke-linejoin='round'
												strokeWidth='32'
											/>
											<path
												d='M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z'
												fill='none'
												stroke='currentColor'
												strokeMiterlimit='10'
												strokeWidth='32'
											/>
										</svg>
										<span className='header__account--btn__text'>My Account</span>
									</a>
								</li>
								<li className='header__account--items d-none d-lg-block'>
									<a className='header__account--btn' href='wishlist.html'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='28.51'
											height='23.443'
											viewBox='0 0 512 512'>
											<path
												d='M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z'
												fill='none'
												stroke='currentColor'
												strokeLinecap='round'
												stroke-linejoin='round'
												strokeWidth='32'></path>
										</svg>
										<span className='header__account--btn__text'> Wish List</span>
										<span className='items__count wishlist'>02</span>
									</a>
								</li>
								<li className='header__account--items'>
									<a
										className='header__account--btn minicart__open--btn'
										href='javascript:void(0)'
										data-offcanvas>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='26.51'
											height='23.443'
											viewBox='0 0 14.706 13.534'>
											<g transform='translate(0 0)'>
												<g>
													<path
														data-name='Path 16787'
														d='M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z'
														transform='translate(0 -463.248)'
														fill='currentColor'
													/>
													<path
														data-name='Path 16788'
														d='M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,6.793,478.352Z'
														transform='translate(-1.191 -466.622)'
														fill='currentColor'
													/>
													<path
														data-name='Path 16789'
														d='M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,14.566,478.352Z'
														transform='translate(-2.875 -466.622)'
														fill='currentColor'
													/>
												</g>
											</g>
										</svg>
										<span className='header__account--btn__text'> My cart</span>
										<span className='items__count'>02</span>
									</a>
								</li>
							</ul>
						</div>
						<div className='header__menu d-none header__sticky--block d-lg-block'>
							<nav className='header__menu--navigation'>
								<ul className='d-flex'>
									<li className='header__menu--items style2'>
										<a className='header__menu--link' href='index.html'>
											Home
											<svg
												className='menu__arrowdown--icon'
												xmlns='http://www.w3.org/2000/svg'
												width='12'
												height='7.41'
												viewBox='0 0 12 7.41'>
												<path
													d='M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z'
													transform='translate(-6 -8.59)'
													fill='currentColor'
													opacity='0.7'
												/>
											</svg>
										</a>
										<ul className='header__sub--menu'>
											<li className='header__sub--menu__items'>
												<a href='index.html' className='header__sub--menu__link'>
													Home One
												</a>
											</li>
											<li className='header__sub--menu__items'>
												<a href='index-2.html' className='header__sub--menu__link'>
													Home Two
												</a>
											</li>
											<li className='header__sub--menu__items'>
												<a href='index-3.html' className='header__sub--menu__link'>
													Home Three
												</a>
											</li>
										</ul>
									</li>
									<li className='header__menu--items mega__menu--items style2'>
										<a className='header__menu--link' href='shop.html'>
											Shop
											<svg
												className='menu__arrowdown--icon'
												xmlns='http://www.w3.org/2000/svg'
												width='12'
												height='7.41'
												viewBox='0 0 12 7.41'>
												<path
													d='M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z'
													transform='translate(-6 -8.59)'
													fill='currentColor'
													opacity='0.7'
												/>
											</svg>
										</a>
										<ul className='header__mega--menu d-flex'>
											<li className='header__mega--menu__li'>
												<span className='header__mega--subtitle'>Column One</span>
												<ul className='header__mega--sub__menu'>
													<li className='header__mega--sub__menu_li'>
														<a
															className='header__mega--sub__menu--title'
															href='shop.html'>
															Shop Left Sidebar
														</a>
													</li>
													<li className='header__mega--sub__menu_li'>
														<a
															className='header__mega--sub__menu--title'
															href='shop-right-sidebar.html'>
															Shop Right Sidebar
														</a>
													</li>
													<li className='header__mega--sub__menu_li'>
														<a
															className='header__mega--sub__menu--title'
															href='shop-grid.html'>
															Shop Grid
														</a>
													</li>
													<li className='header__mega--sub__menu_li'>
														<a
															className='header__mega--sub__menu--title'
															href='shop-grid-list.html'>
															Shop Grid List
														</a>
													</li>
													<li className='header__mega--sub__menu_li'>
														<a
															className='header__mega--sub__menu--title'
															href='shop-list.html'>
															Shop List
														</a>
													</li>
												</ul>
											</li>
											<li className='header__mega--menu__li'>
												<span className='header__mega--subtitle'>Column Two</span>
												<ul className='header__mega--sub__menu'>
													<li className='header__mega--sub__menu_li'>
														<a
															className='header__mega--sub__menu--title'
															href='product-details.html'>
															Product Details
														</a>
													</li>
													<li className='header__mega--sub__menu_li'>
														<a
															className='header__mega--sub__menu--title'
															href='product-video.html'>
															Video Product
														</a>
													</li>
													<li className='header__mega--sub__menu_li'>
														<a
															className='header__mega--sub__menu--title'
															href='product-details.html'>
															Variable Product
														</a>
													</li>
													<li className='header__mega--sub__menu_li'>
														<a
															className='header__mega--sub__menu--title'
															href='product-left-sidebar.html'>
															Product Left Sidebar
														</a>
													</li>
													<li className='header__mega--sub__menu_li'>
														<a
															className='header__mega--sub__menu--title'
															href='product-gallery.html'>
															Product Gallery
														</a>
													</li>
												</ul>
											</li>
											<li className='header__mega--menu__li'>
												<span className='header__mega--subtitle'>Column Three</span>
												<ul className='header__mega--sub__menu'>
													<li className='header__mega--sub__menu_li'>
														<a
															className='header__mega--sub__menu--title'
															href='my-account.html'>
															My Account
														</a>
													</li>
													<li className='header__mega--sub__menu_li'>
														<a
															className='header__mega--sub__menu--title'
															href='my-account-2.html'>
															My Account 2
														</a>
													</li>
													<li className='header__mega--sub__menu_li'>
														<a
															className='header__mega--sub__menu--title'
															href='404.html'>
															404 Page
														</a>
													</li>
													<li className='header__mega--sub__menu_li'>
														<a
															className='header__mega--sub__menu--title'
															href='login.html'>
															Login Page
														</a>
													</li>
													<li className='header__mega--sub__menu_li'>
														<a
															className='header__mega--sub__menu--title'
															href='faq.html'>
															Faq Page
														</a>
													</li>
												</ul>
											</li>
											<li className='header__mega--menu__li'>
												<span className='header__mega--subtitle'>Column Four</span>
												<ul className='header__mega--sub__menu'>
													<li className='header__mega--sub__menu_li'>
														<a
															className='header__mega--sub__menu--title'
															href='compare.html'>
															Compare Pages
														</a>
													</li>
													<li className='header__mega--sub__menu_li'>
														<a
															className='header__mega--sub__menu--title'
															href='checkout.html'>
															Checkout page
														</a>
													</li>
													<li className='header__mega--sub__menu_li'>
														<a
															className='header__mega--sub__menu--title'
															href='checkout-2.html'>
															Checkout Style 2
														</a>
													</li>
													<li className='header__mega--sub__menu_li'>
														<a
															className='header__mega--sub__menu--title'
															href='checkout-3.html'>
															Checkout Style 3
														</a>
													</li>
													<li className='header__mega--sub__menu_li'>
														<a
															className='header__mega--sub__menu--title'
															href='checkout-4.html'>
															Checkout Style 4
														</a>
													</li>
												</ul>
											</li>
										</ul>
									</li>
									<li className='header__menu--items style2'>
										<a className='header__menu--link' href='about.html'>
											About US{' '}
										</a>
									</li>
									<li className='header__menu--items style2'>
										<a className='header__menu--link' href='blog.html'>
											Blog
											<svg
												className='menu__arrowdown--icon'
												xmlns='http://www.w3.org/2000/svg'
												width='12'
												height='7.41'
												viewBox='0 0 12 7.41'>
												<path
													d='M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z'
													transform='translate(-6 -8.59)'
													fill='currentColor'
													opacity='0.7'
												/>
											</svg>
										</a>
										<ul className='header__sub--menu'>
											<li className='header__sub--menu__items'>
												<a href='blog.html' className='header__sub--menu__link'>
													Blog Grid
												</a>
											</li>
											<li className='header__sub--menu__items'>
												<a href='blog-details.html' className='header__sub--menu__link'>
													Blog Details
												</a>
											</li>
											<li className='header__sub--menu__items'>
												<a
													href='blog-left-sidebar.html'
													className='header__sub--menu__link'>
													Blog Left Sidebar
												</a>
											</li>
											<li className='header__sub--menu__items'>
												<a
													href='blog-right-sidebar.html'
													className='header__sub--menu__link'>
													Blog Right Sidebar
												</a>
											</li>
										</ul>
									</li>
									<li className='header__menu--items style2 d-none d-xl-block'>
										<a className='header__menu--link' href='shop.html'>
											Categories{' '}
										</a>
									</li>
									<li className='header__menu--items style2'>
										<a className='header__menu--link' href='#'>
											Pages
											<svg
												className='menu__arrowdown--icon'
												xmlns='http://www.w3.org/2000/svg'
												width='12'
												height='7.41'
												viewBox='0 0 12 7.41'>
												<path
													d='M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z'
													transform='translate(-6 -8.59)'
													fill='currentColor'
													opacity='0.7'
												/>
											</svg>
										</a>
										<ul className='header__sub--menu'>
											<li className='header__sub--menu__items'>
												<a href='about.html' className='header__sub--menu__link'>
													About Us
												</a>
											</li>
											<li className='header__sub--menu__items'>
												<a href='contact.html' className='header__sub--menu__link'>
													Contact Us
												</a>
											</li>
											<li className='header__sub--menu__items'>
												<a href='cart.html' className='header__sub--menu__link'>
													Cart Page
												</a>
											</li>
											<li className='header__sub--menu__items'>
												<a href='portfolio.html' className='header__sub--menu__link'>
													Portfolio Page
												</a>
											</li>
											<li className='header__sub--menu__items'>
												<a href='wishlist.html' className='header__sub--menu__link'>
													Wishlist Page
												</a>
											</li>
											<li className='header__sub--menu__items'>
												<a href='login.html' className='header__sub--menu__link'>
													Login Page
												</a>
											</li>
											<li className='header__sub--menu__items'>
												<a href='404.html' className='header__sub--menu__link'>
													Error Page
												</a>
											</li>
										</ul>
									</li>
									<li className='header__menu--items style2'>
										<a className='header__menu--link ' href='contact.html'>
											Contact{' '}
										</a>
									</li>
								</ul>
							</nav>
						</div>
						<div className='header__account header__account2 header__sticky--block'>
							<ul className='d-flex'>
								<li className='header__account--items header__account2--items  header__account--search__items d-none d-lg-block'>
									<a
										className='header__account--btn search__open--btn'
										href='javascript:void(0)'
										data-offcanvas>
										<svg
											className='header__search--button__svg'
											xmlns='http://www.w3.org/2000/svg'
											width='26.51'
											height='23.443'
											viewBox='0 0 512 512'>
											<path
												d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z'
												fill='none'
												stroke='currentColor'
												strokeMiterlimit='10'
												strokeWidth='32'
											/>
											<path
												fill='none'
												stroke='currentColor'
												strokeLinecap='round'
												strokeMiterlimit='10'
												strokeWidth='32'
												d='M338.29 338.29L448 448'
											/>
										</svg>
										<span className='visually-hidden'>Search</span>
									</a>
								</li>
								<li className='header__account--items header__account2--items'>
									<a className='header__account--btn' href='my-account.html'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='26.51'
											height='23.443'
											viewBox='0 0 512 512'>
											<path
												d='M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z'
												fill='none'
												stroke='currentColor'
												strokeLinecap='round'
												stroke-linejoin='round'
												strokeWidth='32'
											/>
											<path
												d='M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z'
												fill='none'
												stroke='currentColor'
												strokeMiterlimit='10'
												strokeWidth='32'
											/>
										</svg>
										<span className='visually-hidden'>My Account</span>
									</a>
								</li>
								<li className='header__account--items header__account2--items d-none d-lg-block'>
									<a className='header__account--btn' href='wishlist.html'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='28.51'
											height='23.443'
											viewBox='0 0 512 512'>
											<path
												d='M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z'
												fill='none'
												stroke='currentColor'
												strokeLinecap='round'
												stroke-linejoin='round'
												strokeWidth='32'></path>
										</svg>
										<span className='items__count  wishlist style2'>02</span>
									</a>
								</li>
								<li className='header__account--items header__account2--items'>
									<a
										className='header__account--btn minicart__open--btn'
										href='javascript:void(0)'
										data-offcanvas>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='26.51'
											height='23.443'
											viewBox='0 0 14.706 13.534'>
											<g transform='translate(0 0)'>
												<g>
													<path
														data-name='Path 16787'
														d='M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z'
														transform='translate(0 -463.248)'
														fill='currentColor'
													/>
													<path
														data-name='Path 16788'
														d='M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,6.793,478.352Z'
														transform='translate(-1.191 -466.622)'
														fill='currentColor'
													/>
													<path
														data-name='Path 16789'
														d='M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,14.566,478.352Z'
														transform='translate(-2.875 -466.622)'
														fill='currentColor'
													/>
												</g>
											</g>
										</svg>
										<span className='items__count style2'>02</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className='header__bottom'>
				<div className='container-fluid'>
					<div className='header__bottom--inner position__relative d-none d-lg-flex justify-content-between align-items-center'>
						<div className='header__menu'>
							<nav className='header__menu--navigation'>
								<ul className='d-flex'>
									<li className='header__menu--items'>
										<a className='header__menu--link' href='index.html'>
											Home
											<svg
												className='menu__arrowdown--icon'
												xmlns='http://www.w3.org/2000/svg'
												width='12'
												height='7.41'
												viewBox='0 0 12 7.41'>
												<path
													d='M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z'
													transform='translate(-6 -8.59)'
													fill='currentColor'
													opacity='0.7'
												/>
											</svg>
										</a>
										<ul className='header__sub--menu'>
											<li className='header__sub--menu__items'>
												<a href='index.html' className='header__sub--menu__link'>
													Home One
												</a>
											</li>
											<li className='header__sub--menu__items'>
												<a href='index-2.html' className='header__sub--menu__link'>
													Home Two
												</a>
											</li>
											<li className='header__sub--menu__items'>
												<a href='index-3.html' className='header__sub--menu__link'>
													Home Three
												</a>
											</li>
										</ul>
									</li>
									<li className='header__menu--items mega__menu--items'>
										<a className='header__menu--link' href='shop.html'>
											Shop
											<svg
												className='menu__arrowdown--icon'
												xmlns='http://www.w3.org/2000/svg'
												width='12'
												height='7.41'
												viewBox='0 0 12 7.41'>
												<path
													d='M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z'
													transform='translate(-6 -8.59)'
													fill='currentColor'
													opacity='0.7'
												/>
											</svg>
										</a>
										<ul className='header__mega--menu d-flex'>
											<li className='header__mega--menu__li'>
												<span className='header__mega--subtitle'>Column One</span>
												<ul className='header__mega--sub__menu'>
													<li className='header__mega--sub__menu_li'>
														<a
															className='header__mega--sub__menu--title'
															href='shop.html'>
															Shop Left Sidebar
														</a>
													</li>
													<li className='header__mega--sub__menu_li'>
														<a
															className='header__mega--sub__menu--title'
															href='shop-right-sidebar.html'>
															Shop Right Sidebar
														</a>
													</li>
													<li className='header__mega--sub__menu_li'>
														<a
															className='header__mega--sub__menu--title'
															href='shop-grid.html'>
															Shop Grid
														</a>
													</li>
													<li className='header__mega--sub__menu_li'>
														<a
															className='header__mega--sub__menu--title'
															href='shop-grid-list.html'>
															Shop Grid List
														</a>
													</li>
													<li className='header__mega--sub__menu_li'>
														<a
															className='header__mega--sub__menu--title'
															href='shop-list.html'>
															Shop List
														</a>
													</li>
												</ul>
											</li>
											<li className='header__mega--menu__li'>
												<span className='header__mega--subtitle'>Column Two</span>
												<ul className='header__mega--sub__menu'>
													<li className='header__mega--sub__menu_li'>
														<a
															className='header__mega--sub__menu--title'
															href='product-details.html'>
															Product Details
														</a>
													</li>
													<li className='header__mega--sub__menu_li'>
														<a
															className='header__mega--sub__menu--title'
															href='product-video.html'>
															Video Product
														</a>
													</li>
													<li className='header__mega--sub__menu_li'>
														<a
															className='header__mega--sub__menu--title'
															href='product-details.html'>
															Variable Product
														</a>
													</li>
													<li className='header__mega--sub__menu_li'>
														<a
															className='header__mega--sub__menu--title'
															href='product-left-sidebar.html'>
															Product Left Sidebar
														</a>
													</li>
													<li className='header__mega--sub__menu_li'>
														<a
															className='header__mega--sub__menu--title'
															href='product-gallery.html'>
															Product Gallery
														</a>
													</li>
												</ul>
											</li>
											<li className='header__mega--menu__li'>
												<span className='header__mega--subtitle'>Column Three</span>
												<ul className='header__mega--sub__menu'>
													<li className='header__mega--sub__menu_li'>
														<a
															className='header__mega--sub__menu--title'
															href='my-account.html'>
															My Account
														</a>
													</li>
													<li className='header__mega--sub__menu_li'>
														<a
															className='header__mega--sub__menu--title'
															href='my-account-2.html'>
															My Account 2
														</a>
													</li>
													<li className='header__mega--sub__menu_li'>
														<a
															className='header__mega--sub__menu--title'
															href='404.html'>
															404 Page
														</a>
													</li>
													<li className='header__mega--sub__menu_li'>
														<a
															className='header__mega--sub__menu--title'
															href='login.html'>
															Login Page
														</a>
													</li>
													<li className='header__mega--sub__menu_li'>
														<a
															className='header__mega--sub__menu--title'
															href='faq.html'>
															Faq Page
														</a>
													</li>
												</ul>
											</li>
											<li className='header__mega--menu__li'>
												<span className='header__mega--subtitle'>Column Four</span>
												<ul className='header__mega--sub__menu'>
													<li className='header__mega--sub__menu_li'>
														<a
															className='header__mega--sub__menu--title'
															href='compare.html'>
															Compare Pages
														</a>
													</li>
													<li className='header__mega--sub__menu_li'>
														<a
															className='header__mega--sub__menu--title'
															href='checkout.html'>
															Checkout page
														</a>
													</li>
													<li className='header__mega--sub__menu_li'>
														<a
															className='header__mega--sub__menu--title'
															href='checkout-2.html'>
															Checkout Style 2
														</a>
													</li>
													<li className='header__mega--sub__menu_li'>
														<a
															className='header__mega--sub__menu--title'
															href='checkout-3.html'>
															Checkout Style 3
														</a>
													</li>
													<li className='header__mega--sub__menu_li'>
														<a
															className='header__mega--sub__menu--title'
															href='checkout-4.html'>
															Checkout Style 4
														</a>
													</li>
												</ul>
											</li>
										</ul>
									</li>
									<li className='header__menu--items'>
										<a className='header__menu--link' href='about.html'>
											About US{' '}
										</a>
									</li>
									<li className='header__menu--items'>
										<a className='header__menu--link' href='blog.html'>
											Blog
											<svg
												className='menu__arrowdown--icon'
												xmlns='http://www.w3.org/2000/svg'
												width='12'
												height='7.41'
												viewBox='0 0 12 7.41'>
												<path
													d='M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z'
													transform='translate(-6 -8.59)'
													fill='currentColor'
													opacity='0.7'
												/>
											</svg>
										</a>
										<ul className='header__sub--menu'>
											<li className='header__sub--menu__items'>
												<a href='blog.html' className='header__sub--menu__link'>
													Blog Grid
												</a>
											</li>
											<li className='header__sub--menu__items'>
												<a href='blog-details.html' className='header__sub--menu__link'>
													Blog Details
												</a>
											</li>
											<li className='header__sub--menu__items'>
												<a
													href='blog-left-sidebar.html'
													className='header__sub--menu__link'>
													Blog Left Sidebar
												</a>
											</li>
											<li className='header__sub--menu__items'>
												<a
													href='blog-right-sidebar.html'
													className='header__sub--menu__link'>
													Blog Right Sidebar
												</a>
											</li>
										</ul>
									</li>
									<li className='header__menu--items d-none d-xl-block'>
										<a className='header__menu--link' href='shop.html'>
											Categories{' '}
										</a>
									</li>
									<li className='header__menu--items'>
										<a className='header__menu--link' href='#'>
											Pages
											<svg
												className='menu__arrowdown--icon'
												xmlns='http://www.w3.org/2000/svg'
												width='12'
												height='7.41'
												viewBox='0 0 12 7.41'>
												<path
													d='M16.59,8.59,12,13.17,7.41,8.59,6,10l6,6,6-6Z'
													transform='translate(-6 -8.59)'
													fill='currentColor'
													opacity='0.7'
												/>
											</svg>
										</a>
										<ul className='header__sub--menu'>
											<li className='header__sub--menu__items'>
												<a href='about.html' className='header__sub--menu__link'>
													About Us
												</a>
											</li>
											<li className='header__sub--menu__items'>
												<a href='contact.html' className='header__sub--menu__link'>
													Contact Us
												</a>
											</li>
											<li className='header__sub--menu__items'>
												<a href='cart.html' className='header__sub--menu__link'>
													Cart Page
												</a>
											</li>
											<li className='header__sub--menu__items'>
												<a href='portfolio.html' className='header__sub--menu__link'>
													Portfolio Page
												</a>
											</li>
											<li className='header__sub--menu__items'>
												<a href='wishlist.html' className='header__sub--menu__link'>
													Wishlist Page
												</a>
											</li>
											<li className='header__sub--menu__items'>
												<a href='login.html' className='header__sub--menu__link'>
													Login Page
												</a>
											</li>
											<li className='header__sub--menu__items'>
												<a href='404.html' className='header__sub--menu__link'>
													Error Page
												</a>
											</li>
										</ul>
									</li>
									<li className='header__menu--items'>
										<a className='header__menu--link' href='contact.html'>
											Contact{' '}
										</a>
									</li>
								</ul>
							</nav>
						</div>
						<p className='header__discount--text'>
							<Image
								className='header__discount--icon__img'
								src='/images/icons/lamp.png'
								alt='lamp-img'
								width={29}
								height={29}
							/>
							Special up to 60% Off all item
						</p>
					</div>
				</div>
			</div>

			{/* <OffCanvas />
			<StickyToolbar />
			<MiniCart />
			<Search /> */}
		</header>
	)
}
