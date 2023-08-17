import CustomAccordions from '@/components/CustomAccordions/CustomAccordions'

export default function FAQ() {
	const queries1 = [
		{
			title: 'What Shipping Methods Are Available?'
		},
		{
			title: 'How Long Will it Take To Get My Package?'
		},
		{
			title: 'What payment types can I use?'
		}
	]

	const queries2 = [
		{
			title: 'Do you ship internationally??'
		},
		{
			title: 'How will my parcel be delivered?'
		},
		{
			title: 'How do I know if something is organic?'
		}
	]

	const queries3 = [
		{
			title: 'What payment types can I use?'
		},
		{
			title: 'Can I pay by Gift Card?'
		},
		{
			title: "Can't make a payment"
		}
	]

	const queries4 = [
		{
			title: 'Has my payment gone through?'
		},
		{
			title: 'Track my order'
		},
		{
			title: "Have'nt received my order"
		}
	]

	const queries5 = [
		{
			title: 'How do I return an item?'
		},
		{
			title: 'What shipping methods are available?'
		},
		{
			title: 'How can I make refund from your website?'
		}
	]

	const queries6 = [
		{
			title: 'I am a new user. How should I start?'
		},
		{
			title: 'What payment methods are accepted?'
		},
		{
			title: 'Do you ship internationally?'
		}
	]

	return (
		<section className='faq__section section--padding'>
			<div className='container'>
				<div className='faq__section--inner'>
					<div className='face__step one border-bottom' id='accordionExample'>
						<h2 className='face__step--title h3 mb-30'>Shipping Information</h2>
						<div className='row'>
							<div className='col-lg-6'>
								<CustomAccordions data={queries1} />
							</div>
							<div className='col-lg-6'>
								<CustomAccordions data={queries2} />
							</div>
						</div>
					</div>
					<div className='face__step one border-bottom' id='accordionExample2'>
						<h3 className='face__step--title mb-30'>Payment Information</h3>
						<div className='row'>
							<div className='col-lg-6'>
								<CustomAccordions data={queries3} />
							</div>
							<div className='col-lg-6'>
								<CustomAccordions data={queries4} />
							</div>
						</div>
					</div>
					<div className='face__step one' id='accordionExample3'>
						<h3 className='face__step--title mb-30'>Orders and Returns</h3>
						<div className='row'>
							<div className='col-lg-6'>
								<CustomAccordions data={queries5} />
							</div>
							<div className='col-lg-6'>
								<CustomAccordions data={queries6} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
