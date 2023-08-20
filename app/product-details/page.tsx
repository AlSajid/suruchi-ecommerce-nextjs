import ProductDetails from './ProductDetails'
import ProductDetailsTab from './ProductDetailsTab'
import ContentWrapper from '@/components/ContentWrapper'

export default function Page() {
	return (
		<ContentWrapper title='Product Details'>
			<ProductDetails />
			<ProductDetailsTab />
		</ContentWrapper>
	)
}
