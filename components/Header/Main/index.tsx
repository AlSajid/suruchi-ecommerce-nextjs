import Search from './Search'
import AccountMenu from './AccountMenu'
import Logo from './Logo'
import StickyMenu from './StickyMenu'
import StickyAccount from './StickyAccount'
import MenuOpenButton from './MenuOpenButton'

export default function Main() {
	return (
		<div className='main__header header__sticky'>
			<div className='container-fluid'>
				<div className='main__header--inner position__relative d-flex justify-content-between align-items-center'>
					<MenuOpenButton />
					<Logo />
					<Search />
					<AccountMenu />
					<StickyMenu />
					<StickyAccount />
				</div>
			</div>
		</div>
	)
}
