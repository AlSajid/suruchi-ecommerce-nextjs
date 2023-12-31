import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
	return (
		<div className='main__logo'>
			<h1 className='main__logo--title'>
				<Link className='main__logo--link' href='/'>
					<Image className='main__logo--img' src='/images/logo/nav-log.png' alt='logo-img' width={157} height={36} />
				</Link>
			</h1>
		</div>
	)
}
