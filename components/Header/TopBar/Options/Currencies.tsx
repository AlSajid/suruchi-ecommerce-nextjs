import DownArrowIcon from '@/components/SVGs/DownArrow'
import Image from 'next/image'

export default function Currencies() {
	return (
		<li className='language__currency--list'>
			<a className='account__currency--link text-white' href='#'>
				<Image src='/images/icons/usd-icon.png' alt='currency' width={12} height={12} />
				<span>$ US Dollar</span>
				<DownArrowIcon />
			</a>
			<div className='dropdown__currency'>
				<ul>
					<li className='currency__items'>
						<a className='currency__text' href='#'>
							CAD
						</a>
					</li>
					<li className='currency__items'>
						<a className='currency__text' href='#'>
							CNY
						</a>
					</li>
					<li className='currency__items'>
						<a className='currency__text' href='#'>
							EUR
						</a>
					</li>
					<li className='currency__items'>
						<a className='currency__text' href='#'>
							GBP
						</a>
					</li>
				</ul>
			</div>
		</li>
	)
}
