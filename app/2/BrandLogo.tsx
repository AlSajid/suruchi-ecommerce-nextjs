import Image from 'next/image'

export default function BrandLogo() {
	return (
		<div className='brand__logo--section bg__secondary section--padding color-scheme-2'>
			<div className='container-fluid'>
				<div className='row row-cols-1'>
					<div className='col'>
						<div className='brand__logo--section__inner d-flex justify-content-center align-items-center'>
							<div className='brand__logo--items'>
								<Image className='brand__logo--items__thumbnail--img display-block' src='/images/logo/brand-logo1.png' alt='brand logo img' width={164} height={39} />
							</div>
							<div className='brand__logo--items'>
								<Image className='brand__logo--items__thumbnail--img display-block' src='/images/logo/brand-logo2.png' alt='brand logo img' width={162} height={35} />
							</div>
							<div className='brand__logo--items'>
								<Image className='brand__logo--items__thumbnail--img display-block' src='/images/logo/brand-logo3.png' alt='brand logo img' width={142} height={35} />
							</div>
							<div className='brand__logo--items'>
								<Image className='brand__logo--items__thumbnail--img display-block' src='/images/logo/brand-logo4.png' alt='brand logo img' width={138} height={36} />
							</div>
							<div className='brand__logo--items'>
								<Image className='brand__logo--items__thumbnail--img display-block' src='/images/logo/brand-logo5.png' alt='brand logo img' width={163} height={39} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
