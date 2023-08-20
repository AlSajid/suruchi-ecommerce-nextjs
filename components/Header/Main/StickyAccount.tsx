import SearchIcon from '@/components/SVGs/Search'
import Link from 'next/link'

export default function StickyAccount({ setIsCartOpen }: { setIsCartOpen: Function }) {
	return (
		<div className='header__account header__account2 header__sticky--block'>
			<ul className='d-flex'>
				<li className='header__account--items header__account2--items  header__account--search__items d-none d-lg-block'>
					<Link className='header__account--btn search__open--btn' href='#' data-offcanvas>
						<SearchIcon />
						<span className='visually-hidden'>Search</span>
					</Link>
				</li>
				<li className='header__account--items header__account2--items'>
					<Link className='header__account--btn' href='my-account'>
						<svg xmlns='http://www.w3.org/2000/svg' width='26.51' height='23.443' viewBox='0 0 512 512'>
							<path d='M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' />
							<path d='M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z' fill='none' stroke='currentColor' strokeMiterlimit='10' strokeWidth='32' />
						</svg>
						<span className='visually-hidden'>My Account</span>
					</Link>
				</li>
				<li className='header__account--items header__account2--items d-none d-lg-block'>
					<Link className='header__account--btn' href='/wishlist'>
						<svg xmlns='http://www.w3.org/2000/svg' width='28.51' height='23.443' viewBox='0 0 512 512'>
							<path
								d='M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z'
								fill='none'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='32'></path>
						</svg>
						<span className='items__count  wishlist style2'>02</span>
					</Link>
				</li>
				<li className='header__account--items header__account2--items' onClick={() => setIsCartOpen(true)}>
					<span className='header__account--btn ' data-offcanvas>
						<svg xmlns='http://www.w3.org/2000/svg' width='26.51' height='23.443' viewBox='0 0 14.706 13.534'>
							<g transform='translate(0 0)'>
								<g>
									<path
										data-name='Path 16787'
										d='M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z'
										transform='translate(0 -463.248)'
										fill='currentColor'
									/>
									<path data-name='Path 16788' d='M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,6.793,478.352Z' transform='translate(-1.191 -466.622)' fill='currentColor' />
									<path data-name='Path 16789' d='M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,14.566,478.352Z' transform='translate(-2.875 -466.622)' fill='currentColor' />
								</g>
							</g>
						</svg>
						<span className='items__count style2'>02</span>
					</span>
				</li>
			</ul>
		</div>
	)
}
