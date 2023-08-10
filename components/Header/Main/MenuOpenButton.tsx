import MenuOpenButtonIcon from '@/components/SVGs/MenuOpenButton'

export default function MenuOpenButton() {
	return (
		<div className='offcanvas__header--menu__open '>
			<a className='offcanvas__header--menu__open--btn' href='#' data-offcanvas>
				<MenuOpenButtonIcon />
				<span className='visually-hidden'>Menu Open</span>
			</a>
		</div>
	)
}
