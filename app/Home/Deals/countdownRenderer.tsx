import CountdownItem from './CountdownItem'

export const renderer = ({ days, hours, minutes, seconds, completed }: { days: number; hours: number; minutes: number; seconds: number; completed: boolean }) => {
	if (completed) {
		return <span>Time&apos;s up!</span>
	} else {
		return (
			<>
				<CountdownItem data={days} unit='Days' />
				<CountdownItem data={hours} unit='Hrs' />
				<CountdownItem data={minutes} unit='Mins' />
				<CountdownItem data={seconds} unit='Secs' />
			</>
		)
	}
}
