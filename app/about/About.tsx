import Image from 'next/image'

export default function About() {
	return (
		<section className='about__section section--padding mb-95'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-6'>
						<div className='about__thumb d-flex'>
							<div className='about__thumb--items'>
								<Image className='about__thumb--img border-radius-5 display-block' src='/images/others/about-thumb-list1.png' alt='about-thumb' width={290} height={450} />
							</div>
							<div className='about__thumb--items position__relative'>
								<Image className='about__thumb--img border-radius-5 display-block' src='/images/others/about-thumb-list2.png' alt='about-thumb' width={290} height={450} />
								<div className='banner__bideo--play about__thumb--play'>
									<a className='banner__bideo--play__icon about__thumb--play__icon glightbox' href='https://vimeo.com/115041822' data-gallery='video'>
										<svg id='play' xmlns='http://www.w3.org/2000/svg' width='40.302' height='40.302' viewBox='0 0 46.302 46.302'>
											<g id='Group_193' data-name='Group 193' transform='translate(0 0)'>
												<path id='Path_116' data-name='Path 116' d='M39.521,6.781a23.151,23.151,0,0,0-32.74,32.74,23.151,23.151,0,0,0,32.74-32.74ZM23.151,44.457A21.306,21.306,0,1,1,44.457,23.151,21.33,21.33,0,0,1,23.151,44.457Z' fill='currentColor' />
												<g id='Group_188' data-name='Group 188' transform='translate(15.588 11.19)'>
													<g id='Group_187' data-name='Group 187'>
														<path
															id='Path_117'
															data-name='Path 117'
															d='M190.3,133.213l-13.256-8.964a3,3,0,0,0-4.674,2.482v17.929a2.994,2.994,0,0,0,4.674,2.481l13.256-8.964a3,3,0,0,0,0-4.963Zm-1.033,3.435-13.256,8.964a1.151,1.151,0,0,1-1.8-.953V126.73a1.134,1.134,0,0,1,.611-1.017,1.134,1.134,0,0,1,1.185.063l13.256,8.964a1.151,1.151,0,0,1,0,1.907Z'
															transform='translate(-172.366 -123.734)'
															fill='currentColor'
														/>
													</g>
												</g>
												<g id='Group_190' data-name='Group 190' transform='translate(28.593 5.401)'>
													<g id='Group_189' data-name='Group 189'>
														<path id='Path_118' data-name='Path 118' d='M328.31,70.492a18.965,18.965,0,0,0-10.886-10.708.922.922,0,1,0-.653,1.725,17.117,17.117,0,0,1,9.825,9.664.922.922,0,1,0,1.714-.682Z' transform='translate(-316.174 -59.724)' fill='currentColor' />
													</g>
												</g>
												<g id='Group_192' data-name='Group 192' transform='translate(22.228 4.243)'>
													<g id='Group_191' data-name='Group 191'>
														<path id='Path_119' data-name='Path 119' d='M249.922,47.187a19.08,19.08,0,0,0-3.2-.27.922.922,0,0,0,0,1.845,17.245,17.245,0,0,1,2.889.243.922.922,0,1,0,.31-1.818Z' transform='translate(-245.801 -46.917)' fill='currentColor' />
													</g>
												</g>
											</g>
										</svg>
										<span className='visually-hidden'>Video Play</span>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='col-lg-6'>
						<div className='about__content'>
							<span className='about__content--subtitle text__secondary mb-20'> Why Choose us</span>
							<h2 className='about__content--maintitle mb-25'>We do not buy from the open market & traders.</h2>
							<p className='about__content--desc mb-20'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit illo, est repellendus are quia voluptate neque reiciendis ea placeat labore maiores cum, hic ducimus ad a dolorem soluta consectetur adipisci. Perspiciatis quas ab quibusdam is.
							</p>
							<p className='about__content--desc mb-25'>Itaque accusantium eveniet a laboriosam dolorem? Magni suscipit est corrupti explicabo non perspiciatis, excepturi ut asperiores assumenda rerum? Provident ab corrupti sequi, voluptates repudiandae eius odit aut.</p>
							<div className='about__author position__relative d-flex align-items-center'>
								<div className='about__author--left'>
									<h4 className='about__author--name'>Bruce Sutton</h4>
									<span className='about__author--rank'>Spa Manager</span>
								</div>
								<Image className='about__author--signature display-block' src='/images/icons/signature.png' alt='signature' width={85} height={45} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
