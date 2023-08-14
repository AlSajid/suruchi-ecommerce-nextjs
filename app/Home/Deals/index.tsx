import VideoPopUp from "./VideoPopUp";

export default function Deals() {
	return (
		<section className='deals__banner--section section--padding pt-0'>
			<div className='container-fluid'>
				<div className='deals__banner--inner banner__bg'>
					<div className='row row-cols-1 align-items-center'>
						<div className='col'>
							<div className='deals__banner--content position__relative'>
								<span className='deals__banner--content__subtitle text__secondary'>Hurry up and Get 25% Discount</span>
								<h2 className='deals__banner--content__maintitle'>Deals Of The Day</h2>
								<p className='deals__banner--content__desc'>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, <br /> sed do eiusmod tempor incididunt ut labore
								</p>

								<div className='deals__banner--countdown d-flex' data-countdown='Sep 30, 2022 00:00:00'></div>
								<a className='primary__btn' href='shop'>
									Show Collection
									<svg className='primary__btn--arrow__icon' xmlns='http://www.w3.org/2000/svg' width='20.2' height='12.2' viewBox='0 0 6.2 6.2'>
										<path d='M7.1,4l-.546.546L8.716,6.713H4v.775H8.716L6.554,9.654,7.1,10.2,9.233,8.067,10.2,7.1Z' transform='translate(-4 -4)' fill='currentColor'></path>
									</svg>
								</a>
								<br />

								<VideoPopUp />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
