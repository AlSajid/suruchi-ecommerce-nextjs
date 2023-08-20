'use client'

import GridView from './products/GridView'
import { useState } from 'react'
import ListView from './products/ListView'
import Aside from './aside'
import ShopHeader from './ShopHeader'
import Link from 'next/link'
import Pagination from '@/components/Pagination'

export default function Shop() {
	const [gridView, setGridView] = useState(true)

	return (
		<section className='shop__section section--padding'>
			<div className='container-fluid'>
				<ShopHeader setGridView={setGridView} gridView={gridView} />

				<div className='row'>
					<Aside />

					<div className='col-xl-9 col-lg-8'>
						<div className='shop__product--wrapper'>
							<div className='tab_content'>
								{gridView ? <GridView /> : <ListView />}
								<Pagination />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
