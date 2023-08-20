export default function CountdownItem({ data, unit }: { data: number; unit: string }) {
	return (
		<div className='countdown__item'>
			<span className='countdown__number'>{data}</span>
			<p className='countdown__text'>{unit}</p>
		</div>
	)
}
