import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Accordion from './Accordion'

export default function CategoryFilter() {
	const [isOpen, setIsOpen] = useState<number>(-1)

	const categories = [
		{
			name: 'Denim Jacket',
			subCategories: ['Jacket Women', 'Woolen Jacket', 'Western denim', 'Mini Dress']
		},
		{
			name: 'Oversize Cotton',
			subCategories: ['Jacket Women', 'Woolen Jacket', 'Western denim', 'Mini Dress']
		},
		{
			name: 'Dairy & Cheese',
			subCategories: ['Jacket Women', 'Woolen Jacket', 'Western denim', 'Mini Dress']
		},
		{
			name: 'Shoulder Bag',
			subCategories: ['Jacket Women', 'Woolen Jacket', 'Western denim', 'Mini Dress']
		},
		{
			name: 'Denim Jacket',
			subCategories: ['Jacket Women', 'Woolen Jacket', 'Western denim', 'Mini Dress']
		}
	]

	return (
		<div className='single__widget widget__bg'>
			<h2 className='widget__title h3'>Categories</h2>
			<ul className='widget__categories--menu'>
				{categories.map((category, index) => (
					<Accordion key={index} id={index} category={category} isOpen={isOpen} setIsOpen={setIsOpen} />
				))}
			</ul>
		</div>
	)
}
