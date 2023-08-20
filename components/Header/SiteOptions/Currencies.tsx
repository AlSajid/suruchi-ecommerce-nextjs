'use client'

import DownArrowIcon from '@/components/SVGs/DownArrow'
import Image from 'next/image'
import { useState } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

export default function Currencies({ theme }: { theme: string }) {
	const [currency, setCurrency] = useState('USD')
	const [dropdownOpen, setDropdownOpen] = useState(false)
	const toggle = () => setDropdownOpen(prevState => !prevState)

	return (
		<Dropdown isOpen={dropdownOpen} toggle={toggle} className='language__currency--list'>
			<DropdownToggle className='fs-4 bg-transparent  border-0' size='lg'>
				<Image src='/images/icons/usd-icon.png' alt='currency' width={12} height={12} />
				<span className={`mx-3 ${theme === 'light' && 'text-black'}`}>{currency}</span>
				<DownArrowIcon />
			</DropdownToggle>
			<DropdownMenu>
				<DropdownItem onClick={() => setCurrency('CAD')}>CAD</DropdownItem>
				<DropdownItem onClick={() => setCurrency('CNY')}>CNY</DropdownItem>
				<DropdownItem onClick={() => setCurrency('EUR')}>EUR</DropdownItem>
				<DropdownItem onClick={() => setCurrency('GBP')}>GBP</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	)
}
