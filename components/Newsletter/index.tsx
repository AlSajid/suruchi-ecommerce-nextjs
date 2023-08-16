'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import Modal from '@mui/material/Modal'

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4
}

export default function Newsletter() {
	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	const handleNewsletterPopup = (checked: boolean) => {
		localStorage.setItem('newsletterPopup', checked + '')
	}

	useEffect(() => {
		const newsletterPopup = localStorage.getItem('newsletterPopup')
		if (!(newsletterPopup === 'true')) {
			setOpen(true)
		}
	}, [])

	return (
		<Modal open={open}>
			<div className='position-fixed w-100 d-flex justify-content-center align-items-center min-vh-100'>
				<div id='boxes' className='newsletter__popup--inner'>
					<button className='newsletter__popup--close__btn' onClick={handleClose}>
						<svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 512 512'>
							<path fill='currentColor' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='32' d='M368 368L144 144M368 144L144 368'></path>
						</svg>
					</button>
					<div className='box newsletter__popup--box d-flex align-items-center'>
						<div className='newsletter__popup--thumbnail'>
							<Image className='newsletter__popup--thumbnail__img display-block' src='/images/banners/newsletter-popup-thumb2.png' alt='newsletter-popup-thumb' width={350} height={400} />
						</div>
						<div className='newsletter__popup--box__right'>
							<h2 className='newsletter__popup--title'>Join Our Newsletter</h2>
							<div className='newsletter__popup--content'>
								<label className='newsletter__popup--content--desc'>Enter your email address to subscribe our notification of our new post &amp; features by email.</label>
								<div className='newsletter__popup--subscribe' id='frm_subscribe'>
									<form className='newsletter__popup--subscribe__form'>
										<input className='newsletter__popup--subscribe__input' type='text' placeholder='Enter you email address here...' />
										<button className='newsletter__popup--subscribe__btn'>Subscribe</button>
									</form>
									<div className='newsletter__popup--footer'>
										<input type='checkbox' id='newsletter__dont--show' onChange={event => handleNewsletterPopup(event.target.checked)} />
										<label className='newsletter__popup--dontshow__again--text' htmlFor='newsletter__dont--show'>
											Don&apos;t show this popup again
										</label>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Modal>
	)
}
