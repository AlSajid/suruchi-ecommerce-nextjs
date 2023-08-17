'use client'
import CountUp from 'react-countup'

export default function CounterUpBanner() {
	return (
		<div className='counterup__banner--section counterup__banner__bg2' id='funfactId'>
			<div className='container'>
				<div className='row row-cols-1 align-items-center'>
					<div className='col'>
						<div className='counterup__banner--inner position__relative d-flex align-items-center justify-content-between'>
							<div className='counterup__banner--items text-center'>
								<h2 className='counterup__banner--items__text text-white'>
									YEARS OF <br />
									FOUNDATION
								</h2>
								<span className='counterup__banner--items__number js-counter text-white' data-count='50'>
									<CountUp end={50} />
								</span>
							</div>
							<div className='counterup__banner--items text-center'>
								<h2 className='counterup__banner--items__text text-white'>
									SKILLED TEAM <br />
									MEMBERS
								</h2>
								<span className='counterup__banner--items__number js-counter text-white' data-count='100'>
									<CountUp end={100} />
								</span>
							</div>
							<div className='counterup__banner--items text-center'>
								<h2 className='counterup__banner--items__text text-white'>
									HAPPY <br />
									CUSTOMERS
								</h2>
								<span className='counterup__banner--items__number js-counter text-white' data-count='80'>
									<CountUp end={80} />
								</span>
							</div>
							<div className='counterup__banner--items text-center'>
								<h2 className='counterup__banner--items__text text-white'>
									MONTHLY <br />
									ORDERS
								</h2>
								<span className='counterup__banner--items__number js-counter text-white' data-count='70'>
									<CountUp end={70} />
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
