import Image from 'next/image'
import Link from 'next/link'
import VideoPopUp from '../Home/Deals/VideoPopUp'

export default function About() {
	return (
		<section className='about__section section--padding mb-95'>
			<div className='container'>
				<div className='row'>
					<div className='col-lg-6'>
						<div className='about__thumb d-flex'>
							<div className='about__thumb--items'>
								<Image className='about__thumb--img border-radius-5 display-block' src='/images/others/about-thumb-list1.png' alt='about-thumb' width={290} height={450} />
							</div>
							<div className='about__thumb--items position__relative'>
								<Image className='about__thumb--img border-radius-5 display-block' src='/images/others/about-thumb-list2.png' alt='about-thumb' width={290} height={450} />
								<VideoPopUp />
							</div>
						</div>
					</div>
					<div className='col-lg-6'>
						<div className='about__content'>
							<span className='about__content--subtitle text__secondary mb-20'> Why Choose us</span>
							<h2 className='about__content--maintitle mb-25'>We do not buy from the open market & traders.</h2>
							<p className='about__content--desc mb-20'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit illo, est repellendus are quia voluptate neque reiciendis ea placeat labore maiores cum, hic ducimus ad a dolorem soluta consectetur adipisci. Perspiciatis quas ab quibusdam is.
							</p>
							<p className='about__content--desc mb-25'>Itaque accusantium eveniet a laboriosam dolorem? Magni suscipit est corrupti explicabo non perspiciatis, excepturi ut asperiores assumenda rerum? Provident ab corrupti sequi, voluptates repudiandae eius odit aut.</p>
							<div className='about__author position__relative d-flex align-items-center'>
								<div className='about__author--left'>
									<h4 className='about__author--name'>Bruce Sutton</h4>
									<span className='about__author--rank'>Spa Manager</span>
								</div>
								<Image className='about__author--signature display-block' src='/images/icons/signature.png' alt='signature' width={85} height={45} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
