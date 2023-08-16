import AccountIcon from '@/components/SVGs/Account'
import Link from 'next/link'

export default function MyAccount() {
	return (
		<li className='header__account--items'>
			<Link className='header__account--btn' href='my-account'>
				<AccountIcon />
				<span className='header__account--btn__text'>My Account</span>
			</Link>
		</li>
	)
}
