import AccountIcon from '@/components/SVGs/Account'

export default function MyAccount() {
	return (
		<li className='header__account--items'>
			<a className='header__account--btn' href='my-account'>
				<AccountIcon />
				<span className='header__account--btn__text'>My Account</span>
			</a>
		</li>
	)
}
