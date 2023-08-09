import Image from 'next/image'
import DownArrowIcon from '../SVGs/DownArrow'

const languages = ['english', 'France', 'Russia', 'Spanish']
const currencies = ['USD', 'CAD', 'CNY', 'EUR', 'GBP']

export default function TopBar() {
	return (
		<div className='header__topbar bg__secondary'>
			<div className='container-fluid'>
				<div className='header__topbar--inner d-flex align-items-center justify-content-between'>
					<div className='header__shipping'>
						<ul className='header__shipping--wrapper d-flex'>
							{/* Welcome Note */}
							<li className='header__shipping--text text-white'>
								Welcome to Netmark online Store
							</li>

							{/* Shipping */}
							<li className='header__shipping--text text-white d-sm-2-none'>
								<Image
									className='header__shipping--text__icon'
									src='/images/icons/bus.png'
									alt='bus-icon'
									width={19}
									height={13}
								/>
								Track Your Order
							</li>

							{/* contact */}
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
							{/* Language */}
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
									<DownArrowIcon />
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
									<DownArrowIcon />
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
