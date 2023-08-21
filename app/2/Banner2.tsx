import Image from 'next/image'

export default function Banner2() {
	return (
		<section className='banner__section banner__discount section--padding color-scheme-2 pt-0'>
			<div className='container-fluid'>
				<div className='banner__discount--inner position__relative'>
					<div className='row row-cols-sm-2 row-cols-1'>
						<div className='col'>
							<div className='banner__items banner__discount--items position__relative'>
								<a
									className='banner__items--thumbnail '
									href='shop'>
									<Image
										className='banner__items--thumbnail__img'
										src='/images/banners/banner12.png'
										alt='banner-img'
										width={750}
										height={462}
									/>
								</a>
							</div>
						</div>
						<div className='col'>
							<div className='banner__items banner__discount--items position__relative'>
								<a
									className='banner__items--thumbnail '
									href='shop'>
									<Image
										className='banner__items--thumbnail__img'
										src='/images/banners/banner13.png'
										alt='banner-img'
										width={750}
										height={462}
									/>
								</a>
							</div>
						</div>
					</div>
					<div className='banner__discount--content text-center'>
						<span className='banner__discount--content__subtitle'>Summer Collection 2022</span>
						<h2 className='banner__discount--content__title h3'>
							Get 35% Diseount For <br />
							Couple Special
						</h2>
						<a
							className='banner__discount--content__link'
							href='shop'>
							SHOP NOW
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
