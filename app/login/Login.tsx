import Link from "next/link";

export default function Login() {
	return (
		<div className='login__section section--padding'>
			<div className='container'>
				<form action='#'>
					<div className='login__section--inner'>
						<div className='row row-cols-md-2 row-cols-1'>
							<div className='col'>
								<div className='account__login'>
									<div className='account__login--header mb-25'>
										<h2 className='account__login--header__title h3 mb-10'>Login</h2>
										<p className='account__login--header__desc'>Login if you area a returning customer.</p>
									</div>
									<div className='account__login--inner'>
										<input className='account__login--input' placeholder='Email Addres' type='text' />
										<input className='account__login--input' placeholder='Password' type='password' />
										<div className='account__login--remember__forgot mb-15 d-flex justify-content-between align-items-center'>
											<div className='account__login--remember position__relative'>
												<input className='checkout__checkbox--input' id='check1' type='checkbox' />
												<span className='checkout__checkbox--checkmark'></span>
												<label className='checkout__checkbox--label login__remember--label' htmlFor='check1'>
													Remember me
												</label>
											</div>
											<button className='account__login--forgot' type='submit'>
												Forgot Your Password?
											</button>
										</div>
										<button className='account__login--btn primary__btn' type='submit'>
											Login
										</button>
										<div className='account__login--divide'>
											<span className='account__login--divide__text'>OR</span>
										</div>
										<div className='account__social d-flex justify-content-center mb-15'>
											<Link className='account__social--link facebook' target='_blank' href='https://www.facebook.com'>
												Facebook
											</Link>
											<Link className='account__social--link google' target='_blank' href='https://www.google.com'>
												Google
											</Link>
											<Link className='account__social--link twitter' target='_blank' href='https://twitter.com'>
												Twitter
											</Link>
										</div>
										<p className='account__login--signup__text'>
											Don,t Have an Account? <button type='submit'>Sign up now</button>
										</p>
									</div>
								</div>
							</div>
							<div className='col'>
								<div className='account__login register'>
									<div className='account__login--header mb-25'>
										<h2 className='account__login--header__title h3 mb-10'>Create an Account</h2>
										<p className='account__login--header__desc'>Register here if you are a new customer</p>
									</div>
									<div className='account__login--inner'>
										<input className='account__login--input' placeholder='Username' type='text' />
										<input className='account__login--input' placeholder='Email Address' type='text' />
										<input className='account__login--input' placeholder='Password' type='password' />
										<input className='account__login--input' placeholder='Confirm Password' type='password' />
										<button className='account__login--btn primary__btn mb-10' type='submit'>
											Submit & Register
										</button>
										<div className='account__login--remember position__relative'>
											<input className='checkout__checkbox--input' id='check2' type='checkbox' />
											<span className='checkout__checkbox--checkmark'></span>
											<label className='checkout__checkbox--label login__remember--label' htmlFor='check2'>
												I have read and agree to the terms & conditions
											</label>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}
