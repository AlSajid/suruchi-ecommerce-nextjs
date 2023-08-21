'use client'

import Rating from '@/components/Rating/Rating'
import Image from 'next/image'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { useState } from 'react'
import Description from './Tabs/Description'
import Information from './Tabs/Information'
import Reviews from './Tabs/Reviews'
import Custom from './Tabs/Custom'

export default function ProductDetailsTab() {
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
		<section className='product__details--tab__section section--padding'>
			<div className='container'>
				<TabContext value={value}>
					<Box className='product__tab--one product__tab--primary__btn d-flex mb-50'>
						<TabList
							onChange={handleChange}
							TabIndicatorProps={{
								sx: {
									backgroundColor: '#ee2761'
								}
							}}>
							<Tab
								style={{ fontSize: '15px', fontWeight: '700' }}
								className='product__tab--primary__btn__list'
								sx={activeTab}
								value='1'
								label='Description'
							/>
							<Tab
								style={{ fontSize: '15px', fontWeight: '700' }}
								className='product__tab--primary__btn__list'
								sx={activeTab}
								value='2'
								label='Product Reviews'
							/>
							<Tab
								style={{ fontSize: '15px', fontWeight: '700' }}
								className='product__tab--primary__btn__list'
								sx={activeTab}
								value='3'
								label='Additional Info'
							/>
							<Tab
								style={{ fontSize: '15px', fontWeight: '700' }}
								className='product__tab--primary__btn__list'
								sx={activeTab}
								value='4'
								label='Custom Content'
							/>
						</TabList>
					</Box>

					<TabPanel value='1'>
						<Description />
					</TabPanel>

					<TabPanel value='2'>
						<Reviews />
					</TabPanel>

					<TabPanel value='3'>
						<Information />
					</TabPanel>

					<TabPanel value='4'>
						<Custom />
					</TabPanel>
				</TabContext>

			</div>
		</section>
	)
}
