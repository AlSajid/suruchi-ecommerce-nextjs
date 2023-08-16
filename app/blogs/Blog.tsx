import Image from 'next/image'
import Link from 'next/link'

export default function Blog() {
	return (
		<section className='blog__section section--padding'>
			<div className='container'>
				<div className='section__heading text-center mb-50'>
					<h2 className='section__heading--maintitle'>From The Blog</h2>
				</div>

				<div className='blog__section--inner'>
					<div className='row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-sm-u-2 row-cols-1 mb--n30'>
						<div className='col mb-30'>
							<div className='blog__items'>
								<div className='blog__thumbnail'>
									<Link className='blog__thumbnail--link' href='blog-details'>
										<Image className='blog__thumbnail--img' src='/images/blogs/blog1.png' alt='blog-img' width={360} height={313} />
									</Link>
								</div>
								<div className='blog__content'>
									<span className='blog__content--meta'>February 03, 2022</span>
									<h3 className='blog__content--title'>
										<Link href='blog-details'>Fashion Trends In 2021 Styles, Colors, Accessories</Link>
									</h3>
									<Link className='blog__content--btn primary__btn' href='blog-details'>
										Read more
									</Link>
								</div>
							</div>
						</div>
						<div className='col mb-30'>
							<div className='blog__items'>
								<div className='blog__thumbnail'>
									<Link className='blog__thumbnail--link' href='blog-details'>
										<Image className='blog__thumbnail--img' src='/images/blogs/blog2.png' alt='blog-img' width={360} height={313} />
									</Link>
								</div>
								<div className='blog__content'>
									<span className='blog__content--meta'>February 03, 2022</span>
									<h3 className='blog__content--title'>
										<Link href='blog-details'>Meet the Woman Behind Cool Ethical Label Reformation </Link>
									</h3>
									<Link className='blog__content--btn primary__btn' href='blog-details'>
										Read more
									</Link>
								</div>
							</div>
						</div>
						<div className='col mb-30'>
							<div className='blog__items'>
								<div className='blog__thumbnail'>
									<Link className='blog__thumbnail--link' href='blog-details'>
										<Image className='blog__thumbnail--img' src='/images/blogs/blog3.png' alt='blog-img' width={360} height={313} />
									</Link>
								</div>
								<div className='blog__content'>
									<span className='blog__content--meta'>February 03, 2022</span>
									<h3 className='blog__content--title'>
										<Link href='blog-details'>Lauryn Hill Could Make Tulle Skirt and Cowboy</Link>
									</h3>
									<Link className='blog__content--btn primary__btn' href='blog-details'>
										Read more
									</Link>
								</div>
							</div>
						</div>
						<div className='col mb-30'>
							<div className='blog__items'>
								<div className='blog__thumbnail'>
									<Link className='blog__thumbnail--link' href='blog-details'>
										<Image className='blog__thumbnail--img' src='/images/blogs/blog4.png' alt='blog-img' width={360} height={313} />
									</Link>
								</div>
								<div className='blog__content'>
									<span className='blog__content--meta'>February 03, 2022</span>
									<h3 className='blog__content--title'>
										<Link href='blog-details'>Consectetur adipisicing. magnam commodi doloribus.</Link>
									</h3>
									<Link className='blog__content--btn primary__btn' href='blog-details'>
										Read more
									</Link>
								</div>
							</div>
						</div>
						<div className='col mb-30'>
							<div className='blog__items'>
								<div className='blog__thumbnail'>
									<Link className='blog__thumbnail--link' href='blog-details'>
										<Image className='blog__thumbnail--img' src='/images/blogs/blog1.png' alt='blog-img' width={360} height={313} />
									</Link>
								</div>
								<div className='blog__content'>
									<span className='blog__content--meta'>February 03, 2022</span>
									<h3 className='blog__content--title'>
										<Link href='blog-details'>Lorem ipsum, dolor sit amet consectetur are elit.</Link>
									</h3>
									<Link className='blog__content--btn primary__btn' href='blog-details'>
										Read more
									</Link>
								</div>
							</div>
						</div>
						<div className='col mb-30'>
							<div className='blog__items'>
								<div className='blog__thumbnail'>
									<Link className='blog__thumbnail--link' href='blog-details'>
										<Image className='blog__thumbnail--img' src='/images/blogs/blog2.png' alt='blog-img' width={360} height={313} />
									</Link>
								</div>
								<div className='blog__content'>
									<span className='blog__content--meta'>February 03, 2022</span>
									<h3 className='blog__content--title'>
										<Link href='blog-details'>Meet the Woman Behind Cool Ethical Label Reformation </Link>
									</h3>
									<Link className='blog__content--btn primary__btn' href='blog-details'>
										Read more
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className='pagination__area bg__gray--color'>
						<nav className='pagination justify-content-center'>
							<ul className='pagination__wrapper d-flex align-items-center justify-content-center'>
								<li className='pagination__list'>
									<Link href='blog' className='pagination__item--arrow  link '>
										<svg xmlns='http://www.w3.org/2000/svg' width='22.51' height='20.443' viewBox='0 0 512 512'>
											<path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' />
										</svg>
										<span className='visually-hidden'>pagination arrow</span>
									</Link>
								</li>
								<li className='pagination__list'>
									<span className='pagination__item pagination__item--current'>1</span>
								</li>
								<li className='pagination__list'>
									<Link href='blog' className='pagination__item link'>
										2
									</Link>
								</li>
								<li className='pagination__list'>
									<Link href='blog' className='pagination__item link'>
										3
									</Link>
								</li>
								<li className='pagination__list'>
									<Link href='blog' className='pagination__item link'>
										4
									</Link>
								</li>
								<li className='pagination__list'>
									<Link href='blog' className='pagination__item--arrow  link '>
										<svg xmlns='http://www.w3.org/2000/svg' width='22.51' height='20.443' viewBox='0 0 512 512'>
											<path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M268 112l144 144-144 144M392 256H100' />
										</svg>
										<span className='visually-hidden'>pagination arrow</span>
									</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</section>
	)
}
