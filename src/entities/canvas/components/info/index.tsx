import React, { FC } from 'react'
import { Props } from './types'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import { Button, Hint } from '@/shared/ui'
import { cn } from '@/shared/lib/utils'
import Link from 'next/link'

const font = Poppins({
	subsets: ['latin'],
	weight: ['600'],
})

const TabSeparator = () => {
	return <div className="text-neutral-300 px-1.5">|</div>
}

export const CanvasInfo: FC<Props> = ({ boardId, title, onEdit, actions }) => {
	return (
		<div className="absolute top-2 left-2 bg-white rounded-md px-1.5 shadow-md h-12 flex items-center">
			<Hint label="Go to boards" side="bottom" sideOffset={10}>
				<Button asChild className="px-2 text-[20px]" variant="board">
					<Link href={'/'}>
						<Image
							src={'/logo.svg'}
							alt="Logo"
							width={40}
							height={40}
							className="mr-2"
						/>

						<span className={(cn('font-semibold  text-black'), font.className)}>
							Board
						</span>
					</Link>
				</Button>
			</Hint>

			<TabSeparator />

			<Hint label="Edit title" side="bottom" sideOffset={10}>
				<Button
					variant="board"
					onClick={() => onEdit(boardId, title)}
					className="text-base font-normal px-2"
				>
					{title}
				</Button>
			</Hint>

			<TabSeparator />

			{actions}
		</div>
	)
}

export const CanvasInfoSkeleton = () => {
	return (
		<div className="absolute top-2 left-2 bg-white rounded-md px-1.5 shadow-md h-12 flex items-center w-[300px]" />
	)
}
