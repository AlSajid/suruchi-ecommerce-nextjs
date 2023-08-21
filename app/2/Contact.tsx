export default function Contact() {
	return (
		<section className='contact__section section--padding color-scheme-2'>
			<div className='container-fluid'>
				<div className='section__heading text-center mb-50'>
					<h2 className='section__heading--maintitle style2'>Get in touch</h2>
				</div>
				<div className='contact__section--inner'>
					<div className='row'>
						<div className='col-lg-5 col-md-5'>
							<div className='home__contact--info'>
								<div className='home__contact--info__items d-flex'>
									<div className='home__contact--info__icon'>
										<svg xmlns='http://www.w3.org/2000/svg' width='31.57' height='31.13' viewBox='0 0 31.57 31.13'>
											<path id='ic_account_balance_24px' d='M5.323,14.341V24.718h4.985V14.341Zm9.969,0V24.718h4.985V14.341ZM2,32.13H33.57V27.683H2ZM25.262,14.341V24.718h4.985V14.341ZM17.785,1,2,8.412v2.965H33.57V8.412Z' transform='translate(-2 -1)' fill='currentColor'></path>
										</svg>
									</div>
									<div className='contact__info--content'>
										<h3 className='contact__info--content__title mb-5'>Address</h3>
										<p className='contact__info--content__desc'> 123 Stree New York City , United States Of America NY 750065.</p>
									</div>
								</div>
								<div className='home__contact--info__items d-flex'>
									<div className='home__contact--info__icon'>
										<svg xmlns='http://www.w3.org/2000/svg' width='31.568' height='31.128' viewBox='0 0 31.568 31.128'>
											<path
												id='ic_phone_forwarded_24px'
												d='M26.676,16.564l7.892-7.782L26.676,1V5.669H20.362v6.226h6.314Zm3.157,7a18.162,18.162,0,0,1-5.635-.887,1.627,1.627,0,0,0-1.61.374l-3.472,3.424a23.585,23.585,0,0,1-10.4-10.257l3.472-3.44a1.48,1.48,0,0,0,.395-1.556,17.457,17.457,0,0,1-.9-5.556A1.572,1.572,0,0,0,10.1,4.113H4.578A1.572,1.572,0,0,0,3,5.669,26.645,26.645,0,0,0,29.832,32.128a1.572,1.572,0,0,0,1.578-1.556V25.124A1.572,1.572,0,0,0,29.832,23.568Z'
												transform='translate(-3 -1)'
												fill='currentColor'></path>
										</svg>
									</div>
									<div className='contact__info--content'>
										<h3 className='contact__info--content__title mb-5'>Phone</h3>
										<p className='contact__info--content__desc'>
											<a href='tel:+01234-567890'>+01234-567890</a> <br /> <a href='tel:++01234-5688765'>+01234-5688765</a>{' '}
										</p>
									</div>
								</div>
								<div className='home__contact--info__items d-flex'>
									<div className='home__contact--info__icon'>
										<svg xmlns='http://www.w3.org/2000/svg' width='31.57' height='31.13' viewBox='0 0 31.57 31.13'>
											<path
												id='ic_email_24px'
												d='M30.413,4H5.157C3.421,4,2.016,5.751,2.016,7.891L2,31.239c0,2.14,1.421,3.891,3.157,3.891H30.413c1.736,0,3.157-1.751,3.157-3.891V7.891C33.57,5.751,32.149,4,30.413,4Zm0,7.783L17.785,21.511,5.157,11.783V7.891l12.628,9.728L30.413,7.891Z'
												transform='translate(-2 -4)'
												fill='currentColor'></path>
										</svg>
									</div>
									<div className='contact__info--content'>
										<h3 className='contact__info--content__title mb-5'>E-mail</h3>
										<p className='contact__info--content__desc'>
											{' '}
											<a href='mailto:info@example.com'>info@example.com</a> <br /> <a href='mailto:info@example.com'>info@example.com</a>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className='col-lg-7 col-md-7'>
							<div className='home__contact--map'>
								<iframe
									src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9938.68117036573!2d-0.132237!3d51.482566!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x790260718555a20c!2sU.S.%20Embassy%2C%20London!5e0!3m2!1sen!2sbd!4v1640062764401!5m2!1sen!2sbd'
									width='600'
									height='380'
									style={{ border: '0' }}
									loading='lazy'></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
