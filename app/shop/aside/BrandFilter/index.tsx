import Link from "next/link";

export default function BrandFilter() {
	return (
		<div className='single__widget widget__bg'>
			<h2 className='widget__title h3'>Brands</h2>
			<ul className='widget__tagcloud'>
				<li className='widget__tagcloud--list'>
					<Link className='widget__tagcloud--link' href='shop'>
						Jacket
					</Link>
				</li>
				<li className='widget__tagcloud--list'>
					<Link className='widget__tagcloud--link' href='shop'>
						Women
					</Link>
				</li>
				<li className='widget__tagcloud--list'>
					<Link className='widget__tagcloud--link' href='shop'>
						Oversize
					</Link>
				</li>
				<li className='widget__tagcloud--list'>
					<Link className='widget__tagcloud--link' href='shop'>
						Cotton
					</Link>
				</li>
				<li className='widget__tagcloud--list'>
					<Link className='widget__tagcloud--link' href='shop'>
						Shoulder
					</Link>
				</li>
				<li className='widget__tagcloud--list'>
					<Link className='widget__tagcloud--link' href='shop'>
						Winter
					</Link>
				</li>
				<li className='widget__tagcloud--list'>
					<Link className='widget__tagcloud--link' href='shop'>
						Accessories
					</Link>
				</li>
				<li className='widget__tagcloud--list'>
					<Link className='widget__tagcloud--link' href='shop'>
						Dress
					</Link>
				</li>
			</ul>
		</div>
	)
}
