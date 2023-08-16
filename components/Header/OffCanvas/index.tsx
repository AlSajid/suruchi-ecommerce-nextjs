import Image from 'next/image'
import Languages from '../TopBar/Options/Languages'
import Currencies from '../TopBar/Options/Currencies'
import Link from 'next/link';

export default function OffCanvas({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: Function }) {
	return (
		<div className={`offcanvas__header ${isOpen && 'open'}`}>
			<div className='offcanvas__inner'>
				<div className='offcanvas__logo'>
					<Link className='offcanvas__logo_link' href='/'>
						<Image src='/images/logo/nav-log.png' alt='Grocee Logo' width={157} height={36} />
					</Link>
					<button className='offcanvas__close--btn' data-offcanvas onClick={() => setIsOpen(false)}>
						close
					</button>
				</div>
				<nav className='offcanvas__menu'>
					<ul className='offcanvas__menu_ul'>
						<li className='offcanvas__menu_li'>
							<Link className='offcanvas__menu_item' href='home'>
								Home
							</Link>
						</li>
						<li className='offcanvas__menu_li'>
							<Link className='offcanvas__menu_item' href='about'>
								Shop
							</Link>
						</li>
						<li className='offcanvas__menu_li'>
							<Link className='offcanvas__menu_item' href='about'>
								About
							</Link>
						</li>
						<li className='offcanvas__menu_li'>
							<Link className='offcanvas__menu_item' href='blogs'>
								Blogs
							</Link>
						</li>
						<li className='offcanvas__menu_li'>
							<Link className='offcanvas__menu_item' href='#'>
								Pages
							</Link>
							<ul className='offcanvas__sub_menu'>
								<li className='offcanvas__sub_menu_li'>
									<Link href='about' className='offcanvas__sub_menu_item'>
										About Us
									</Link>
								</li>
								<li className='offcanvas__sub_menu_li'>
									<Link href='contact' className='offcanvas__sub_menu_item'>
										Contact Us
									</Link>
								</li>
								<li className='offcanvas__sub_menu_li'>
									<Link href='/cart' className='offcanvas__sub_menu_item'>
										Cart Page
									</Link>
								</li>
								<li className='offcanvas__sub_menu_li'>
									<Link href='/portfolio' className='offcanvas__sub_menu_item'>
										Portfolio Page
									</Link>
								</li>
								<li className='offcanvas__sub_menu_li'>
									<Link href='/wishlist' className='offcanvas__sub_menu_item'>
										Wishlist Page
									</Link>
								</li>
								<li className='offcanvas__sub_menu_li'>
									<Link href='/login' className='offcanvas__sub_menu_item'>
										Login Page
									</Link>
								</li>
								<li className='offcanvas__sub_menu_li'>
									<Link href='404' className='offcanvas__sub_menu_item'>
										Error Page
									</Link>
								</li>
							</ul>
						</li>
						<li className='offcanvas__menu_li'>
							<Link className='offcanvas__menu_item' href='contact'>
								Contact
							</Link>
						</li>
					</ul>
					<div className='offcanvas__account--items'>
						<Link className='offcanvas__account--items__btn d-flex align-items-center' href='/login'>
							<span className='offcanvas__account--items__icon'>
								<svg xmlns='http://www.w3.org/2000/svg' width='20.51' height='19.443' viewBox='0 0 512 512'>
									<path d='M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' />
									<path d='M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z' fill='none' stroke='currentColor' strokeMiterlimit='10' strokeWidth='32' />
								</svg>
							</span>
							<span className='offcanvas__account--items__label'>Login / Register</span>
						</Link>
					</div>
					<div className='language__currency'>
						<ul className='d-flex align-items-center'>
							<Languages theme='light' />
							<Currencies theme='light' />
						</ul>
					</div>
				</nav>
			</div>
		</div>
	)
}
