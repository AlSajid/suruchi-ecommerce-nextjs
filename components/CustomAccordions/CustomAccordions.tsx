import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionButton from '../SVGs/AccordionArrow'

export default function CustomAccordions({ data }: { data: { title: string }[] }) {
	return (
		<div className='accordion__container'>
			{data.map((item, index) => {
				return (
					<Accordion className='accordion__items' key={index} style={{ boxShadow: 'none', border: '0' }}>
						<AccordionSummary style={{ padding: 0 }} className='accordion__items--title'>
							<button className='faq__accordion--btn accordion__items--button' style={{ margin: 0 }}>
								{item.title}
								<AccordionButton />
							</button>
						</AccordionSummary>
						<AccordionDetails sx={{}}>
							<p className='accordion__items--body__desc'>
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris
								sit amet orci. Aenean dignissim felis.
							</p>
						</AccordionDetails>
					</Accordion>
				)
			})}
		</div>
	)
}
