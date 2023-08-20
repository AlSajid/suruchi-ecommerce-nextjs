import StarIcon from '../SVGs/StarIcon'

export default function Rating({ rate }: { rate: number }) {
	const rating = new Array(rate).fill(null)

	return (
		<ul className='rating product__rating d-flex'>
			{rating.map((_, index) => (
				<li className='rating__list' key={index}>
					<span className='rating__list--icon'>
						<StarIcon />
					</span>
				</li>
			))}
		</ul>
	)
}
