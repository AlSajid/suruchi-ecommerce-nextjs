import Link from 'next/link'

export default function Breadcrumb() {
	const path = [
		{
			name: 'Cart',
			link: 'cart'
		},
		{
			name: 'Information',
			link: 'information'
		},
		{
			name: 'Shipping',
			link: 'shipping'
		},
		{
			name: 'Payment',
			link: 'payment'
		}
	]
	return (
		<nav>
			<ol className='breadcrumb checkout__breadcrumb d-flex'>
				{path.map((item, index) => (
					<li key={index} className={`breadcrumb__item ${index === 1 ? 'breadcrumb__item--current' : ''} d-flex align-items-center`}>
						<Link href={item.link}>
							{item.name}
							<svg className='readcrumb__chevron-icon' xmlns='http://www.w3.org/2000/svg' width='17.007' height='16.831' viewBox='0 0 512 512'>
								<path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144'></path>
							</svg>
						</Link>
					</li>
				))}
			</ol>
		</nav>
	)
}
