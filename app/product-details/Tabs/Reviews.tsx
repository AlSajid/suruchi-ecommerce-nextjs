import Rating from "@/components/Rating/Rating";
import Image from "next/image";
import Link from "next/link";

export default function Reviews() {
	return (
		<div
			id='reviews'
			className='tab_pane active show'>
			<div className='product__reviews'>
				<div className='product__reviews--header'>
					<h2 className='product__reviews--header__title h3 mb-20'>Customer Reviews</h2>
					<div className='reviews__ratting d-flex align-items-center'>
						<Rating rate={4} />
						<span className='reviews__summary--caption'>Based on 2 reviews</span>
					</div>
					<Link
						className='actions__newreviews--btn primary__btn'
						href='#writereview'>
						Write A Review
					</Link>
				</div>
				<div className='reviews__comment--area'>
					<div className='reviews__comment--list d-flex'>
						<div className='reviews__comment--thumb'>
							<Image
								src='/images/others/comment-thumb1.png'
								alt='comment-thumb'
								width={120}
								height={120}
							/>
						</div>
						<div className='reviews__comment--content'>
							<div className='reviews__comment--top d-flex justify-content-between'>
								<div className='reviews__comment--top__left'>
									<h3 className='reviews__comment--content__title h4'>Richard Smith</h3>
									<Rating rate={5} />
								</div>
								<span className='reviews__comment--content__date'>February 18, 2022</span>
							</div>
							<p className='reviews__comment--content__desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ex repellat officiis neque. Veniam, rem nesciunt. Assumenda distinctio, autem error repellat eveniet ratione dolor facilis accusantium amet pariatur, non eius!</p>
						</div>
					</div>
					<div className='reviews__comment--list margin__left d-flex'>
						<div className='reviews__comment--thumb'>
							<Image
								src='/images/others/comment-thumb2.png'
								alt='comment-thumb'
								width={120}
								height={120}
							/>
						</div>
						<div className='reviews__comment--content'>
							<div className='reviews__comment--top d-flex justify-content-between'>
								<div className='reviews__comment--top__left'>
									<h3 className='reviews__comment--content__title h4'>Laura Johnson</h3>
									<Rating rate={5} />
								</div>
								<span className='reviews__comment--content__date'>February 18, 2022</span>
							</div>
							<p className='reviews__comment--content__desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ex repellat officiis neque. Veniam, rem nesciunt. Assumenda distinctio, autem error repellat eveniet ratione dolor facilis accusantium amet pariatur, non eius!</p>
						</div>
					</div>
					<div className='reviews__comment--list d-flex'>
						<div className='reviews__comment--thumb'>
							<Image
								src='/images/others/comment-thumb3.png'
								alt='comment-thumb'
								width={120}
								height={120}
							/>
						</div>
						<div className='reviews__comment--content'>
							<div className='reviews__comment--top d-flex justify-content-between'>
								<div className='reviews__comment--top__left'>
									<h3 className='reviews__comment--content__title h4'>John Deo</h3>
									<Rating rate={5} />
								</div>
								<span className='reviews__comment--content__date'>February 18, 2022</span>
							</div>
							<p className='reviews__comment--content__desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ex repellat officiis neque. Veniam, rem nesciunt. Assumenda distinctio, autem error repellat eveniet ratione dolor facilis accusantium amet pariatur, non eius!</p>
						</div>
					</div>
				</div>
				<div
					id='writereview'
					className='reviews__comment--reply__area'>
					<form action='#'>
						<h3 className='reviews__comment--reply__title mb-15'>Add a review </h3>
						<div className='reviews__ratting d-flex align-items-center mb-20'>
							<Rating rate={5} />
						</div>
						<div className='row'>
							<div className='col-12 mb-10'>
								<textarea
									className='reviews__comment--reply__textarea'
									placeholder='Your Comments....'></textarea>
							</div>
							<div className='col-lg-6 col-md-6 mb-15'>
								<label>
									<input
										className='reviews__comment--reply__input'
										placeholder='Your Name....'
										type='text'
									/>
								</label>
							</div>
							<div className='col-lg-6 col-md-6 mb-15'>
								<label>
									<input
										className='reviews__comment--reply__input'
										placeholder='Your Email....'
										type='email'
									/>
								</label>
							</div>
						</div>
						<button
							className='reviews__comment--btn text-white primary__btn'
							data-hover='Submit'
							type='submit'>
							SUBMIT
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}
