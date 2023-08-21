'use client'

import Pagination from '@/components/Pagination'
import { useState } from 'react'
import ShopHeader from '../ShopHeader'
import Aside from '../aside'
import GridView from '../products/GridView'
import ListView from '../products/ListView'

export default function Shop() {
	const [gridView, setGridView] = useState(true)

	return (
		<section className='shop__section section--padding'>
			<div className='container-fluid'>
				<ShopHeader setGridView={setGridView} gridView={gridView} />

				<div className='row'>
					<div className='col-xl-9 col-lg-8'>
						<div className='shop__product--wrapper'>
							<div className='tab_content'>
								{gridView ? <GridView /> : <ListView />}
								<Pagination />
							</div>
						</div>
					</div>

					<div className='col-xl-3 col-lg-4'>
						<Aside />
					</div>
				</div>
			</div>
		</section>
	)
}
