// CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'

import type { Metadata } from 'next'
import { Jost } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import QuickView from '@/components/QuickView/QuickView'
import Newsletter from '@/components/Newsletter'
import ScrollToTop from '@/components/ScrollToTop'

const jost = Jost({
	subsets: ['latin'],
	display: 'swap',
	style: ['normal', 'italic'],
	weight: ['300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
	title: 'Suruchi - Fashion eCommerce',
	description: 'Suruchi - Fashion eCommerce'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={jost.className}>
				<Header />
				{children}
				<Footer />
				<QuickView />
				<Newsletter />
				<ScrollToTop />
			</body>
		</html>
	)
}
