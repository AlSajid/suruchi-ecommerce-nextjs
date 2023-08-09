// CSS
import 'glightbox/dist/css/glightbox.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'

import Footer from '@/components/Footer'
import type { Metadata } from 'next'
import { Jost } from 'next/font/google'
import Header from '@/components/Header'
// import Preloader from '@/app/loading'
// import QuickView from '@/components/QuickView/QuickView'
// import Newsletter from '@/components/Newsletter'
// import ScrollToTop from '@/components/ScrollToTop'

const jost = Jost({
	subsets: ['latin'],
	display: 'swap',
	style: ['normal', 'italic'],
	weight: ['300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={jost.className}>
				<Header />
				{children}
				<Footer />
				{/* 	<QuickView />
				<Newsletter />
				<ScrollToTop /> */}
			</body>
		</html>
	)
}
