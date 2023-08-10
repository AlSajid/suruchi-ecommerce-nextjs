import Shipping from './Shipping'
import Options from './Options'

export default function TopBar() {
	return (
		<div className='header__topbar bg__secondary'>
			<div className='container-fluid'>
				<div className='header__topbar--inner d-flex align-items-center justify-content-between'>
					<Shipping />
					<Options />
				</div>
			</div>
		</div>
	)
}
