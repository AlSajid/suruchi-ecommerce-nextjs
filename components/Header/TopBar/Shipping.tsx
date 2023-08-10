import Image from 'next/image'

export default function Shipping() {
	return (
		<div className='header__shipping'>
			<ul className='header__shipping--wrapper d-flex'>
				{/* Welcome Note */}
				<li className='header__shipping--text text-white'>Welcome to Netmark online Store</li>

				{/* Shipping */}
				<li className='header__shipping--text text-white d-sm-2-none'>
					<Image className='header__shipping--text__icon' src='/images/icons/bus.png' alt='bus-icon' width={19} height={13} />
					Track Your Order
				</li>

				{/* contact */}
				<li className='header__shipping--text text-white d-sm-2-none'>
					<Image className='header__shipping--text__icon' src='/images/icons/email.png' alt='email-icon' width={15} height={11} />
					<a className='header__shipping--text__link' href='mailto:demo@gmail.com'>
						demo@gmail.com
					</a>
				</li>
			</ul>
		</div>
	)
}
