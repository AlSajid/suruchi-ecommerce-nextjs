import Image from 'next/image'

export default function Newsletter() {
	return (
		<div className='newsletter__popup' data-animation='slideInUp'>
			<div id='boxes' className='newsletter__popup--inner'>
				<button className='newsletter__popup--close__btn' aria-label='search close button'>
					<svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 512 512'>
						<path
							fill='currentColor'
							stroke='currentColor'
							strokeLinecap='round'
							stroke-linejoin='round'
							strokeWidth='32'
							d='M368 368L144 144M368 144L144 368'></path>
					</svg>
				</button>
				<div className='box newsletter__popup--box d-flex align-items-center'>
					<div className='newsletter__popup--thumbnail'>
						<Image
							className='newsletter__popup--thumbnail__img display-block'
							src='/images/banners/newsletter-popup-thumb2.png'
							alt='newsletter-popup-thumb'
						/>
					</div>
					<div className='newsletter__popup--box__right'>
						<h2 className='newsletter__popup--title'>Join Our Newsletter</h2>
						<div className='newsletter__popup--content'>
							<label className='newsletter__popup--content--desc'>
								Enter your email address to subscribe our notification of our new post &amp;
								features by email.
							</label>
							<div className='newsletter__popup--subscribe' id='frm_subscribe'>
								<form className='newsletter__popup--subscribe__form'>
									<input
										className='newsletter__popup--subscribe__input'
										type='text'
										placeholder='Enter you email address here...'
									/>
									<button className='newsletter__popup--subscribe__btn'>Subscribe</button>
								</form>
								<div className='newsletter__popup--footer'>
									<input type='checkbox' id='newsletter__dont--show' />
									<label
										className='newsletter__popup--dontshow__again--text'
										htmlFor='newsletter__dont--show'>
										Don&apos;t show this popup again
									</label>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
