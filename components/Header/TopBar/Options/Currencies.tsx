'use client'

import DownArrowIcon from '@/components/SVGs/DownArrow'
import Image from 'next/image'
import { useState } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

export default function Currencies() {
	const [currency, setCurrency] = useState('USD')
	const [dropdownOpen, setDropdownOpen] = useState(false)
	const toggle = () => setDropdownOpen(prevState => !prevState)
	return (
		<Dropdown isOpen={dropdownOpen} toggle={toggle} className='language__currency--list'>
			<DropdownToggle className='fs-4 bg-transparent  border-0' size='lg'>
				<Image src='/images/icons/usd-icon.png' alt='currency' width={12} height={12} />
				<span className='mx-3'>{currency}</span>
				<DownArrowIcon />
			</DropdownToggle>
			<DropdownMenu>
				<DropdownItem onClick={() => setCurrency('CAD')}>CAD</DropdownItem>
				<DropdownItem onClick={() => setCurrency('CNY')}>CNY</DropdownItem>
				<DropdownItem onClick={() => setCurrency('EUR')}>EUR</DropdownItem>
				<DropdownItem onClick={() => setCurrency('GBP')}>GBP</DropdownItem>
			</DropdownMenu>
		</Dropdown>
		// <li className='language__currency--list'>
		// 	<a className='account__currency--link text-white' href='#'>
		// 		<Image src='/images/icons/usd-icon.png' alt='currency' width={12} height={12} />
		// 		<span className='mx-2'>$ US Dollar</span>
		// 		<DownArrowIcon />
		// 	</a>
		// 	<div className='dropdown__currency'>
		// 		<ul>
		// 			<li className='currency__items'>
		// 				<a className='currency__text' href='#'>
		// 					CAD
		// 				</a>
		// 			</li>
		// 			<li className='currency__items'>
		// 				<a className='currency__text' href='#'>
		// 					CNY
		// 				</a>
		// 			</li>
		// 			<li className='currency__items'>
		// 				<a className='currency__text' href='#'>
		// 					EUR
		// 				</a>
		// 			</li>
		// 			<li className='currency__items'>
		// 				<a className='currency__text' href='#'>
		// 					GBP
		// 				</a>
		// 			</li>
		// 		</ul>
		// 	</div>
		// </li>
	)
}
