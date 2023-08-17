import Image from 'next/image'
import Link from 'next/link'

export default function Accordion({ category, id, isOpen, setIsOpen }: { category: { name: string; subCategories: string[] }; id: number; isOpen: number; setIsOpen: Function }) {
	const show = { display: 'block' }
	const hide = { display: 'none' }

	const handleAccordion = (id: number) => {
		if (isOpen === id) {
			setIsOpen(-1)
		} else {
			setIsOpen(id)
		}
	}

	return (
		<li className={`widget__categories--menu__list ${isOpen === id && 'active'}`}>
			<label className='widget__categories--menu__label d-flex align-items-center' onClick={() => handleAccordion(id)}>
				<Image className='widget__categories--menu__img' src='/images/products/small-product1.png' alt='categories-img' width={100} height={120} />
				<span className='widget__categories--menu__text'>{category.name}</span>
				<svg className='widget__categories--menu__arrowdown--icon' xmlns='http:/www.w3.org/2000/svg' width='12.355' height='8.394'>
					<path d='M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z' transform='translate(-6 -8.59)' fill='currentColor'></path>
				</svg>
			</label>

			<ul className='widget__categories--sub__menu' style={isOpen === id ? show : hide}>
				{category.subCategories.map((subCategory: string, index: number) => (
					<li className='widget__categories--sub__menu--list' key={index}>
						<Link className='widget__categories--sub__menu--link d-flex align-items-center' href='shop'>
							<Image className='widget__categories--sub__menu--img' src='/images/products/small-product2.png' alt='categories-img' width={100} height={120} />
							<span className='widget__categories--sub__menu--text'>{subCategory}</span>
						</Link>
					</li>
				))}
			</ul>
		</li>
	)
}
