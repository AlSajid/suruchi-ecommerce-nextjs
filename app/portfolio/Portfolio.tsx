import Image from 'next/image'
import Link from 'next/link'

export default function Portfolio() {
	return (
		<section className='portfolio__section section--padding'>
			<div className='container'>
				<div className='section__heading text-center mb-40'>
					<h2 className='section__heading--maintitle'>Watch Our Portfolio</h2>
				</div>
				<div className='portfolio__section--inner'>
					<div className='row row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-2 mb--n30'>
						<div className='col mb-30'>
							<div className='portfolio__items'>
								<div className='portfolio__items--thumbnail position__relative'>
									<Link className='portfolio__items--thumbnail__link glightbox' href='/images/others/portfolio1.png' data-gallery='portfolio'>
										<Image className='portfolio__items--thumbnail__img' src='/images/others/portfolio1.png' alt='portfolio-img' width={390} height={260} />
										<span className='portfolio__view--icon'>
											<svg xmlns='http://www.w3.org/2000/svg' width='39.697' height='27.066' viewBox='0 0 39.697 27.066'>
												<path
													d='M20.849,4.5A21.341,21.341,0,0,0,1,18.033a21.322,21.322,0,0,0,39.7,0A21.341,21.341,0,0,0,20.849,4.5Zm0,22.555a9.022,9.022,0,1,1,9.022-9.022A9.025,9.025,0,0,1,20.849,27.055Zm0-14.435a5.413,5.413,0,1,0,5.413,5.413A5.406,5.406,0,0,0,20.849,12.62Z'
													transform='translate(-1 -4.5)'
													fill='currentColor'
												/>
											</svg>
										</span>
									</Link>
								</div>
							</div>
						</div>
						<div className='col mb-30'>
							<div className='portfolio__items'>
								<div className='portfolio__items--thumbnail position__relative'>
									<Link className='portfolio__items--thumbnail__link glightbox' href='/images/others/portfolio2.png' data-gallery='portfolio'>
										<Image className='portfolio__items--thumbnail__img' src='/images/others/portfolio2.png' alt='portfolio-img' width={390} height={260} />
										<span className='portfolio__view--icon'>
											<svg xmlns='http://www.w3.org/2000/svg' width='39.697' height='27.066' viewBox='0 0 39.697 27.066'>
												<path
													d='M20.849,4.5A21.341,21.341,0,0,0,1,18.033a21.322,21.322,0,0,0,39.7,0A21.341,21.341,0,0,0,20.849,4.5Zm0,22.555a9.022,9.022,0,1,1,9.022-9.022A9.025,9.025,0,0,1,20.849,27.055Zm0-14.435a5.413,5.413,0,1,0,5.413,5.413A5.406,5.406,0,0,0,20.849,12.62Z'
													transform='translate(-1 -4.5)'
													fill='currentColor'
												/>
											</svg>
										</span>
									</Link>
								</div>
							</div>
						</div>
						<div className='col mb-30'>
							<div className='portfolio__items'>
								<div className='portfolio__items--thumbnail position__relative'>
									<Link className='portfolio__items--thumbnail__link glightbox' href='/images/others/portfolio3.png' data-gallery='portfolio'>
										<Image className='portfolio__items--thumbnail__img' src='/images/others/portfolio3.png' alt='portfolio-img' width={390} height={260} />
										<span className='portfolio__view--icon'>
											<svg xmlns='http://www.w3.org/2000/svg' width='39.697' height='27.066' viewBox='0 0 39.697 27.066'>
												<path
													d='M20.849,4.5A21.341,21.341,0,0,0,1,18.033a21.322,21.322,0,0,0,39.7,0A21.341,21.341,0,0,0,20.849,4.5Zm0,22.555a9.022,9.022,0,1,1,9.022-9.022A9.025,9.025,0,0,1,20.849,27.055Zm0-14.435a5.413,5.413,0,1,0,5.413,5.413A5.406,5.406,0,0,0,20.849,12.62Z'
													transform='translate(-1 -4.5)'
													fill='currentColor'
												/>
											</svg>
										</span>
									</Link>
								</div>
							</div>
						</div>
						<div className='col mb-30'>
							<div className='portfolio__items'>
								<div className='portfolio__items--thumbnail position__relative'>
									<Link className='portfolio__items--thumbnail__link glightbox' href='/images/others/portfolio4.png' data-gallery='portfolio'>
										<Image className='portfolio__items--thumbnail__img' src='/images/others/portfolio4.png' alt='portfolio-img' width={390} height={260} />
										<span className='portfolio__view--icon'>
											<svg xmlns='http://www.w3.org/2000/svg' width='39.697' height='27.066' viewBox='0 0 39.697 27.066'>
												<path
													d='M20.849,4.5A21.341,21.341,0,0,0,1,18.033a21.322,21.322,0,0,0,39.7,0A21.341,21.341,0,0,0,20.849,4.5Zm0,22.555a9.022,9.022,0,1,1,9.022-9.022A9.025,9.025,0,0,1,20.849,27.055Zm0-14.435a5.413,5.413,0,1,0,5.413,5.413A5.406,5.406,0,0,0,20.849,12.62Z'
													transform='translate(-1 -4.5)'
													fill='currentColor'
												/>
											</svg>
										</span>
									</Link>
								</div>
							</div>
						</div>
						<div className='col mb-30'>
							<div className='portfolio__items'>
								<div className='portfolio__items--thumbnail position__relative'>
									<Link className='portfolio__items--thumbnail__link glightbox' href='/images/others/portfolio5.png' data-gallery='portfolio'>
										<Image className='portfolio__items--thumbnail__img' src='/images/others/portfolio5.png' alt='portfolio-img' width={390} height={260} />
										<span className='portfolio__view--icon'>
											<svg xmlns='http://www.w3.org/2000/svg' width='39.697' height='27.066' viewBox='0 0 39.697 27.066'>
												<path
													d='M20.849,4.5A21.341,21.341,0,0,0,1,18.033a21.322,21.322,0,0,0,39.7,0A21.341,21.341,0,0,0,20.849,4.5Zm0,22.555a9.022,9.022,0,1,1,9.022-9.022A9.025,9.025,0,0,1,20.849,27.055Zm0-14.435a5.413,5.413,0,1,0,5.413,5.413A5.406,5.406,0,0,0,20.849,12.62Z'
													transform='translate(-1 -4.5)'
													fill='currentColor'
												/>
											</svg>
										</span>
									</Link>
								</div>
							</div>
						</div>
						<div className='col mb-30'>
							<div className='portfolio__items'>
								<div className='portfolio__items--thumbnail position__relative'>
									<Link className='portfolio__items--thumbnail__link glightbox' href='/images/others/portfolio1.png' data-gallery='portfolio'>
										<Image className='portfolio__items--thumbnail__img' src='/images/others/portfolio1.png' alt='portfolio-img' width={390} height={260} />
										<span className='portfolio__view--icon'>
											<svg xmlns='http://www.w3.org/2000/svg' width='39.697' height='27.066' viewBox='0 0 39.697 27.066'>
												<path
													d='M20.849,4.5A21.341,21.341,0,0,0,1,18.033a21.322,21.322,0,0,0,39.7,0A21.341,21.341,0,0,0,20.849,4.5Zm0,22.555a9.022,9.022,0,1,1,9.022-9.022A9.025,9.025,0,0,1,20.849,27.055Zm0-14.435a5.413,5.413,0,1,0,5.413,5.413A5.406,5.406,0,0,0,20.849,12.62Z'
													transform='translate(-1 -4.5)'
													fill='currentColor'
												/>
											</svg>
										</span>
									</Link>
								</div>
							</div>
						</div>
						<div className='col mb-30'>
							<div className='portfolio__items'>
								<div className='portfolio__items--thumbnail position__relative'>
									<Link className='portfolio__items--thumbnail__link glightbox' href='/images/others/portfolio7.png' data-gallery='portfolio'>
										<Image className='portfolio__items--thumbnail__img' src='/images/others/portfolio7.png' alt='portfolio-img' width={390} height={260} />
										<span className='portfolio__view--icon'>
											<svg xmlns='http://www.w3.org/2000/svg' width='39.697' height='27.066' viewBox='0 0 39.697 27.066'>
												<path
													d='M20.849,4.5A21.341,21.341,0,0,0,1,18.033a21.322,21.322,0,0,0,39.7,0A21.341,21.341,0,0,0,20.849,4.5Zm0,22.555a9.022,9.022,0,1,1,9.022-9.022A9.025,9.025,0,0,1,20.849,27.055Zm0-14.435a5.413,5.413,0,1,0,5.413,5.413A5.406,5.406,0,0,0,20.849,12.62Z'
													transform='translate(-1 -4.5)'
													fill='currentColor'
												/>
											</svg>
										</span>
									</Link>
								</div>
							</div>
						</div>
						<div className='col mb-30'>
							<div className='portfolio__items'>
								<div className='portfolio__items--thumbnail position__relative'>
									<Link className='portfolio__items--thumbnail__link glightbox' href='/images/others/portfolio8.png' data-gallery='portfolio'>
										<Image className='portfolio__items--thumbnail__img' src='/images/others/portfolio8.png' alt='portfolio-img' width={390} height={260} />
										<span className='portfolio__view--icon'>
											<svg xmlns='http://www.w3.org/2000/svg' width='39.697' height='27.066' viewBox='0 0 39.697 27.066'>
												<path
													d='M20.849,4.5A21.341,21.341,0,0,0,1,18.033a21.322,21.322,0,0,0,39.7,0A21.341,21.341,0,0,0,20.849,4.5Zm0,22.555a9.022,9.022,0,1,1,9.022-9.022A9.025,9.025,0,0,1,20.849,27.055Zm0-14.435a5.413,5.413,0,1,0,5.413,5.413A5.406,5.406,0,0,0,20.849,12.62Z'
													transform='translate(-1 -4.5)'
													fill='currentColor'
												/>
											</svg>
										</span>
									</Link>
								</div>
							</div>
						</div>
						<div className='col mb-30'>
							<div className='portfolio__items'>
								<div className='portfolio__items--thumbnail position__relative'>
									<Link className='portfolio__items--thumbnail__link glightbox' href='/images/others/portfolio9.png' data-gallery='portfolio'>
										<Image className='portfolio__items--thumbnail__img' src='/images/others/portfolio9.png' alt='portfolio-img' width={390} height={260} />
										<span className='portfolio__view--icon'>
											<svg xmlns='http://www.w3.org/2000/svg' width='39.697' height='27.066' viewBox='0 0 39.697 27.066'>
												<path
													d='M20.849,4.5A21.341,21.341,0,0,0,1,18.033a21.322,21.322,0,0,0,39.7,0A21.341,21.341,0,0,0,20.849,4.5Zm0,22.555a9.022,9.022,0,1,1,9.022-9.022A9.025,9.025,0,0,1,20.849,27.055Zm0-14.435a5.413,5.413,0,1,0,5.413,5.413A5.406,5.406,0,0,0,20.849,12.62Z'
													transform='translate(-1 -4.5)'
													fill='currentColor'
												/>
											</svg>
										</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
