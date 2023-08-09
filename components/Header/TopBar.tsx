import Image from 'next/image'

export default function TopBar() {
	return (
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
	)
}
