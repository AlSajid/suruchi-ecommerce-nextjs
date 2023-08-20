import Link from 'next/link'

export default function HeaderButton({ icon, title, href, children }: { icon: React.ReactNode; title: string; href: string; children?: React.ReactNode }) {
	return (
		<Link className='header__account--btn ' href={href}>
			{icon}
			<span className='header__account--btn__text'>{title}</span>
			{children}
		</Link>
	)
}
