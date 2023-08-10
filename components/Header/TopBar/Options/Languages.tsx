import DownArrowIcon from '@/components/SVGs/DownArrow'
import Image from 'next/image'

export default function Languages() {
	return (
		<li className='language__currency--list'>
			<a className='language__switcher text-white' href='#'>
				<Image className='language__switcher--icon__img' src='/images/icons/language-icon.png' alt='currency' width={15} height={15} />
				<span>English</span>
				<DownArrowIcon />
			</a>
			<div className='dropdown__language'>
				<ul>
					<li className='language__items'>
						<a className='language__text' href='#'>
							France
						</a>
					</li>
					<li className='language__items'>
						<a className='language__text' href='#'>
							Russia
						</a>
					</li>
					<li className='language__items'>
						<a className='language__text' href='#'>
							Spanish
						</a>
					</li>
				</ul>
			</div>
		</li>
	)
}
