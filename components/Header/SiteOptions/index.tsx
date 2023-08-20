import Currencies from './Currencies'
import Languages from './Languages'

export default function Options({ theme }: { theme: string }) {
	return (
		<div className='language__currency'>
			<ul className='d-flex align-items-center'>
				<Languages theme={theme} />
				<Currencies theme={theme} />
			</ul>
		</div>
	)
}
