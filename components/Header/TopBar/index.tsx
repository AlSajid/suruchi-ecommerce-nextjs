import Shipping from './Shipping'
import SiteOptions from '../SiteOptions'

export default function TopBar() {
	return (
		<div className='header__topbar bg__secondary'>
			<div className='container-fluid'>
				<div className='header__topbar--inner d-flex align-items-center justify-content-between'>
					<Shipping />
					<div className='d-none d-lg-block'>
						<SiteOptions theme='default' />
					</div>
				</div>
			</div>
		</div>
	)
}
