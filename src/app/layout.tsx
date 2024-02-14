import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { ConvexClientProvider } from '@/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Miro clone',
	description: 'Next miro clone app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ConvexClientProvider>{children}</ConvexClientProvider>
			</body>
		</html>
	)
}
