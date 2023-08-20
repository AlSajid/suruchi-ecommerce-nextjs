import Link from 'next/link'

export default function MenuItem({ link, title }: { link: string; title: string }) {
	return (
		<li className='header__menu--items'>
			<Link className='header__menu--link' href={link}>
				{title}
			</Link>
		</li>
	)
}
