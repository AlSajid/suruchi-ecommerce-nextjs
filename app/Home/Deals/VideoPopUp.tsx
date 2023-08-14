'use client'

import PlayIcon from '@/components/SVGs/Play'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { useState } from 'react'

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '80%',
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
					<video controls style={{ width: '100%' }} autoPlay={true}>
						<source
							src='https://vod-progressive.akamaized.net/exp=1692015531~acl=%2Fvimeo-transcode-storage-prod-us-central1-h264-720p%2F01%2F3008%2F4%2F115041822%2F319100631.mp4~hmac=1d5244f093a2e7033f4a31002659a78042ceb5f6dfd7252bc88c43632d6c2fca/vimeo-transcode-storage-prod-us-central1-h264-720p/01/3008/4/115041822/319100631.mp4'
							type='video/webm'
						/>
					</video>
				</Box>
			</Modal>
		</>
	)
}
