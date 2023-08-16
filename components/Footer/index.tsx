import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
	return (
		<footer className='footer__section bg__black'>
			<div className='container-fluid'>
				<div className='main__footer d-flex justify-content-between'>
					<div className='footer__widget footer__widget--width'>
						<h2 className='footer__widget--title text-ofwhite h3'>
							About Us
							<button className='footer__widget--button' aria-label='footer widget button'>
								<svg className='footer__widget--title__arrowdown--icon' xmlns='http://www.w3.org/2000/svg' width='12.355' height='8.394' viewBox='0 0 10.355 6.394'>
									<path d='M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z' transform='translate(-6 -8.59)' fill='currentColor'></path>
								</svg>
							</button>
						</h2>
						<div className='footer__widget--inner'>
							<p className='footer__widget--desc text-ofwhite mb-20'>
								Lorem ipsum dolor sit amet, consectetur adipisici ti elit <br /> seddo eiusmod tempor incididunt utlabore et dolore <br /> magna aliqua enim ad minim veniam quisnostrud <br /> exercitation ullamco
							</p>
							<div className='footer__social'>
								<h3 className='social__title text-ofwhite h4 mb-15'>Follow Us</h3>
								<ul className='social__shear d-flex'>
									<li className='social__shear--list'>
										<Link className='social__shear--list__icon' target='_blank' href='https://www.facebook.com'>
											<svg xmlns='http://www.w3.org/2000/svg' width='7.667' height='16.524' viewBox='0 0 7.667 16.524'>
												<path
													data-name='Path 237'
													d='M967.495,353.678h-2.3v8.253h-3.437v-8.253H960.13V350.77h1.624v-1.888a4.087,4.087,0,0,1,.264-1.492,2.9,2.9,0,0,1,1.039-1.379,3.626,3.626,0,0,1,2.153-.6l2.549.019v2.833h-1.851a.732.732,0,0,0-.472.151.8.8,0,0,0-.246.642v1.719H967.8Z'
													transform='translate(-960.13 -345.407)'
													fill='currentColor'
												/>
											</svg>
											<span className='visually-hidden'>Facebook</span>
										</Link>
									</li>
									<li className='social__shear--list'>
										<Link className='social__shear--list__icon' target='_blank' href='https://twitter.com'>
											<svg xmlns='http://www.w3.org/2000/svg' width='16.489' height='13.384' viewBox='0 0 16.489 13.384'>
												<path
													data-name='Path 303'
													d='M966.025,1144.2v.433a9.783,9.783,0,0,1-.621,3.388,10.1,10.1,0,0,1-1.845,3.087,9.153,9.153,0,0,1-3.012,2.259,9.825,9.825,0,0,1-4.122.866,9.632,9.632,0,0,1-2.748-.4,9.346,9.346,0,0,1-2.447-1.11q.4.038.809.038a6.723,6.723,0,0,0,2.24-.376,7.022,7.022,0,0,0,1.958-1.054,3.379,3.379,0,0,1-1.958-.687,3.259,3.259,0,0,1-1.186-1.666,3.364,3.364,0,0,0,.621.056,3.488,3.488,0,0,0,.885-.113,3.267,3.267,0,0,1-1.374-.631,3.356,3.356,0,0,1-.969-1.186,3.524,3.524,0,0,1-.367-1.5v-.057a3.172,3.172,0,0,0,1.544.433,3.407,3.407,0,0,1-1.1-1.214,3.308,3.308,0,0,1-.4-1.609,3.362,3.362,0,0,1,.452-1.694,9.652,9.652,0,0,0,6.964,3.538,3.911,3.911,0,0,1-.075-.772,3.293,3.293,0,0,1,.452-1.694,3.409,3.409,0,0,1,1.233-1.233,3.257,3.257,0,0,1,1.685-.461,3.351,3.351,0,0,1,2.466,1.073,6.572,6.572,0,0,0,2.146-.828,3.272,3.272,0,0,1-.574,1.083,3.477,3.477,0,0,1-.913.8,6.869,6.869,0,0,0,1.958-.546A7.074,7.074,0,0,1,966.025,1144.2Z'
													transform='translate(-951.23 -1140.849)'
													fill='currentColor'
												/>
											</svg>
											<span className='visually-hidden'>Twitter</span>
										</Link>
									</li>
									<li className='social__shear--list'>
										<Link className='social__shear--list__icon' target='_blank' href='https://www.instagram.com'>
											<svg xmlns='http://www.w3.org/2000/svg' width='16.497' height='16.492' viewBox='0 0 19.497 19.492'>
												<path
													data-name='Icon awesome-instagram'
													d='M9.747,6.24a5,5,0,1,0,5,5A4.99,4.99,0,0,0,9.747,6.24Zm0,8.247A3.249,3.249,0,1,1,13,11.238a3.255,3.255,0,0,1-3.249,3.249Zm6.368-8.451A1.166,1.166,0,1,1,14.949,4.87,1.163,1.163,0,0,1,16.115,6.036Zm3.31,1.183A5.769,5.769,0,0,0,17.85,3.135,5.807,5.807,0,0,0,13.766,1.56c-1.609-.091-6.433-.091-8.042,0A5.8,5.8,0,0,0,1.64,3.13,5.788,5.788,0,0,0,.065,7.215c-.091,1.609-.091,6.433,0,8.042A5.769,5.769,0,0,0,1.64,19.341a5.814,5.814,0,0,0,4.084,1.575c1.609.091,6.433.091,8.042,0a5.769,5.769,0,0,0,4.084-1.575,5.807,5.807,0,0,0,1.575-4.084c.091-1.609.091-6.429,0-8.038Zm-2.079,9.765a3.289,3.289,0,0,1-1.853,1.853c-1.283.509-4.328.391-5.746.391S5.28,19.341,4,18.837a3.289,3.289,0,0,1-1.853-1.853c-.509-1.283-.391-4.328-.391-5.746s-.113-4.467.391-5.746A3.289,3.289,0,0,1,4,3.639c1.283-.509,4.328-.391,5.746-.391s4.467-.113,5.746.391a3.289,3.289,0,0,1,1.853,1.853c.509,1.283.391,4.328.391,5.746S17.855,15.705,17.346,16.984Z'
													transform='translate(0.004 -1.492)'
													fill='currentColor'
												/>
											</svg>
											<span className='visually-hidden'>Instagram</span>
										</Link>
									</li>
									<li className='social__shear--list'>
										<Link className='social__shear--list__icon' target='_blank' href='https://www.youtube.com'>
											<svg xmlns='http://www.w3.org/2000/svg' width='16.49' height='11.582' viewBox='0 0 16.49 11.582'>
												<path
													data-name='Path 321'
													d='M967.759,1365.592q0,1.377-.019,1.717-.076,1.114-.151,1.622a3.981,3.981,0,0,1-.245.925,1.847,1.847,0,0,1-.453.717,2.171,2.171,0,0,1-1.151.6q-3.585.265-7.641.189-2.377-.038-3.387-.085a11.337,11.337,0,0,1-1.5-.142,2.206,2.206,0,0,1-1.113-.585,2.562,2.562,0,0,1-.528-1.037,3.523,3.523,0,0,1-.141-.585c-.032-.2-.06-.5-.085-.906a38.894,38.894,0,0,1,0-4.867l.113-.925a4.382,4.382,0,0,1,.208-.906,2.069,2.069,0,0,1,.491-.755,2.409,2.409,0,0,1,1.113-.566,19.2,19.2,0,0,1,2.292-.151q1.82-.056,3.953-.056t3.952.066q1.821.067,2.311.142a2.3,2.3,0,0,1,.726.283,1.865,1.865,0,0,1,.557.49,3.425,3.425,0,0,1,.434,1.019,5.72,5.72,0,0,1,.189,1.075q0,.095.057,1C967.752,1364.1,967.759,1364.677,967.759,1365.592Zm-7.6.925q1.49-.754,2.113-1.094l-4.434-2.339v4.66Q958.609,1367.311,960.156,1366.517Z'
													transform='translate(-951.269 -1359.8)'
													fill='currentColor'
												/>
											</svg>
											<span className='visually-hidden'>Youtube</span>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='footer__widget--menu__wrapper d-flex footer__widget--width'>
						<div className='footer__widget'>
							<h2 className='footer__widget--title text-ofwhite h3'>
								My Account
								<button className='footer__widget--button' aria-label='footer widget button'>
									<svg className='footer__widget--title__arrowdown--icon' xmlns='http://www.w3.org/2000/svg' width='12.355' height='8.394' viewBox='0 0 10.355 6.394'>
										<path d='M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z' transform='translate(-6 -8.59)' fill='currentColor'></path>
									</svg>
								</button>
							</h2>
							<ul className='footer__widget--menu footer__widget--inner'>
								<li className='footer__widget--menu__list'>
									<Link className='footer__widget--menu__text' href='my-account'>
										My Account
									</Link>
								</li>
								<li className='footer__widget--menu__list'>
									<Link className='footer__widget--menu__text' href='/cart'>
										Shopping Cart
									</Link>
								</li>
								<li className='footer__widget--menu__list'>
									<Link className='footer__widget--menu__text' href='/login'>
										Login
									</Link>
								</li>
								<li className='footer__widget--menu__list'>
									<Link className='footer__widget--menu__text' href='/login'>
										Register
									</Link>
								</li>
								<li className='footer__widget--menu__list'>
									<Link className='footer__widget--menu__text' href='checkout'>
										Checkout
									</Link>
								</li>
								<li className='footer__widget--menu__list'>
									<Link className='footer__widget--menu__text' href='/wishlist'>
										Wishlist
									</Link>
								</li>
							</ul>
						</div>
						<div className='footer__widget'>
							<h2 className='footer__widget--title text-ofwhite h3'>
								Categories
								<button className='footer__widget--button' aria-label='footer widget button'>
									<svg className='footer__widget--title__arrowdown--icon' xmlns='http://www.w3.org/2000/svg' width='12.355' height='8.394' viewBox='0 0 10.355 6.394'>
										<path d='M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z' transform='translate(-6 -8.59)' fill='currentColor'></path>
									</svg>
								</button>
							</h2>
							<ul className='footer__widget--menu footer__widget--inner'>
								<li className='footer__widget--menu__list'>
									<Link className='footer__widget--menu__text' href='about'>
										About Us
									</Link>
								</li>
								<li className='footer__widget--menu__list'>
									<Link className='footer__widget--menu__text' href='contact'>
										Contact Us
									</Link>
								</li>
								<li className='footer__widget--menu__list'>
									<Link className='footer__widget--menu__text' href='/portfolio'>
										Portfolio
									</Link>
								</li>
								<li className='footer__widget--menu__list'>
									<Link className='footer__widget--menu__text' href='/privacy-policy'>
										Privacy Policy
									</Link>
								</li>
								<li className='footer__widget--menu__list'>
									<Link className='footer__widget--menu__text' href='compare'>
										Compare
									</Link>
								</li>
								<li className='footer__widget--menu__list'>
									<Link className='footer__widget--menu__text' href='faq'>
										Frequently
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className='footer__widget footer__widget--width'>
						<h2 className='footer__widget--title text-ofwhite h3'>
							Instagram
							<button className='footer__widget--button' aria-label='footer widget button'>
								<svg className='footer__widget--title__arrowdown--icon' xmlns='http://www.w3.org/2000/svg' width='12.355' height='8.394' viewBox='0 0 10.355 6.394'>
									<path d='M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z' transform='translate(-6 -8.59)' fill='currentColor'></path>
								</svg>
							</button>
						</h2>
						<div className='footer__instagram footer__widget--inner'>
							<div className='footer__instagram--list d-flex'>
								<div className='instagram__thumbnail'>
									<Link className='instagram__thumbnail--img' target='_blank' href='https://www.instagram.com/p/CZkF3TLBTT7'>
										<Image src='/images/others/instagram1.webp' alt='instagram' width={256} height={312} />
									</Link>
								</div>
								<div className='instagram__thumbnail'>
									<Link className='instagram__thumbnail--img' target='_blank' href='https://www.instagram.com/p/CZkF60sBxhN'>
										<Image src='/images/others/instagram2.webp' alt='instagram' width={256} height={312} />
									</Link>
								</div>
								<div className='instagram__thumbnail'>
									<Link className='instagram__thumbnail--img' target='_blank' href='https://www.instagram.com/p/CZkF90ZB6HG'>
										<Image src='/images/others/instagram3.webp' alt='instagram' width={256} height={312} />
									</Link>
								</div>
							</div>
							<div className='footer__instagram--list d-flex'>
								<div className='instagram__thumbnail'>
									<Link className='instagram__thumbnail--img' target='_blank' href='https://www.instagram.com/p/CZkGAe6BQeu'>
										<Image src='/images/others/instagram4.webp' alt='instagram' width={256} height={312} />
									</Link>
								</div>
								<div className='instagram__thumbnail'>
									<Link className='instagram__thumbnail--img' target='_blank' href='https://www.instagram.com/p/CZkGCWcBbv9'>
										<Image src='/images/others/instagram5.webp' alt='instagram' width={256} height={312} />
									</Link>
								</div>
								<div className='instagram__thumbnail'>
									<Link className='instagram__thumbnail--img' target='_blank' href='https://www.instagram.com/p/CZkGFDMhoid'>
										<Image src='/images/others/instagram6.webp' alt='instagram' width={256} height={312} />
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className='footer__widget footer__widget--width'>
						<h2 className='footer__widget--title text-ofwhite h3'>
							Newsletter
							<button className='footer__widget--button' aria-label='footer widget button'>
								<svg className='footer__widget--title__arrowdown--icon' xmlns='http://www.w3.org/2000/svg' width='12.355' height='8.394' viewBox='0 0 10.355 6.394'>
									<path d='M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z' transform='translate(-6 -8.59)' fill='currentColor'></path>
								</svg>
							</button>
						</h2>
						<div className='footer__widget--inner'>
							<p className='footer__widget--desc text-ofwhite m-0'>
								Fill their seed open meat. Sea you <br /> great Saw image stl
							</p>
							<div className='newsletter__subscribe'>
								<form className='newsletter__subscribe--form' action='#'>
									<label>
										<input className='newsletter__subscribe--input' placeholder='Email Address' type='email' />
									</label>
									<button className='newsletter__subscribe--button' type='submit'>
										Subscribe
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div className='footer__bottom d-flex justify-content-between align-items-center'>
					<p className='copyright__content text-ofwhite m-0'>
						Copyright © 2022
						<Link className='copyright__content--link' href='/'>
							Suruchi
						</Link>
						. All Rights Reserved.Design By Suruchi
					</p>
					<div className='footer__payment text-right'>
						<Image className='display-block' src='/images/others/payment-visa-card.png' alt='visa-card' width={410} height={35} />
					</div>
				</div>
			</div>
		</footer>
	)
}
