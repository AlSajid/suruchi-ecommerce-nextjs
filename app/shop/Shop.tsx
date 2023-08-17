'use client'

import GridView from './products/GridView'
import { useState } from 'react'
import ListView from './products/ListView'
import Aside from './aside'
import ShopHeader from './ShopHeader'

export default function Shop() {
	const [gridView, setGridView] = useState(true)

	return (
		<section className='shop__section section--padding'>
			<div className='container-fluid'>
				<ShopHeader setGridView={setGridView} gridView={gridView} />

				<div className='row'>
					<Aside />
					{gridView ? <GridView /> : <ListView />}
				</div>
			</div>
		</section>
	)
}
