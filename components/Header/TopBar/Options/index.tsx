import Currencies from './Currencies'
import Languages from './Languages'

export default function Options() {
	return (
		<div className='language__currency d-none d-lg-block'>
			<ul className='d-flex align-items-center'>
				<Languages theme='default' />
				<Currencies theme='default' />
			</ul>
		</div>
	)
}
