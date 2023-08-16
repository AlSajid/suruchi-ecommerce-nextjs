'use client'

import { useEffect, useState } from 'react'

export default function ScrollToTop() {
	const [show, setShow] = useState<boolean>(false)

	const handleScroll = (): void => {
		if (window.scrollY >= 300) {
			setShow(true)
		} else {
			setShow(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	return (
		<>
			{show && (
				<button id='scroll__top' onClick={scrollToTop}>
					<svg xmlns='http://www.w3.org/2000/svg' className='ionicon' viewBox='0 0 512 512'>
						<path fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='48' d='M112 244l144-144 144 144M256 120v292' />
					</svg>
				</button>
			)}
		</>
	)
}
