'use client'

import { OrganizationSwitcherFeature } from '@/features'
import { cn } from '@/shared/lib/utils'
import { Button } from '@/shared/ui'
import { LayoutDashboard, Star } from 'lucide-react'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const font = Poppins({
	subsets: ['latin'],
	weight: ['600'],
})

export const OrgSidebar = () => {
	const params = useSearchParams()
	const favorites = params.get('favorites')

	return (
		<div className="hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5">
			<Link href="">
				<div className="flex items-center gap-x-2">
					<Image src="/logo.svg" width={60} height={60} alt="logo" />
					<span className={cn('font-semibold text-2xl', font)}>Board</span>
				</div>
			</Link>

			<OrganizationSwitcherFeature />

			<div className="space-y-1 w-full">
				<Button
					variant={favorites ? 'ghost' : 'secondary'}
					asChild
					size="lg"
					className="font-normal justify-start px-2 w-full"
				>
					<Link href="/">
						<LayoutDashboard className="h-4 w-4 mr-2" />
						Team boards
					</Link>
				</Button>

				<Button
					variant={favorites ? 'secondary' : 'ghost'}
					asChild
					size="lg"
					className="font-normal justify-start px-2 w-full"
				>
					<Link
						href={{
							pathname: '/',
							query: { favorites: true },
						}}
					>
						<Star className="h-4 w-4 mr-2" />
						Favorite boards
					</Link>
				</Button>
			</div>
		</div>
	)
}
