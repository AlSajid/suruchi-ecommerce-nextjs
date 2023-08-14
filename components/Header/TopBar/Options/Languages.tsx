'use client'

import DownArrowIcon from '@/components/SVGs/DownArrow'
import Image from 'next/image'
import { useState } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

export default function Languages() {
	const [dropdownOpen, setDropdownOpen] = useState(false)
	const toggle = () => setDropdownOpen(prevState => !prevState)
	const [language, setLanguage] = useState('English')

	return (
		<Dropdown isOpen={dropdownOpen} toggle={toggle} className='language__currency--list'>
			<DropdownToggle className='fs-4 bg-transparent  border-0'>
				<Image className='language__switcher--icon__img' src='/images/icons/language-icon.png' alt='currency' width={15} height={15} />
				<span className='mx-3'>{language}</span>
				<DownArrowIcon />
			</DropdownToggle>
			<DropdownMenu>
				<DropdownItem onClick={() => setLanguage('France')}>France</DropdownItem>
				<DropdownItem onClick={() => setLanguage('Russia')}>Russia</DropdownItem>
				<DropdownItem onClick={() => setLanguage('Spanish')}>Spanish</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	)
}
