'use client'

import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Trending from './Trending'
import Featured from './Featured'
import NewArrival from './NewArrival'
import { useState } from 'react'

export default function NewProducts() {
	const [value, setValue] = useState('1')

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue)
	}

	const activeTab = {
		'&.Mui-selected': {
			color: '#ee2761'
		},
		'textTransform': 'none'
	}

	return (
		<section className='product__section section--padding pt-0'>
			<div className='container-fluid'>
				<div className='section__heading text-center mb-35'>
					<h2 className='section__heading--maintitle'>New Products</h2>
				</div>

				<Box>
					<TabContext value={value}>
						<Box className='product__tab--one product__tab--primary__btn d-flex justify-content-center mb-50'>
							<TabList
								onChange={handleChange}
								TabIndicatorProps={{
									sx: {
										backgroundColor: '#ee2761'
									}
								}}>
								<Tab className='product__tab--primary__btn__list' sx={activeTab} value='1' label='Featured' />
								<Tab className='product__tab--primary__btn__list' sx={activeTab} value='2' label='Trending' />
								<Tab className='product__tab--primary__btn__list' sx={activeTab} value='3' label='New Arrival' />
							</TabList>
						</Box>
						<TabPanel value='1'>
							<Featured />
						</TabPanel>
						<TabPanel value='2'>
							<Trending />
						</TabPanel>
						<TabPanel value='3'>
							<NewArrival />
						</TabPanel>
					</TabContext>
				</Box>
			</div>
		</section>
	)
}
