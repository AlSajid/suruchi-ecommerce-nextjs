export default function CategorySelector() {
	return (
		<div className='header__select--categories select'>
			<select className='header__select--inner'>
				<option value='1'>
					All Categories
				</option>
				<option value='2'>Accessories</option>
				<option value='3'>Accessories & More</option>
				<option value='4'>Camera & Video </option>
				<option value='5'>Butters & Eggs </option>
			</select>
		</div>
	)
}
