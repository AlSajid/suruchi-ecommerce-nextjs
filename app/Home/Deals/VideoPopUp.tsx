'use client'

import PlayIcon from '@/components/SVGs/Play'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { useState } from 'react'

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '90%',
	p: 4
}

export default function VideoPopUp() {
	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	return (
		<>
			<div className='banner__bideo--play ' onClick={handleOpen}>
				<span className='banner__bideo--play__icon about__thumb--play__icon'>
					<PlayIcon />
					<span className='visually-hidden'>Video Play</span>
				</span>
			</div>

			<Modal open={open} onClose={handleClose}>
				<Box sx={style}>
					<video controls muted style={{ width: '100%' }} autoPlay={true}>
						<source src='/paradox.mp4' type='video/webm' />
					</video>
				</Box>
			</Modal>
		</>
	)
}
